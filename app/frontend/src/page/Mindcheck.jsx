import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

import {
  Brain,
  Shield,
  Clock,
  BarChart3,
  FileText,
  Heart,
  AlertTriangle,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export default function Mindscheck() {
  const [selected, setSelected] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  // Cek token dari localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setChecked(true);
  }, []);

  // Data Aspek
  const aspekList = [
    "Kesejahteraan Emosional",
    "Tingkat Kecemasan",
    "Indikator Depresi",
    "Manajemen Stres",
    "Koneksi Sosial",
    "Harga Diri",
    "Kepuasan Hidup",
  ];

  const detailData = {
    "Kesejahteraan Emosional": {
      desc: "Kemampuan mengenali, memahami, dan mengelola emosi dengan sehat.",
      why: "Kesejahteraan emosional adalah fondasi kesehatan mental...",
      indikator: [
        "Kemampuan mengenali berbagai emosi yang dirasakan",
        "Cara mengekspresikan emosi secara sehat",
        "Kemampuan regulasi emosi menghadapi situasi sulit",
        "Tingkat penerimaan terhadap emosi negatif",
      ],
    },
  };

  // Feature Cards
  const features = [
    {
      icon: Brain,
      title: "50 Pertanyaan Komprehensif",
      description:
        "Asesmen berbasis skala Likert mencakup 7 aspek kesehatan mental.",
    },
    {
      icon: Clock,
      title: "Waktu 10-15 Menit",
      description: "Proses yang terstruktur dan mudah diikuti.",
    },
    {
      icon: BarChart3,
      title: "Visualisasi Spider Chart",
      description: "Hasil ditampilkan dalam grafik yang mudah dipahami.",
    },
    {
      icon: FileText,
      title: "Laporan Lengkap",
      description: "Unduh hasil analisa dalam format PDF.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ======================= NAVBAR ======================= */}
      <Navbar />

      {/* ======================= HERO ======================= */}
      <div className="text-center pt-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Kenali Kondisi <span className="text-primary">Kesehatan Mental</span>{" "}
          Anda
        </h1>
        <p className="mt-4 text-gray-600">
          Lakukan analisis mandiri melalui asesmen komprehensif untuk memahami
          berbagai aspek kesejahteraan mental.
        </p>
      </div>

      {/* ======================= FEATURE CARDS ======================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-5 border shadow-sm hover:shadow-md transition"
          >
            <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-gray-800 text-center">
              {feature.title}
            </h3>
            <p className="text-xs text-gray-600 text-center mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* ======================= ASPEK SECTION ======================= */}
      <div className="w-full flex justify-center mt-20 px-4">
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-4xl w-full text-center">
          <h2 className="text-2xl font-bold text-primary">
            7 Aspek yang Dianalisis
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Klik setiap aspek untuk melihat penjelasan lengkap
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {aspekList.map((item) => (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className="px-5 py-2 bg-emerald-50 text-primary rounded-full text-sm hover:bg-emerald-100 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= DISCLAIMER ======================= */}
      <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8 mt-20 shadow-sm px-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <span className="text-amber-500 text-2xl">⚠️</span>
          Penting untuk Diketahui
        </h3>

        <ul className="text-gray-700 text-sm space-y-2 ml-6 list-disc">
          <li>
            Asesmen ini bersifat <span className="font-semibold">edukatif</span>{" "}
            dan <span className="font-semibold">bukan diagnosis medis</span>.
          </li>
          <li>
            Hasil tidak dapat menggantikan konsultasi profesional kesehatan
            mental.
          </li>
          <li>
            Jika Anda mengalami kondisi darurat, segera hubungi layanan
            kesehatan profesional.
          </li>
          <li>
            Jawaban Anda hanya diproses di perangkat dan tidak disimpan di
            server.
          </li>
        </ul>
      </div>

      {/* ======================= START BUTTON ======================= */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10 mt-10 text-center px-4">
        <h2 className="text-2xl font-bold text-primary mb-2">Siap Memulai?</h2>
        <p className="text-gray-600 mb-6">
          Pastikan Anda berada di tempat yang nyaman dan memiliki waktu sekitar
          10–15 menit untuk menyelesaikan asesmen ini.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 flex items-start gap-3 text-left">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="h-5 w-5 text-emerald-600 focus:ring-emerald-500"
          />
          <p className="text-gray-700 text-sm">
            Saya memahami bahwa asesmen ini bersifat edukatif, bukan diagnosis
            medis.
          </p>
        </div>

        <button
          onClick={() => {
            const token = localStorage.getItem("token");
            if (token) {
              checked && navigate("/Assesment");
            } else {
              toast.error("Harap login terlebih dahulu!");
            }
          }}
          className={`mt-8 px-8 py-3 rounded-xl text-white font-semibold shadow-md transition ${
            checked
              ? "bg-primary hover:bg-teal-500"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Mulai Asesmen
        </button>

        {localStorage.getItem("token") && (
          <a
            href="/history"
            className="block mt-10 text-center text-emerald-600 hover:text-emerald-700"
          >
            Lihat Riwayat Asesmen
          </a>
        )}
      </div>

      {/* ======================= FOOTER ======================= */}
      <Footer />

      {/* ======================= POPUP ASPEK ======================= */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute right-5 top-5 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              {selected}
            </h3>
            <p className="text-gray-600 mb-4">{detailData[selected]?.desc}</p>

            <div className="bg-emerald-50 p-4 rounded-xl mb-4 text-left">
              <h4 className="font-semibold text-emerald-700 mb-1">
                Mengapa Aspek Ini Penting?
              </h4>
              <p className="text-gray-600 text-sm">
                {detailData[selected]?.why}
              </p>
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">Indikator:</h4>
            <ul className="list-disc ml-6 text-gray-600 text-sm space-y-1">
              {detailData[selected]?.indikator.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
