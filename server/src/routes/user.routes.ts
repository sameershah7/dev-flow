import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import { validateRequest } from "../middlewares/validate-request.middleware.js";
import { createUserSchema } from "../validators/user/create-user.validator.js";

import {
    createUser,
    getUser
} from "../controllers/user.controller.js";

const router = Router();

router.post("/users",
    validateRequest(createUserSchema),
    asyncHandler(createUser)
);

router.get("/users",
    asyncHandler(getUser)
);


export default router;
