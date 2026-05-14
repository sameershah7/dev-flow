import type { Request, response, Response } from "express"
import { AppError } from "../errors/app.error.js"

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
