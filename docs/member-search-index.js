memberSearchIndex = [{
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "ACCESS_ACCEPT"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "ACCESS_CHALLENGE"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "ACCESS_REJECT"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "ACCESS_REQUEST"}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "AccessRequest(Dictionary, int, byte[])",
    "url": "AccessRequest-org.tinyradius.dictionary.Dictionary-int-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "AccessRequest(Dictionary, int, byte[], String, String)",
    "url": "AccessRequest-org.tinyradius.dictionary.Dictionary-int-byte:A-java.lang.String-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "AccessRequest(Dictionary, int, byte[], List<RadiusAttribute>)",
    "url": "AccessRequest-org.tinyradius.dictionary.Dictionary-int-byte:A-java.util.List-"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "ACCOUNTING_MESSAGE"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "ACCOUNTING_REQUEST"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "ACCOUNTING_RESPONSE"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "ACCOUNTING_STATUS"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "AccountingRequest(Dictionary, int, byte[])",
    "url": "AccountingRequest-org.tinyradius.dictionary.Dictionary-int-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "AccountingRequest(Dictionary, int, byte[], String, int)",
    "url": "AccountingRequest-org.tinyradius.dictionary.Dictionary-int-byte:A-java.lang.String-int-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "AccountingRequest(Dictionary, int, byte[], List<RadiusAttribute>)",
    "url": "AccountingRequest-org.tinyradius.dictionary.Dictionary-int-byte:A-java.util.List-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "ACCT_STATUS_TYPE_ACCOUNTING_OFF"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "ACCT_STATUS_TYPE_ACCOUNTING_ON"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "ACCT_STATUS_TYPE_INTERIM_UPDATE"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "ACCT_STATUS_TYPE_START"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "ACCT_STATUS_TYPE_STOP"
}, {"p": "org.tinyradius.server.handler", "c": "AcctHandler", "l": "AcctHandler()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "addAttribute(String, String)",
    "url": "addAttribute-java.lang.String-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "addAttribute(RadiusAttribute)",
    "url": "addAttribute-org.tinyradius.attribute.RadiusAttribute-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "addAttributeType(AttributeType)",
    "url": "addAttributeType-org.tinyradius.attribute.AttributeType-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "WritableDictionary",
    "l": "addAttributeType(AttributeType)",
    "url": "addAttributeType-org.tinyradius.attribute.AttributeType-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "addEnumerationValue(int, String)",
    "url": "addEnumerationValue-int-java.lang.String-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "addSubAttribute(String, String)",
    "url": "addSubAttribute-java.lang.String-java.lang.String-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "addSubAttribute(RadiusAttribute)",
    "url": "addSubAttribute-org.tinyradius.attribute.RadiusAttribute-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "addVendor(int, String)",
    "url": "addVendor-int-java.lang.String-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "WritableDictionary",
    "l": "addVendor(int, String)",
    "url": "addVendor-int-java.lang.String-"
}, {"p": "org.tinyradius.attribute", "c": "Attributes", "l": "Attributes()"}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "AttributeType(int, int, String, String)",
    "url": "AttributeType-int-int-java.lang.String-java.lang.String-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "AttributeType(int, String, String)",
    "url": "AttributeType-int-java.lang.String-java.lang.String-"
}, {"p": "org.tinyradius.packet", "c": "AccessRequest", "l": "AUTH_CHAP"}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "AUTH_EAP"
}, {"p": "org.tinyradius.packet", "c": "AccessRequest", "l": "AUTH_MS_CHAP_V2"}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "AUTH_PAP"
}, {"p": "org.tinyradius.packet", "c": "AccessRequest", "l": "AUTH_PROTOCOLS"}, {
    "p": "org.tinyradius.server.handler",
    "c": "AuthHandler",
    "l": "AuthHandler()"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "ClientHandler",
    "l": "channelRead0(ChannelHandlerContext, DatagramPacket)",
    "url": "channelRead0-io.netty.channel.ChannelHandlerContext-io.netty.channel.socket.DatagramPacket-"
}, {
    "p": "org.tinyradius.server",
    "c": "HandlerAdapter",
    "l": "channelRead0(ChannelHandlerContext, DatagramPacket)",
    "url": "channelRead0-io.netty.channel.ChannelHandlerContext-io.netty.channel.socket.DatagramPacket-"
}, {"p": "org.tinyradius.client.handler", "c": "ClientHandler", "l": "ClientHandler()"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "COA_ACK"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "COA_NAK"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "COA_REQUEST"
}, {
    "p": "org.tinyradius.client",
    "c": "RadiusClient",
    "l": "communicate(RadiusPacket, RadiusEndpoint)",
    "url": "communicate-org.tinyradius.packet.RadiusPacket-org.tinyradius.util.RadiusEndpoint-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "create(Dictionary, byte[])",
    "url": "create-org.tinyradius.dictionary.Dictionary-byte:A-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "create(Dictionary, String)",
    "url": "create-org.tinyradius.dictionary.Dictionary-java.lang.String-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "Attributes",
    "l": "createAttribute(Dictionary, int, int, byte[])",
    "url": "createAttribute-org.tinyradius.dictionary.Dictionary-int-int-byte:A-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "Attributes",
    "l": "createAttribute(Dictionary, int, int, String)",
    "url": "createAttribute-org.tinyradius.dictionary.Dictionary-int-int-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "createHashedAuthenticator(String, byte[])",
    "url": "createHashedAuthenticator-java.lang.String-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPackets",
    "l": "createRadiusPacket(Dictionary, int, int, byte[], List<RadiusAttribute>)",
    "url": "createRadiusPacket-org.tinyradius.dictionary.Dictionary-int-int-byte:A-java.util.List-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "DeduplicatorHandler",
    "l": "DeduplicatorHandler(RequestHandler<T>, Timer, long)",
    "url": "DeduplicatorHandler-org.tinyradius.server.handler.RequestHandler-io.netty.util.Timer-long-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "DefaultDictionary",
    "l": "DefaultDictionary()"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser",
    "l": "DictionaryParser(DictionaryParser.ResourceResolver)",
    "url": "DictionaryParser-org.tinyradius.dictionary.DictionaryParser.ResourceResolver-"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "DISCONNECT_ACK"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "DISCONNECT_NAK"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "DISCONNECT_REQUEST"}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "encodeRequest(String)",
    "url": "encodeRequest-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "encodeRequest(String)",
    "url": "encodeRequest-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "encodeRequestAttributes(byte[], String)",
    "url": "encodeRequestAttributes-byte:A-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "encodeResponse(String, byte[])",
    "url": "encodeResponse-java.lang.String-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "encodeResponse(String, byte[])",
    "url": "encodeResponse-java.lang.String-byte:A-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "RadiusAttribute",
    "l": "equals(Object)",
    "url": "equals-java.lang.Object-"
}, {"p": "org.tinyradius.server", "c": "RadiusServer", "l": "eventLoopGroup"}, {
    "p": "org.tinyradius.attribute",
    "c": "Attributes",
    "l": "extractAttributes(Dictionary, int, byte[], int)",
    "url": "extractAttributes-org.tinyradius.dictionary.Dictionary-int-byte:A-int-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "fromByteBuf(ByteBuf)",
    "url": "fromByteBuf-io.netty.buffer.ByteBuf-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "fromDatagram(DatagramPacket)",
    "url": "fromDatagram-io.netty.channel.socket.DatagramPacket-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "fromDatagram(DatagramPacket, String)",
    "url": "fromDatagram-io.netty.channel.socket.DatagramPacket-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "fromDatagram(DatagramPacket, String, RadiusPacket)",
    "url": "fromDatagram-io.netty.channel.socket.DatagramPacket-java.lang.String-org.tinyradius.packet.RadiusPacket-"
}, {"p": "org.tinyradius.server", "c": "RadiusServer", "l": "getAcctChannel()"}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "getAcctStatusType()"
}, {"p": "org.tinyradius.util", "c": "RadiusEndpoint", "l": "getAddress()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getAttribute(int)"
}, {"p": "org.tinyradius.packet", "c": "RadiusPacket", "l": "getAttribute(int, int)"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getAttribute(String)",
    "url": "getAttribute-java.lang.String-"
}, {"p": "org.tinyradius.packet", "c": "RadiusPacket", "l": "getAttributeBytes()"}, {
    "p": "org.tinyradius.attribute",
    "c": "RadiusAttribute",
    "l": "getAttributeKey()"
}, {"p": "org.tinyradius.packet", "c": "RadiusPacket", "l": "getAttributeMap()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getAttributes()"
}, {"p": "org.tinyradius.packet", "c": "RadiusPacket", "l": "getAttributes(int)"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getAttributes(int, int)"
}, {
    "p": "org.tinyradius.attribute",
    "c": "RadiusAttribute",
    "l": "getAttributeType()"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "Dictionary",
    "l": "getAttributeTypeByCode(int)"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "getAttributeTypeByCode(int)"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "Dictionary",
    "l": "getAttributeTypeByCode(int, int)"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "getAttributeTypeByCode(int, int)"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "Dictionary",
    "l": "getAttributeTypeByName(String)",
    "url": "getAttributeTypeByName-java.lang.String-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "getAttributeTypeByName(String)",
    "url": "getAttributeTypeByName-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getAttributeValue(String)",
    "url": "getAttributeValue-java.lang.String-"
}, {"p": "org.tinyradius.server", "c": "RadiusServer", "l": "getAuthChannel()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getAuthenticator()"
}, {"p": "org.tinyradius.packet", "c": "AccessRequest", "l": "getAuthProtocol()"}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "getDataType()"
}, {"p": "org.tinyradius.attribute", "c": "RadiusAttribute", "l": "getDictionary()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getDictionary()"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "getEnumeration(int)"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "getEnumeration(String)",
    "url": "getEnumeration-java.lang.String-"
}, {"p": "org.tinyradius.packet", "c": "RadiusPacket", "l": "getIdentifier()"}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType",
    "l": "getName()"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "getPacketTypeName(int)"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "ProxyRequestHandler",
    "l": "getProxyServer(RadiusPacket, RadiusEndpoint)",
    "url": "getProxyServer-org.tinyradius.packet.RadiusPacket-org.tinyradius.util.RadiusEndpoint-"
}, {"p": "org.tinyradius.util", "c": "RadiusEndpoint", "l": "getSharedSecret()"}, {
    "p": "org.tinyradius.util",
    "c": "SecretProvider",
    "l": "getSharedSecret(InetSocketAddress)",
    "url": "getSharedSecret-java.net.InetSocketAddress-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "getSubAttribute(int)"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "getSubAttribute(String)",
    "url": "getSubAttribute-java.lang.String-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "getSubAttributes()"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "getSubAttributes(int)"
}, {"p": "org.tinyradius.attribute", "c": "RadiusAttribute", "l": "getType()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getType()"
}, {"p": "org.tinyradius.attribute", "c": "AttributeType", "l": "getTypeCode()"}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "getUserName()"
}, {"p": "org.tinyradius.packet", "c": "AccountingRequest", "l": "getUserName()"}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "getUserPassword()"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "AuthHandler",
    "l": "getUserPassword(String)",
    "url": "getUserPassword-java.lang.String-"
}, {"p": "org.tinyradius.attribute", "c": "RadiusAttribute", "l": "getValue()"}, {
    "p": "org.tinyradius.attribute",
    "c": "IntegerAttribute",
    "l": "getValueInt()"
}, {"p": "org.tinyradius.attribute", "c": "IpAttribute.V4", "l": "getValueInt()"}, {
    "p": "org.tinyradius.attribute",
    "c": "IntegerAttribute",
    "l": "getValueLong()"
}, {
    "p": "org.tinyradius.attribute",
    "c": "IntegerAttribute",
    "l": "getValueString()"
}, {"p": "org.tinyradius.attribute", "c": "IpAttribute", "l": "getValueString()"}, {
    "p": "org.tinyradius.attribute",
    "c": "Ipv6PrefixAttribute",
    "l": "getValueString()"
}, {"p": "org.tinyradius.attribute", "c": "RadiusAttribute", "l": "getValueString()"}, {
    "p": "org.tinyradius.attribute",
    "c": "StringAttribute",
    "l": "getValueString()"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "getVendorAttributes(int)"
}, {"p": "org.tinyradius.attribute", "c": "AttributeType", "l": "getVendorId()"}, {
    "p": "org.tinyradius.attribute",
    "c": "RadiusAttribute",
    "l": "getVendorId()"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "Dictionary",
    "l": "getVendorId(String)",
    "url": "getVendorId-java.lang.String-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "getVendorId(String)",
    "url": "getVendorId-java.lang.String-"
}, {"p": "org.tinyradius.dictionary", "c": "Dictionary", "l": "getVendorName(int)"}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "getVendorName(int)"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "AuthHandler",
    "l": "handlePacket(Channel, AccessRequest, InetSocketAddress, String)",
    "url": "handlePacket-io.netty.channel.Channel-org.tinyradius.packet.AccessRequest-java.net.InetSocketAddress-java.lang.String-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "AcctHandler",
    "l": "handlePacket(Channel, AccountingRequest, InetSocketAddress, String)",
    "url": "handlePacket-io.netty.channel.Channel-org.tinyradius.packet.AccountingRequest-java.net.InetSocketAddress-java.lang.String-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "ProxyRequestHandler",
    "l": "handlePacket(Channel, RadiusPacket, InetSocketAddress, String)",
    "url": "handlePacket-io.netty.channel.Channel-org.tinyradius.packet.RadiusPacket-java.net.InetSocketAddress-java.lang.String-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "DeduplicatorHandler",
    "l": "handlePacket(Channel, T, InetSocketAddress, String)",
    "url": "handlePacket-io.netty.channel.Channel-T-java.net.InetSocketAddress-java.lang.String-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "RequestHandler",
    "l": "handlePacket(Channel, T, InetSocketAddress, String)",
    "url": "handlePacket-io.netty.channel.Channel-T-java.net.InetSocketAddress-java.lang.String-"
}, {
    "p": "org.tinyradius.server",
    "c": "HandlerAdapter",
    "l": "HandlerAdapter(PacketEncoder, RequestHandler<T>, Timer, SecretProvider, Class<T>)",
    "url": "HandlerAdapter-org.tinyradius.packet.PacketEncoder-org.tinyradius.server.handler.RequestHandler-io.netty.util.Timer-org.tinyradius.util.SecretProvider-java.lang.Class-"
}, {
    "p": "org.tinyradius.server",
    "c": "HandlerAdapter",
    "l": "handleRequest(Channel, DatagramPacket)",
    "url": "handleRequest-io.netty.channel.Channel-io.netty.channel.socket.DatagramPacket-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "ClientHandler",
    "l": "handleResponse(DatagramPacket)",
    "url": "handleResponse-io.netty.channel.socket.DatagramPacket-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "ProxyStateClientHandler",
    "l": "handleResponse(DatagramPacket)",
    "url": "handleResponse-io.netty.channel.socket.DatagramPacket-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "SimpleClientHandler",
    "l": "handleResponse(DatagramPacket)",
    "url": "handleResponse-io.netty.channel.socket.DatagramPacket-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "ProxyRequestHandler",
    "l": "handleServerResponse(Dictionary, RadiusPacket)",
    "url": "handleServerResponse-org.tinyradius.dictionary.Dictionary-org.tinyradius.packet.RadiusPacket-"
}, {"p": "org.tinyradius.attribute", "c": "RadiusAttribute", "l": "hashCode()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "HEADER_LENGTH"
}, {"p": "org.tinyradius.dictionary", "c": "DefaultDictionary", "l": "INSTANCE"}, {
    "p": "org.tinyradius.attribute",
    "c": "IntegerAttribute",
    "l": "IntegerAttribute(Dictionary, int, int, int)",
    "url": "IntegerAttribute-org.tinyradius.dictionary.Dictionary-int-int-int-"
}, {
    "p": "org.tinyradius.server",
    "c": "RadiusServer",
    "l": "listen(DatagramChannel, InetSocketAddress)",
    "url": "listen-io.netty.channel.socket.DatagramChannel-java.net.InetSocketAddress-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "MemoryDictionary",
    "l": "MemoryDictionary()"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser",
    "l": "newClasspathParser()"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser",
    "l": "newFileParser()"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType.ByteArrayConstructor",
    "l": "newInstance(Dictionary, int, int, byte[])",
    "url": "newInstance-org.tinyradius.dictionary.Dictionary-int-int-byte:A-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "AttributeType.StringConstructor",
    "l": "newInstance(Dictionary, int, int, String)",
    "url": "newInstance-org.tinyradius.dictionary.Dictionary-int-int-java.lang.String-"
}, {"p": "org.tinyradius.packet", "c": "RadiusPackets", "l": "nextPacketId()"}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser.ResourceResolver",
    "l": "openStream(String)",
    "url": "openStream-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "PacketEncoder(Dictionary)",
    "url": "PacketEncoder-org.tinyradius.dictionary.Dictionary-"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "PacketType()"}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser",
    "l": "parseDictionary(String)",
    "url": "parseDictionary-java.lang.String-"
}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser",
    "l": "parseDictionary(WritableDictionary, String)",
    "url": "parseDictionary-org.tinyradius.dictionary.WritableDictionary-java.lang.String-"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "PASSWORD_ACCEPT"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "PASSWORD_REJECT"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "PASSWORD_REQUEST"}, {
    "p": "org.tinyradius.client.handler",
    "c": "ClientHandler",
    "l": "prepareDatagram(RadiusPacket, RadiusEndpoint, InetSocketAddress, Promise<RadiusPacket>)",
    "url": "prepareDatagram-org.tinyradius.packet.RadiusPacket-org.tinyradius.util.RadiusEndpoint-java.net.InetSocketAddress-io.netty.util.concurrent.Promise-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "ProxyStateClientHandler",
    "l": "prepareDatagram(RadiusPacket, RadiusEndpoint, InetSocketAddress, Promise<RadiusPacket>)",
    "url": "prepareDatagram-org.tinyradius.packet.RadiusPacket-org.tinyradius.util.RadiusEndpoint-java.net.InetSocketAddress-io.netty.util.concurrent.Promise-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "SimpleClientHandler",
    "l": "prepareDatagram(RadiusPacket, RadiusEndpoint, InetSocketAddress, Promise<RadiusPacket>)",
    "url": "prepareDatagram-org.tinyradius.packet.RadiusPacket-org.tinyradius.util.RadiusEndpoint-java.net.InetSocketAddress-io.netty.util.concurrent.Promise-"
}, {
    "p": "org.tinyradius.server.handler",
    "c": "ProxyRequestHandler",
    "l": "ProxyRequestHandler(RadiusClient)",
    "url": "ProxyRequestHandler-org.tinyradius.client.RadiusClient-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "ProxyStateClientHandler",
    "l": "ProxyStateClientHandler(PacketEncoder, SecretProvider)",
    "url": "ProxyStateClientHandler-org.tinyradius.packet.PacketEncoder-org.tinyradius.util.SecretProvider-"
}, {
    "p": "org.tinyradius.client",
    "c": "RadiusClient",
    "l": "RadiusClient(EventLoopGroup, ChannelFactory<? extends DatagramChannel>, ClientHandler, RetryStrategy, InetSocketAddress)",
    "url": "RadiusClient-io.netty.channel.EventLoopGroup-io.netty.channel.ChannelFactory-org.tinyradius.client.handler.ClientHandler-org.tinyradius.client.retry.RetryStrategy-java.net.InetSocketAddress-"
}, {
    "p": "org.tinyradius.util",
    "c": "RadiusEndpoint",
    "l": "RadiusEndpoint(InetSocketAddress, String)",
    "url": "RadiusEndpoint-java.net.InetSocketAddress-java.lang.String-"
}, {"p": "org.tinyradius.util", "c": "RadiusException", "l": "RadiusException()"}, {
    "p": "org.tinyradius.util",
    "c": "RadiusException",
    "l": "RadiusException(String)",
    "url": "RadiusException-java.lang.String-"
}, {
    "p": "org.tinyradius.util",
    "c": "RadiusException",
    "l": "RadiusException(String, Throwable)",
    "url": "RadiusException-java.lang.String-java.lang.Throwable-"
}, {
    "p": "org.tinyradius.util",
    "c": "RadiusException",
    "l": "RadiusException(Throwable)",
    "url": "RadiusException-java.lang.Throwable-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "RadiusPacket(Dictionary, int, int)",
    "url": "RadiusPacket-org.tinyradius.dictionary.Dictionary-int-int-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "RadiusPacket(Dictionary, int, int, byte[])",
    "url": "RadiusPacket-org.tinyradius.dictionary.Dictionary-int-int-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "RadiusPacket(Dictionary, int, int, byte[], List<RadiusAttribute>)",
    "url": "RadiusPacket-org.tinyradius.dictionary.Dictionary-int-int-byte:A-java.util.List-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "RadiusPacket(Dictionary, int, int, List<RadiusAttribute>)",
    "url": "RadiusPacket-org.tinyradius.dictionary.Dictionary-int-int-java.util.List-"
}, {"p": "org.tinyradius.packet", "c": "RadiusPackets", "l": "RadiusPackets()"}, {
    "p": "org.tinyradius.server",
    "c": "RadiusServer",
    "l": "RadiusServer(EventLoopGroup, ChannelFactory<? extends DatagramChannel>, HandlerAdapter, HandlerAdapter, InetSocketAddress, InetSocketAddress)",
    "url": "RadiusServer-io.netty.channel.EventLoopGroup-io.netty.channel.ChannelFactory-org.tinyradius.server.HandlerAdapter-org.tinyradius.server.HandlerAdapter-java.net.InetSocketAddress-java.net.InetSocketAddress-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "removeAttribute(RadiusAttribute)",
    "url": "removeAttribute-org.tinyradius.attribute.RadiusAttribute-"
}, {"p": "org.tinyradius.packet", "c": "RadiusPacket", "l": "removeAttributes(int)"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "removeAttributes(int, int)"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "removeLastAttribute(int)"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "removeSubAttribute(RadiusAttribute)",
    "url": "removeSubAttribute-org.tinyradius.attribute.RadiusAttribute-"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "RESERVED"}, {
    "p": "org.tinyradius.dictionary",
    "c": "DictionaryParser.ResourceResolver",
    "l": "resolve(String, String)",
    "url": "resolve-java.lang.String-java.lang.String-"
}, {
    "p": "org.tinyradius.client.retry",
    "c": "RetryStrategy",
    "l": "scheduleRetry(Runnable, int, Promise<RadiusPacket>)",
    "url": "scheduleRetry-java.lang.Runnable-int-io.netty.util.concurrent.Promise-"
}, {
    "p": "org.tinyradius.client.retry",
    "c": "SimpleRetryStrategy",
    "l": "scheduleRetry(Runnable, int, Promise<RadiusPacket>)",
    "url": "scheduleRetry-java.lang.Runnable-int-io.netty.util.concurrent.Promise-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "setAcctStatusType(int)"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "setAuthProtocol(String)",
    "url": "setAuthProtocol-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "setUserName(String)",
    "url": "setUserName-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccountingRequest",
    "l": "setUserName(String)",
    "url": "setUserName-java.lang.String-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "setUserPassword(String)",
    "url": "setUserPassword-java.lang.String-"
}, {
    "p": "org.tinyradius.client.handler",
    "c": "SimpleClientHandler",
    "l": "SimpleClientHandler(PacketEncoder)",
    "url": "SimpleClientHandler-org.tinyradius.packet.PacketEncoder-"
}, {
    "p": "org.tinyradius.client.retry",
    "c": "SimpleRetryStrategy",
    "l": "SimpleRetryStrategy(Timer, int, int)",
    "url": "SimpleRetryStrategy-io.netty.util.Timer-int-int-"
}, {"p": "org.tinyradius.client", "c": "RadiusClient", "l": "start()"}, {
    "p": "org.tinyradius.server",
    "c": "RadiusServer",
    "l": "start()"
}, {"p": "org.tinyradius.util", "c": "Lifecycle", "l": "start()"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "STATUS_ACCEPT"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "STATUS_CLIENT"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "STATUS_REJECT"
}, {"p": "org.tinyradius.packet", "c": "PacketType", "l": "STATUS_REQUEST"}, {
    "p": "org.tinyradius.packet",
    "c": "PacketType",
    "l": "STATUS_SERVER"
}, {"p": "org.tinyradius.client", "c": "RadiusClient", "l": "stop()"}, {
    "p": "org.tinyradius.server",
    "c": "RadiusServer",
    "l": "stop()"
}, {"p": "org.tinyradius.util", "c": "Lifecycle", "l": "stop()"}, {
    "p": "org.tinyradius.attribute",
    "c": "RadiusAttribute",
    "l": "toAttributeMap()"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "toAttributeMap()"
}, {"p": "org.tinyradius.attribute", "c": "RadiusAttribute", "l": "toByteArray()"}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "toByteArray()"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "toByteBuf(RadiusPacket)",
    "url": "toByteBuf-org.tinyradius.packet.RadiusPacket-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "toDatagram(RadiusPacket, InetSocketAddress)",
    "url": "toDatagram-org.tinyradius.packet.RadiusPacket-java.net.InetSocketAddress-"
}, {
    "p": "org.tinyradius.packet",
    "c": "PacketEncoder",
    "l": "toDatagram(RadiusPacket, InetSocketAddress, InetSocketAddress)",
    "url": "toDatagram-org.tinyradius.packet.RadiusPacket-java.net.InetSocketAddress-java.net.InetSocketAddress-"
}, {"p": "org.tinyradius.attribute", "c": "AttributeType", "l": "toString()"}, {
    "p": "org.tinyradius.attribute",
    "c": "RadiusAttribute",
    "l": "toString()"
}, {"p": "org.tinyradius.attribute", "c": "VendorSpecificAttribute", "l": "toString()"}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "toString()"
}, {
    "p": "org.tinyradius.attribute",
    "c": "IpAttribute.V4",
    "l": "V4(Dictionary, int, int, String)",
    "url": "V4-org.tinyradius.dictionary.Dictionary-int-int-java.lang.String-"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "VENDOR_SPECIFIC"
}, {
    "p": "org.tinyradius.attribute",
    "c": "VendorSpecificAttribute",
    "l": "VendorSpecificAttribute(Dictionary, int)",
    "url": "VendorSpecificAttribute-org.tinyradius.dictionary.Dictionary-int-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "verify(String, byte[])",
    "url": "verify-java.lang.String-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "RadiusPacket",
    "l": "verify(String, byte[])",
    "url": "verify-java.lang.String-byte:A-"
}, {
    "p": "org.tinyradius.packet",
    "c": "AccessRequest",
    "l": "verifyPassword(String)",
    "url": "verifyPassword-java.lang.String-"
}]