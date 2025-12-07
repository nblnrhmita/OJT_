import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Assesment() {
  const QUESTIONS_PER_PAGE = 10;
  const TOTAL_PAGES = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_PAGE
  );

  const options = [
    "Sangat Tidak Setuju",
    "Tidak Setuju",
    "Netral",
    "Setuju",
    "Sangat Setuju",
  ];

  const handleAnswer = (qIndex, value) => {
    setAnswers({
      ...answers,
      [startIndex + qIndex]: value,
    });
  };

  const allAnswered = currentQuestions.every(
    (_, i) => answers[startIndex + i] !== undefined
  );

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    } else {
      // Simpan jawaban ke sessionStorage lalu ke Results
      sessionStorage.setItem("assessmentAnswers", JSON.stringify(answers));
      navigate("/results");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <div className="border-b py-4 px-6 flex justify-between max-w-3xl mx-auto w-full">
        <div className="text-sm text-gray-700">
          Halaman {currentPage} dari {TOTAL_PAGES}
        </div>
        <div className="text-sm text-gray-600">
          {Object.keys(answers).length} / {questions.length} pertanyaan dijawab
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto w-full px-6 mt-3">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${(currentPage / TOTAL_PAGES) * 100}%` }}
          />
        </div>
      </div>

      {/* Pertanyaan */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 space-y-6">
        {currentQuestions.map((question, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-teal-100 text-primary w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold">
                {startIndex + index + 1}
              </div>
              <p className="font-medium text-gray-800 leading-snug">
                {question}
              </p>
            </div>

            {/* Pilihan Jawaban */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(index, opt)}
                  className={`border rounded-lg py-2.5 px-2 text-sm transition text-center ${
                    answers[startIndex + index] === opt
                      ? "bg-primary text-white border-teal-500"
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

      {/* Navigasi */}
      <div className="max-w-3xl mx-auto w-full flex justify-between py-6 px-6">
        {currentPage > 1 ? (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo(0, 0);
            }}
            className="px-6 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
          >
            ← Sebelumnya
          </button>
        ) : (
          <div />
        )}

        <button
          disabled={!allAnswered}
          onClick={handleNext}
          className={`px-6 py-2 rounded-lg text-white flex items-center gap-2 transition ${
            allAnswered
              ? "bg-primary hover:bg-teal-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {currentPage < TOTAL_PAGES ? "Lanjutkan →" : "Selesaikan →"}
        </button>
      </div>

      <Footer />
    </div>
  );
}
