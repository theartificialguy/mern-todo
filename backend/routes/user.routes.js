import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.use(protect).get("/profile", getUserProfile);
router.use(protect).put("/profile", updateUserProfile);

export default router;
