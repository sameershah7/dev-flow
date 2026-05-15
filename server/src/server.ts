import express from "express";

import { env } from "./config/env.js";
import { logger } from "./lib/logger.js";
import { redis } from "./lib/redis.js";

import { requestLogger } from "./middlewares/logger.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

import healthRoutes from "./routes/health.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json())
app.use(requestLogger)

app.use("/api/v1", healthRoutes)
app.use("/api/v1", userRoutes)

app.use(errorMiddleware)

const startServer = async () => {
    try {
        await redis.connect();

        app.listen(env.PORT, () => {
            logger.info({
                port: env.PORT,
                env: env.NODE_ENV
            },
                "Server Started"
            );
        });
    } catch (error) {
        logger.error(
            { error },
            "Failed to start server"
        )
        process.exit(1)
    };
};

startServer();
