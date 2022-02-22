import express from "express";
import {
  addNewPatent,
  deletePatent,
  filterPatent,
  getPatents,
} from "../controllers/patent.js";

const router = express.Router();

router.get("/", getPatents);
router.post("/add", addNewPatent);
router.post("/delete", deletePatent);
router.post("/filter", filterPatent);

export default router;
