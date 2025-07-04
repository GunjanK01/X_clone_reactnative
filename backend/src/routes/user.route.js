import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { followUser, getUserProfile, syncUser, updateProfile, getCurrentUser } from "../controllers/user.controller.js";

const router = express.Router();

//public routes
router.get("/profile/:username", getUserProfile);

//protected routes which need authentication
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.put("/follow/:targetUserId", protectRoute, followUser);  

export default router;