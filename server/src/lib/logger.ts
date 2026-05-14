import pino from "pino"
import { env } from "../config/env.js"

const isProd = env.NODE_ENV === "production"

export const logger = pino({
    level: isProd ? "info" : "debug",

    ...(!isProd && {
        target: "pino-pretty",
        options: {
            colorize: true,
            translateTime: "SYS:standard",
        },
    }),
});
