import express from "express";
import {
  saveAssessment,
  getHistory,
  getDetail,
} from "./assessment.controller.js";
import { verifyToken } from "../../middlewares/auth.js";

const router = express.Router();

router.post("/save", verifyToken, saveAssessment);
router.get("/history", verifyToken, getHistory);
router.get("/detail/:id", verifyToken, getDetail);

export default router;
