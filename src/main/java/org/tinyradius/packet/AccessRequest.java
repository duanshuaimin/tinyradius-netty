package org.tinyradius.packet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.tinyradius.attribute.RadiusAttribute;
import org.tinyradius.attribute.StringAttribute;
import org.tinyradius.util.RadiusException;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.nio.charset.StandardCharsets.UTF_8;
import static java.util.Objects.requireNonNull;
import static org.tinyradius.packet.Util.*;

/**
 * This class represents an Access-Request Radius packet.
 */
public class AccessRequest extends RadiusPacket {

    private static final Logger logger = LoggerFactory.getLogger(AccessRequest.class);

    /**
     * Passphrase Authentication Protocol
     */
    public static final String AUTH_PAP = "pap";

    /**
     * Challenged Handshake Authentication Protocol
     */
    public static final String AUTH_CHAP = "chap";

    /**
     * Microsoft Challenged Handshake Authentication Protocol V2
     */
    public static final String AUTH_MS_CHAP_V2 = "mschapv2";

    /**
     * Extended Authentication Protocol
     */
    public static final String AUTH_EAP = "eap";

    public static final Set<String> AUTH_PROTOCOLS = new HashSet<>(Arrays.asList(AUTH_PAP, AUTH_CHAP, AUTH_MS_CHAP_V2, AUTH_EAP));
    /**
     * Temporary storage for the unencrypted User-Password
     * attribute.
     */
    private String password;

    /**
     * Authentication protocol for this access request.
     */
    private String authProtocol = AUTH_PAP;

    /**
     * CHAP password from a decoded CHAP Access-Request.
     */
    private byte[] chapPassword;

    /**
     * CHAP challenge from a decoded CHAP Access-Request.
     */
    private byte[] chapChallenge;

    private static final SecureRandom random = new SecureRandom();

    /**
     * Radius type code for Radius attribute User-Name
     */
    private static final int USER_NAME = 1;

    /**
     * Radius attribute type for User-Password attribute.
     */
    private static final int USER_PASSWORD = 2;

    /**
     * Radius attribute type for CHAP-Password attribute.
     */
    private static final int CHAP_PASSWORD = 3;

    /**
     * Radius attribute type for CHAP-Challenge attribute.
     */
    private static final int CHAP_CHALLENGE = 60;

    /**
     * Radius attribute type for EAP-Message attribute.
     */
    private static final int EAP_MESSAGE = 79;

    /**
     * Vendor id for Microsoft
     */
    private static final int MICROSOFT = 311;

    /**
     * Radius attribute type for MS-CHAP-Challenge attribute.
     */
    private static final int MS_CHAP_CHALLENGE = 11;

    /**
     * Radius attribute type for MS-CHAP-Challenge attribute.
     */
    private static final int MS_CHAP2_RESPONSE = 25;

    /**
     * Constructs an empty Access-Request packet.
     */
    public AccessRequest() {
        super(ACCESS_REQUEST);
    }

    /**
     * Constructs an Access-Request packet, sets the
     * code, identifier and adds an User-Name and an
     * User-Password attribute (PAP).
     *
     * @param userName     user name
     * @param userPassword user password
     */
    public AccessRequest(String userName, String userPassword) {
        this();
        setUserName(userName);
        setUserPassword(userPassword);
    }

    /**
     * Sets the User-Name attribute of this Access-Request.
     *
     * @param userName user name to set
     */
    public void setUserName(String userName) {
        requireNonNull(userName, "user name not set");
        if (userName.isEmpty())
            throw new IllegalArgumentException("empty user name not allowed");

        removeAttributes(USER_NAME);
        addAttribute(new StringAttribute(USER_NAME, userName));
    }

    /**
     * Sets the plain-text user password.
     *
     * @param userPassword user password to set
     */
    public void setUserPassword(String userPassword) {
        if (userPassword == null || userPassword.isEmpty())
            throw new IllegalArgumentException("password is empty");
        this.password = userPassword;
    }

    /**
     * Retrieves the plain-text user password.
     * Returns null for CHAP - use verifyPassword().
     *
     * @return user password
     * @see #verifyPassword(String)
     */
    public String getUserPassword() {
        return password;
    }

    /**
     * Retrieves the user name from the User-Name attribute.
     *
     * @return user name
     */
    public String getUserName() {
        List<RadiusAttribute> attrs = getAttributes(USER_NAME);
        if (attrs.size() != 1)
            throw new RuntimeException("exactly one User-Name attribute required");

        return attrs.get(0).getAttributeValue();
    }

    /**
     * Returns the protocol used for encrypting the passphrase.
     *
     * @return one of {@link #AUTH_PROTOCOLS}
     */
    public String getAuthProtocol() {
        return authProtocol;
    }

