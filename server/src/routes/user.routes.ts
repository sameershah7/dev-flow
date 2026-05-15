import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";

import {
    createUser,
    getUser
} from "../controllers/user.controller.js";

const router = Router();

router.post("/users", asyncHandler(createUser))
router.get("/users", asyncHandler(getUser))

export default router;
