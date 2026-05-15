import type { Request, Response, NextFunction } from "express";

import { UserRepository } from "../repositories/user.repository.js";

export const createUser = async (_req: Request, res: Response) => {
    const user = await UserRepository.create({
        email: "test@test.com",
        username: "shah"
    })

    res.status(201).json({
        success: true,
        data: user,
    })
};

export const getUser = async (_req: Request, res: Response) => {
    const user = await UserRepository.findByEmail(
        "test@test.com"
    )
    res.status(200).json({
        success: true,
        data: user,
    })
};