    /**
     * Selects the protocol to use for encrypting the passphrase when
     * encoding this Radius packet.
     *
     * @param authProtocol {@link #AUTH_PROTOCOLS}
     */
    public void setAuthProtocol(String authProtocol) {
        if (authProtocol != null && AUTH_PROTOCOLS.contains(authProtocol))
            this.authProtocol = authProtocol;
        else
            throw new IllegalArgumentException("protocol must be in " + AUTH_PROTOCOLS);
    }

    /**
     * Verifies that the passed plain-text password matches the password
     * (hash) send with this Access-Request packet. Works with both PAP
     * and CHAP.
     *
     * @param plaintext password to verify packet against
     * @return true if the password is valid, false otherwise
     * @throws RadiusException password verification failed or not supported
     *                         for auth protocol
     */
    public boolean verifyPassword(String plaintext) throws RadiusException {
        if (plaintext == null || plaintext.isEmpty())
            throw new IllegalArgumentException("password is empty");
        switch (getAuthProtocol()) {
            case AUTH_CHAP:
                return verifyChapPassword(plaintext);
            case AUTH_MS_CHAP_V2:
                throw new RadiusException(AUTH_MS_CHAP_V2 + " verification not supported yet");
            case AUTH_EAP:
                throw new RadiusException(AUTH_EAP + " verification not supported yet");
            default:
                return getUserPassword().equals(plaintext);
        }
    }

    /**
     * Decrypts the User-Password attribute.
     */
    @Override
    protected void decodeRequestAttributes(String sharedSecret) throws RadiusException {
        // detect auth protocol
        RadiusAttribute userPassword = getAttribute(USER_PASSWORD);
        RadiusAttribute chapPassword = getAttribute(CHAP_PASSWORD);
        RadiusAttribute chapChallenge = getAttribute(CHAP_CHALLENGE);
        RadiusAttribute msChapChallenge = getAttribute(MICROSOFT, MS_CHAP_CHALLENGE);
        RadiusAttribute msChap2Response = getAttribute(MICROSOFT, MS_CHAP2_RESPONSE);
        List<RadiusAttribute> eapMessage = getAttributes(EAP_MESSAGE);

        if (userPassword != null) {
            setAuthProtocol(AUTH_PAP);
            this.password = decodePapPassword(userPassword.getAttributeData(), sharedSecret.getBytes(UTF_8));
            // copy truncated data
            userPassword.setAttributeData(this.password.getBytes(UTF_8));
        } else if (chapPassword != null && chapChallenge != null) {
            setAuthProtocol(AUTH_CHAP);
            this.chapPassword = chapPassword.getAttributeData();
            this.chapChallenge = chapChallenge.getAttributeData();
        } else if (chapPassword != null && authenticator.length == 16) {
            setAuthProtocol(AUTH_CHAP);
            this.chapPassword = chapPassword.getAttributeData();
            this.chapChallenge = authenticator;
        } else if (msChapChallenge != null && msChap2Response != null) {
            setAuthProtocol(AUTH_MS_CHAP_V2);
            this.chapPassword = msChap2Response.getAttributeData();
            this.chapChallenge = msChapChallenge.getAttributeData();
        } else if (eapMessage.size() > 0) {
            setAuthProtocol(AUTH_EAP);
        } else
            throw new RadiusException("Access-Request: User-Password or CHAP-Password/CHAP-Challenge missing");
    }

    @Override
    protected void encodeRequest(String sharedSecret) throws RadiusException, IOException {
        // create authenticator only if needed
        if (authenticator == null)
            authenticator = generateRandomizedAuthenticator(sharedSecret);

        // then encode attributes (User-Password attribute needs the authenticator)
        encodeRequestAttributes(sharedSecret);

        // length check now after attributes encoded
        byte[] attributes = getAttributeBytes();
        int packetLength = RADIUS_HEADER_LENGTH + attributes.length;
        if (packetLength > MAX_PACKET_LENGTH)
            throw new RuntimeException("packet too long");
    }

    /**
     * Sets and encrypts the User-Password attribute.
     */
    protected void encodeRequestAttributes(String sharedSecret) throws RadiusException {
        if (password == null || password.isEmpty())
            return;
        // ok for proxied packets whose CHAP password is already encrypted
        // throw new RuntimeException("no password set");

        switch (getAuthProtocol()) {
            case AUTH_PAP: {
                byte[] pass = encodePapPassword(this.password.getBytes(UTF_8), sharedSecret.getBytes(UTF_8));
                removeAttributes(USER_PASSWORD);
                addAttribute(new RadiusAttribute(USER_PASSWORD, pass));
                break;
            }
            case AUTH_CHAP: {
                byte[] challenge = createChapChallenge();
                byte[] pass = encodeChapPassword(password, challenge);
                removeAttributes(CHAP_PASSWORD);
                removeAttributes(CHAP_CHALLENGE);
                addAttribute(new RadiusAttribute(CHAP_PASSWORD, pass));
                addAttribute(new RadiusAttribute(CHAP_CHALLENGE, challenge));
                break;
            }
            case AUTH_MS_CHAP_V2:
                throw new RadiusException("encoding not supported for " + AUTH_MS_CHAP_V2);
            case AUTH_EAP:
                throw new RadiusException("encoding not supported for " + AUTH_EAP);
        }
    }

