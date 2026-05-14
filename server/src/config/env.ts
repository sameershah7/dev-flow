import dotdev from "dotenv";
import { z } from "zod";

dotdev.config();

const envSchema = z.object({
    NODE_ENV: z.enum([
        "development",
        "production",
        "test",
    ]),

    PORT: z.coerce.number().default(5000)
})

const parsedEnv = envSchema.safeParse(
    process.env
)

if (!parsedEnv.success) {
    console.error(
        "Invalid environment variables:"
    )
    console.error(
        parsedEnv.error.flatten().fieldErrors,
    )
    process.exit(1)
}

export const env = parsedEnv.data;
