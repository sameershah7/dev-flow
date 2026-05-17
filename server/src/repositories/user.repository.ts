import { prisma } from "../lib/prisma.js";

export class UserRepository {
    async create(data: {
        username: string;
        email: string;
        passwordHash: string;
    }) {
        return prisma.user.create({
            data,

            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                isEmailVerified: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email },
        });
    }

    async findByUsername(username: string) {
        return prisma.user.findUnique({
            where: { username },
        });
    }
}
