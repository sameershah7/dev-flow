import bcrypt from "bcrypt";

import { ConflictError } from "../errors/conflict-error.js";
import { UserRepository } from "../repositories/user.repository.js";
import type { CreateUserDTO } from "../validators/user/create-user.validator.js";

const userRepository = new UserRepository();

export class UserService {
    async createUser(payload: CreateUserDTO) {
        const existingEmail = await userRepository.findByEmail(payload.email);

        if (existingEmail) {
            throw new ConflictError(
                "Email already exists"
            );
        }

        const existingUsername = await userRepository.findByUsername(
            payload.username
        );

        if (existingUsername) {
            throw new ConflictError(
                "Username already exists"
            );
        }

        const passwordHash = await bcrypt.hash(
            payload.password,
            12
        );

        const user = await userRepository.create({
            username: payload.username,
            email: payload.email,
            passwordHash,
        });

        return user;
    }

    async getUserByEmail(email: string) {
        return userRepository.findByEmail(
            email
        );
    }
}

export const userService = new UserService();
