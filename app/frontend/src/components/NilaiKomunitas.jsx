import React from "react";

export default function NilaiKomunitas() {
  const cards = [
    {
      letter: "G",
      title: "Gratitude",
      desc: "Cara untuk melihat hal-hal positif dalam hidup, yaitu dengan mengingat dan meningkatkan rasa syukur.",
    },
    {
      letter: "R",
      title: "Resilience",
      desc: "Membantu membentuk ketangguhan mental dan memberikan alat untuk kembali mengambil kendali diri.",
    },
    {
      letter: "O",
      title: "Openness",
      desc: "Menciptakan ruang aman untuk berbicara tentang masalah mental, pengalaman pribadi, dan perasaan.",
    },
    {
      letter: "W",
      title: "Well-being",
      desc: "Fokus pada keselamatan dan kesejahteraan anggota secara fisik, mental, emosional, dan sosial.",
    },
    {
      letter: "T",
      title: "Togetherness",
      desc: "Membangun komunitas yang saling mendukung dan menciptakan ikatan yang kuat.",
    },
    {
      letter: "H",
      title: "Hope",
      desc: "Memberikan harapan agar masyarakat memandang masa depan dengan optimisme.",
    },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-primary mb-14">
        Nilai-Nilai Komunitas
      </h2>

      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              group bg-white border border-gray-100 rounded-2xl p-8 shadow-md
              transition-all duration-300 hover:shadow-xl hover:scale-[1.03]
            "
          >
            {/* BIG LETTER WITH SECONDARY BACKGROUND */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/10 border border-secondary/30 mb-5">
              <span className="text-3xl font-bold text-secondary">
                {card.letter}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-primary mb-3">
              {card.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>

            {/* BOTTOM ACCENT LINE */}
            <div className="mt-6 h-1 w-14 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
