import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import db from "../db.js";

const router = express.Router();

router.post("/save", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id; // dari JWT
    const { answers, results, date } = req.body;

    await db.query(
      "INSERT INTO assessment_history (user_id, answers, results, created_at) VALUES (?, ?, ?, ?)",
      [userId, JSON.stringify(answers), JSON.stringify(results), date]
    );

    res.json({ message: "Assessment saved" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save assessment" });
  }
});

export default router;
