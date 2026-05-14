import type { Request, Response, NextFunction } from "express"
import { logger } from "../lib/logger.js"
import { AppError } from "../errors/app.error.js"
import { env } from "../config/env.js"

export const errorMiddleware = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    logger.error({ err, statusCode }, err.message)

    res.status(statusCode).json({
        success: false,
        message,

        ...(env.NODE_ENV === "development" && {
            stack: err.stack,
        }),
    });

}

