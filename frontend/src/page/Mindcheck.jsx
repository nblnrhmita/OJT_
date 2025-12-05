import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function Mindscheck() {
  // Popup State
  const [selected, setSelected] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
            <Heart className="text-white w-5 h-5" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">MindCheck</h1>
        </div>

        {/* Nav Menu */}
        <div className="flex items-center gap-8 text-gray-500 text-[15px]">
          <a href="/tentang" className="hover:text-gray-700 transition">Tentang</a>
          <a href="/proses" className="hover:text-gray-700 transition">Proses</a>
        </div>
      </div>

      <div className="text-center pt-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Kenali Kondisi <span className="text-emerald-600">Kesehatan Mental</span> Anda
        </h1>
        <p className="mt-4 text-gray-600">
          Lakukan analisis mandiri melalui asesmen komprehensif untuk memahami berbagai aspek kesejahteraan mental.
        </p>
      </div>

      {/* Aspek Section */}
      <div className="w-full flex justify-center mt-20">
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800">7 Aspek yang Dianalisis</h2>
          <p className="text-gray-500 mt-2 text-sm">Klik setiap aspek untuk melihat penjelasan lengkap</p>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {aspekList.map((item) => (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className="px-5 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm hover:bg-emerald-100 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8 mt-20 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <span className="text-amber-500 text-2xl">⚠️</span>
          Penting untuk Diketahui
        </h3>
        <ul className="text-gray-700 text-sm space-y-2 ml-6 list-disc">
          <li>Asesmen ini bersifat <span className="font-semibold">edukatif</span> dan <span className="font-semibold">bukan diagnosis medis</span>.</li>
          <li>Hasil tidak dapat menggantikan konsultasi dengan profesional kesehatan mental.</li>
          <li>Jika Anda mengalami kondisi darurat, segera hubungi layanan kesehatan profesional.</li>
          <li>Data jawaban Anda hanya diproses di perangkat dan tidak disimpan di server.</li>
        </ul>
      </div>

      {/* Start Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10 mt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Siap Memulai?</h2>
        <p className="text-gray-600 mb-6">
          Pastikan Anda berada di tempat yang nyaman dan memiliki waktu sekitar 10–15 menit untuk menyelesaikan asesmen ini.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 flex items-start gap-3 text-left">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="h-5 w-5 text-emerald-600 focus:ring-emerald-500"
          />
          <p className="text-gray-700 text-sm">
            Saya memahami bahwa asesmen ini bersifat edukatif, bukan diagnosis medis, dan saya siap untuk melakukan analisa kesehatan mental secara mandiri.
          </p>
        </div>

      <button
        onClick={() => checked && navigate("/Assesment")}
        disabled={!checked}
        className={`mt-8 px-8 py-3 rounded-xl text-white font-semibold shadow-md transition ${
          checked
            ? "bg-emerald-600 hover:bg-emerald-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Mulai Asesmen
      </button>

      </div>

    <footer className="w-full bg-gray-50 mt-10 py-3">
      <p className="text-center text-gray-500 text-sm">
        © 2024 <span className="font-medium text-gray-600">MindCheck</span>. 
        Website ini tidak menggantikan profesional kesehatan mental.
      </p>
    </footer>

      {/* Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute right-5 top-5 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-emerald-700 mb-3">{selected}</h3>
            <p className="text-gray-600 mb-4">{detailData[selected]?.desc}</p>

            <div className="bg-emerald-50 p-4 rounded-xl mb-4 text-left">
              <h4 className="font-semibold text-emerald-700 mb-1">Mengapa Aspek Ini Penting?</h4>
              <p className="text-gray-600 text-sm">{detailData[selected]?.why}</p>
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">Indikator yang Diukur:</h4>
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
