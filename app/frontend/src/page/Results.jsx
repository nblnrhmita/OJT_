import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Kategori yang sama dengan Mindscheck
const categoryLabels = [
  "Kesejahteraan Emosional",
  "Tingkat Kecemasan",
  "Indikator Depresi",
  "Manajemen Stres",
  "Koneksi Sosial",
  "Harga Diri",
  "Kepuasan Hidup",
];

// Dummy fungsi analisis
function calculateScores(questions, answers) {
  // Hanya contoh, hitung persentase jawaban "Setuju"/"Sangat Setuju"
  const scores = categoryLabels.map((label) => {
    const total = questions.length / categoryLabels.length;
    let count = 0;
    for (let i = 0; i < total; i++) {
      const ans = answers[i] || "";
      if (ans === "Setuju" || ans === "Sangat Setuju") count++;
    }
    return {
      label,
      percentage: Math.round((count / total) * 100),
      description: `Analisa untuk ${label}`,
      level:
        count / total > 0.66
          ? "high"
          : count / total < 0.33
          ? "low"
          : "moderate",
    };
  });

  const overallPercentage =
    Math.round(
      scores.reduce((acc, cur) => acc + cur.percentage, 0) / scores.length
    ) || 0;

  return {
    categoryScores: scores,
    overallPercentage,
    executiveSummary: "Ringkasan singkat hasil asesmen.",
    recommendations: [
      "Tetap jaga kesehatan mental",
      "Lakukan relaksasi secara rutin",
    ],
    references: ["Smith et al., 2020", "WHO, 2021"],
  };
}

export default function Results() {
  const navigate = useNavigate();
  const resultsRef = useRef(null);

  const answers = useMemo(() => {
    const stored = sessionStorage.getItem("assessmentAnswers");
    return stored ? JSON.parse(stored) : null;
  }, []);

  const analysis = useMemo(() => {
    if (!answers) return null;
    return calculateScores([], answers);
  }, [answers]);

  useEffect(() => {
    if (!answers) {
      navigate("/assesment");
    }
  }, [answers, navigate]);

  const getScoreColor = (percentage) => {
    if (percentage >= 66) return "#34D399"; // hijau
    if (percentage >= 33) return "#FBBF24"; // kuning
    return "#F87171"; // merah
  };

  const getScoreLabel = (percentage) => {
    if (percentage >= 66) return "Tinggi";
    if (percentage >= 33) return "Sedang";
    return "Rendah";
  };

  if (!analysis) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div ref={resultsRef} className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Hasil Asesmen</h1>

        <div className="rounded-xl border p-6 mb-6">
          <h2 className="font-semibold mb-3">
            Skor Total: {analysis.overallPercentage}%
          </h2>
          <p>{analysis.executiveSummary}</p>
        </div>

        <div className="space-y-4 mb-6">
          {analysis.categoryScores.map((cat) => (
            <div key={cat.label} className="border rounded p-4">
              <div className="flex justify-between mb-2">
                <span>{cat.label}</span>
                <span style={{ color: getScoreColor(cat.percentage) }}>
                  {cat.percentage}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${cat.percentage}%`,
                    backgroundColor: getScoreColor(cat.percentage),
                  }}
                />
              </div>
              <p className="text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border p-6 mb-6">
          <h2 className="font-semibold mb-2">Rekomendasi</h2>
          <ul className="list-disc ml-6">
            {analysis.recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border p-6 mb-6">
          <h2 className="font-semibold mb-2">Referensi</h2>
          <ul className="list-disc ml-6">
            {analysis.references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 bg-primary text-white rounded"
            onClick={() => navigate("/assesment")}
          >
            Kembali
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
