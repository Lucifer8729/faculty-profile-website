import express from "express";
import {
  addNewPatent,
  deletePatent,
  getPatents,
} from "../controllers/patent.js";

const router = express.Router();

router.get("/", getPatents);
router.post("/add", addNewPatent);
router.post("/delete", deletePatent);

export default router;
