import db from "../../config/db.js";

export function insertAssessment(userId, answers, results, date) {
  return db.query(
    "INSERT INTO assessment_history (user_id, answers, results, created_at) VALUES (?, ?, ?, ?)",
    [userId, JSON.stringify(answers), JSON.stringify(results), date]
  );
}

export function findHistoryByUser(userId) {
  return db
    .query(
      "SELECT id, results, created_at FROM assessment_history WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    )
    .then(([rows]) => rows);
}

export function findAssessmentById(id, userId) {
  return db
    .query("SELECT * FROM assessment_history WHERE id = ? AND user_id = ?", [
      id,
      userId,
    ])
    .then(([rows]) => rows[0]);
}
