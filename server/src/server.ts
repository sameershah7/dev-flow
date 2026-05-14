import express from "express"
import { env } from "./config/env.js";
import healthRoutes from "./routes/health.routes.js"

const app = express();

app.use(express.json())

app.use("/api/v1", healthRoutes)

app.listen(env.PORT, () => {
    console.log(`Sever running on port: ${env.PORT}`)
})