    /**
     * This method encodes the plaintext user password according to RFC 2865.
     *
     * @param userPass     the password to encrypt
     * @param sharedSecret shared secret
     * @return the byte array containing the encrypted password
     */
    private byte[] encodePapPassword(final byte[] userPass, byte[] sharedSecret) {
        requireNonNull(userPass, "userPass cannot be null");
        requireNonNull(sharedSecret, "sharedSecret cannot be null");

        byte[] C = authenticator;
        byte[] P = pad(userPass, C.length);
        byte[] result = new byte[P.length];

        for (int i = 0; i < P.length; i += C.length) {
            C = compute(sharedSecret, C);
            C = xor(P, i, C.length, C, 0, C.length);
            System.arraycopy(C, 0, result, i, C.length);
        }

        return result;
    }

    /**
     * Decodes the passed encrypted password and returns the clear-text form.
     *
     * @param encryptedPass encrypted password
     * @param sharedSecret  shared secret
     * @return decrypted password
     */
    private String decodePapPassword(byte[] encryptedPass, byte[] sharedSecret) throws RadiusException {
        if (encryptedPass == null || encryptedPass.length < 16) {
            // PAP passwords require at least 16 bytes
            logger.warn("invalid Radius packet: User-Password attribute with malformed PAP password, length = "
                    + (encryptedPass == null ? 0 : encryptedPass.length) + ", but length must be greater than 15");
            throw new RadiusException("malformed User-Password attribute");
        }

        byte[] result = new byte[encryptedPass.length];
        byte[] C = this.getAuthenticator();

        for (int i = 0; i < encryptedPass.length; i += C.length) {
            C = compute(sharedSecret, C);
            C = xor(encryptedPass, i, C.length, C, 0, C.length);
            System.arraycopy(C, 0, result, i, C.length);
            System.arraycopy(encryptedPass, i, C, 0, C.length);
        }

        return getStringFromUtf8(result);
    }

    /**
     * Creates a random CHAP challenge using a secure random algorithm.
     *
     * @return 16 byte CHAP challenge
     */
    private byte[] createChapChallenge() {
        byte[] challenge = new byte[16];
        random.nextBytes(challenge);
        return challenge;
    }

    /**
     * Encodes a plain-text password using the given CHAP challenge.
     *
     * @param plaintext     plain-text password
     * @param chapChallenge CHAP challenge
     * @return CHAP-encoded password
     */
    private byte[] encodeChapPassword(String plaintext, byte[] chapChallenge) {
        // see RFC 2865 section 2.2
        byte chapIdentifier = (byte) random.nextInt(256);
        byte[] chapPassword = new byte[17];
        chapPassword[0] = chapIdentifier;

        MessageDigest md5 = getResetMd5Digest();
        md5.update(chapIdentifier);
        md5.update(plaintext.getBytes(UTF_8));
        byte[] chapHash = md5.digest(chapChallenge);

        System.arraycopy(chapHash, 0, chapPassword, 1, 16);
        return chapPassword;
    }

    /**
     * Verifies a CHAP password against the given plaintext password.
     *
     * @return plain-text password
     */
    private boolean verifyChapPassword(String plaintext) throws RadiusException {
        if (plaintext == null || plaintext.isEmpty())
            throw new IllegalArgumentException("plaintext must not be empty");
        if (chapChallenge == null || chapChallenge.length != 16)
            throw new RadiusException("CHAP challenge must be 16 bytes");
        if (chapPassword == null || chapPassword.length != 17)
            throw new RadiusException("CHAP password must be 17 bytes");

        byte chapIdentifier = chapPassword[0];
        MessageDigest md5 = getResetMd5Digest();
        md5.update(chapIdentifier);
        md5.update(plaintext.getBytes(UTF_8));
        byte[] chapHash = md5.digest(chapChallenge);

        // compare
        for (int i = 0; i < 16; i++)
            if (chapHash[i] != chapPassword[i + 1])
                return false;
        return true;
    }

    private byte[] compute(byte[]... values) {
        MessageDigest md = getResetMd5Digest();

        for (byte[] b : values)
            md.update(b);

        return md.digest();
    }
}