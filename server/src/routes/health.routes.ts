import { Router } from "express";
import { healthCheck, testError, testRedis } from "../controllers/health.controller.js";
import { asyncHandler } from "../utils/async-handler.js";

const router = Router();

router.get("/health", healthCheck);
router.get("/error", asyncHandler(testError));
router.get("/redis", asyncHandler(testRedis))

export default router;
