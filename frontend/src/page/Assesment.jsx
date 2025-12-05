import { useState } from "react";
import { questions } from "../data/questions";
import Footer from "../components/Footer";

export default function Assesment() {
  const QUESTIONS_PER_PAGE = 10;
  const TOTAL_PAGES = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({}); // Simpan jawaban user

  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const options = ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"];

  const handleAnswer = (qIndex, value) => {
    setAnswers({
      ...answers,
      [startIndex + qIndex]: value,
    });
  };

  const allAnswered = currentQuestions.every((_, i) => answers[startIndex + i] !== undefined);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* ======= HEADER ======= */}
      <div className="border-b py-4 px-6 flex justify-between">
        <div className="text-sm text-gray-700">
          Halaman {currentPage} dari {TOTAL_PAGES}
        </div>

        <div className="text-sm text-gray-600">
          {Object.keys(answers).length} / 50 pertanyaan dijawab
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="px-6 mt-2">
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-teal-400 rounded transition-all"
            style={{
              width: `${(currentPage / TOTAL_PAGES) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* ======= DAFTAR PERTANYAAN ======= */}
      <div className="px-6 py-6 space-y-6">
        {currentQuestions.map((question, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-teal-100 text-teal-700 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold">
                {startIndex + index + 1}
              </div>
              <p className="font-medium text-gray-800">{question}</p>
            </div>

            {/* Jawaban */}
            <div className="grid grid-cols-5 gap-3 mt-4">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(index, opt)}
                  className={`border rounded-lg py-3 text-sm transition ${
                    answers[startIndex + index] === opt
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ======= NAVIGASI ======= */}
      <div className="px-6 flex justify-between py-6">
        {/* Tombol Sebelumnya */}
        {currentPage > 1 ? (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-6 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
          >
            ← Sebelumnya
          </button>
        ) : (
          <div></div>
        )}

        {/* Tombol Lanjutkan */}
        <button
          disabled={!allAnswered}
          onClick={() => {
            if (currentPage < TOTAL_PAGES) setCurrentPage(currentPage + 1);
          }}
          className={`px-6 py-2 rounded-lg text-white flex items-center gap-2 ${
            allAnswered
              ? "bg-teal-500 hover:bg-teal-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Lanjutkan →
        </button>
      </div>
    </div>
  );
}
