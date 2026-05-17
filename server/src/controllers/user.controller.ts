import type { Request, Response } from "express";
import { userService } from "../services/user.service.js";

export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body)

    res.status(201).json({
        success: true,
        data: user,
    });
};

export const getUser = async (req: Request, res: Response) => {
    const user = await userService.getUserByEmail(req.body.email);

    res.status(200).json({
        success: true,
        data: user,
    });
};
