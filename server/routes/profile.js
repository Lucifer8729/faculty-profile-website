import express from "express";
import {
  addEducation,
  addNewSkill,
  deleteEducation,
  deleteSkill,
  getProfile,
  updateProfileAbout,
} from "../controllers/profile.js";

const router = express.Router();

router.get("/", getProfile);
router.patch("/edit/about", updateProfileAbout);
router.post("/add/education", addEducation);
router.patch("/delete/education", deleteEducation);
router.post("/add/skill", addNewSkill);
router.patch("/delete/skill", deleteSkill);

export default router;
