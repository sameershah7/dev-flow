import { createClient } from "redis";
import { env } from "../config/env.js";
import { logger } from "./logger.js";

export const redis = createClient({
    url: env.REDIS_URL
})

redis.on("connect", () => {
    logger.info("Redis connected")
})

redis.on("error", (error) => {
    logger.error({ error }, "Resdis connection error")
})
