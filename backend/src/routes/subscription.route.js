import express from "express";
import auth from "../middleware/auth.middleware.js";
import { currentSubscription } from "../controllers/subscription.controller.js";

const router = express.Router();

router.get("/current", auth, currentSubscription);

export default router;
