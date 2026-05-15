import type { Request, response, Response } from "express"
import { AppError } from "../errors/app.error.js"
import { redis } from "../lib/redis.js"

export const healthCheck = (_req: Request, res: Response) => {
    res.json({
        status: "Ok",
        message: "dev-flow app api"
    })
}

export const testError = () => {
    throw new AppError(
        "Test operational error",
        400
    );
};


export const testRedis = async (_req: Request, res: Response) => {
    await redis.set("health", "Redis-working");

    const value = await redis.get("health")

    res.json({ redis: value })

}

