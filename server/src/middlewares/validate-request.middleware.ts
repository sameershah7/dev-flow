import type { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";

export const validateRequest =
    (schema: ZodObject) =>
        (req: Request, res: Response, next: NextFunction): void => {
            try {
                req.body = schema.parse(req.body);

                next();
            } catch (error) {
                if (error instanceof ZodError) {
                    res.status(400).json({
                        success: false,
                        message: "Validation failed",
                        error: error.flatten()
                    })
                    return;
                }

                next(error);
            }
        };
