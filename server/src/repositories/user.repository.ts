import { prisma } from "../lib/prisma.js";

export class UserRepository {
    static async create(data: { email: string, username: string, }) {
        return prisma.user.create({ data, })
    }

    static async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email }
        })
    }

}
