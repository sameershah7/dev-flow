import { Router } from "express";
import { healthCheck, testError } from "../controllers/health.controller.js";
import { asyncHandler } from "../utils/async-handler.js";

const router = Router();

router.get("/health", healthCheck);
router.get("/error", asyncHandler(testError));

export default router;
