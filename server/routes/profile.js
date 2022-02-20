import express from "express";
import { getProfile, updateProfileAbout } from "../controllers/profile.js";

const router = express.Router();

router.get("/", getProfile);
router.patch("/edit/about", updateProfileAbout);

export default router;
