package org.tinyradius.proxy;

import io.netty.util.Timer;
import io.netty.util.concurrent.Future;
import org.tinyradius.packet.RadiusPacket;
import org.tinyradius.server.DeduplicatorHandler;
import org.tinyradius.util.Lifecycle;

/**
 * Deduplicator derived from {@link DeduplicatorHandler} that allows any RadiusPacket type and implements Lifecycle.
 */
public class ProxyDeduplicatorHandler extends DeduplicatorHandler<RadiusPacket> implements Lifecycle {

    private final Lifecycle requestHandler;

    /**
     * @param requestHandler underlying handler to process packet if not duplicate
     * @param timer          used to set timeouts that clean up packets after predefined TTL
     * @param ttlMs          time in ms to keep packets in cache and ignore duplicates
     */
    public ProxyDeduplicatorHandler(ProxyRequestHandler requestHandler, Timer timer, long ttlMs) {
        super(requestHandler, timer, ttlMs);
        this.requestHandler = requestHandler;
    }

    @Override
    public Future<Void> start() {
        return requestHandler.start();
    }

    @Override
    public void stop() {
        requestHandler.stop();
    }
}
