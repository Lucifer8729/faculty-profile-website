import express from "express";
import {
  addNewPublication,
  deletePublication,
  getPublications,
} from "../controllers/publication.js";

const router = express.Router();

router.get("/", getPublications);
router.post("/add", addNewPublication);
router.post("/delete", deletePublication);

export default router;
