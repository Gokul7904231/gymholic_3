import express from "express";
import {
  registerTrainer,
  loginTrainer,
  loginAdmin,
  getMe,
} from "../controllers/customerAuth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/trainer/register", registerTrainer);
router.post("/trainer/login", loginTrainer);
router.post("/admin/login", loginAdmin);
router.get("/trainer/me", protect(["trainer"]), getMe);

export default router;
