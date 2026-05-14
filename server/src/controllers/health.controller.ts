import type { Request, Response } from "express"

export const healthCheck = (_req: Request, res: Response) => {
    res.json({
        status: "Ok",
        message: "dev-flow app api"
    })
}
