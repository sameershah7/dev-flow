import express from "express"
import { env } from "./config/env.js";
import { logger } from "./lib/logger.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(express.json())
app.use(requestLogger)

app.use("/api/v1", healthRoutes)

app.use(errorMiddleware)

app.listen(env.PORT, () => {
    logger.info({
        port: env.PORT,
        env: env.NODE_ENV
    },
        "Server Started"
    );
});
