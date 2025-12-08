import {
  insertAssessment,
  findHistoryByUser,
  findAssessmentById,
} from "./assessment.model.js";

export async function saveAssessment(req, res) {
  try {
    const userId = req.user.id;
    const { answers, results, date } = req.body;

    await insertAssessment(userId, answers, results, date);

    res.json({ message: "Saved" });
  } catch (e) {
    res.status(500).json({ error: "Failed to save data" });
  }
}

export async function getHistory(req, res) {
  const userId = req.user.id;
  const history = await findHistoryByUser(userId);
  res.json(history);
}

export async function getDetail(req, res) {
  const userId = req.user.id;
  const id = req.params.id;

  const data = await findAssessmentById(id, userId);
  res.json(data);
}
