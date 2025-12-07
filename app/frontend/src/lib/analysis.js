// src/lib/analysis.js

export function calculateScores(questions, answers) {
  // misal menghitung persentase skor tiap pertanyaan
  const scores = questions.map((q, i) => {
    const ans = answers[i];
    if (!ans) return 0;
    switch (ans) {
      case "Sangat Tidak Setuju":
        return 0;
      case "Tidak Setuju":
        return 1;
      case "Netral":
        return 2;
      case "Setuju":
        return 3;
      case "Sangat Setuju":
        return 4;
      default:
        return 0;
    }
  });

  return scores;
}

export function generateAnalysis(scores) {
  const total = scores.reduce((a, b) => a + b, 0);
  const overallPercentage = Math.round((total / (scores.length * 4)) * 100);

  const categoryScores = [
    {
      category: "Emosional",
      percentage: 80,
      level: "moderate",
      label: "Kesejahteraan Emosional",
      description: "Contoh deskripsi.",
    },
    {
      category: "Stres",
      percentage: 60,
      level: "moderate",
      label: "Manajemen Stres",
      description: "Contoh deskripsi.",
    },
    // buat dummy untuk semua kategori sesuai kebutuhan
  ];

  const executiveSummary = "Ringkasan hasil asesmen Anda.";
  const recommendations = [
    "Tetap rileks",
    "Lakukan meditasi",
    "Berolahraga rutin",
  ];
  const references = ["Referensi 1", "Referensi 2"];

  return {
    overallPercentage,
    categoryScores,
    executiveSummary,
    recommendations,
    references,
  };
}
