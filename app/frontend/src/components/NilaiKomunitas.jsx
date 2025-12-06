import React from "react";

export default function NilaiKomunitas() {
  const cards = [
    {
      title: "G – Gratitude",
      desc: "Cara untuk melihat hal-hal positif dalam hidup, yaitu mengingat dan meningkatkan rasa syukur.",
    },
    {
      title: "R – Resilience",
      desc: "Membantu membentuk ketangguhan mental; memberikan alat untuk mengambil kembali kendali diri.",
    },
    {
      title: "O – Openness",
      desc: "Menciptakan ruang aman untuk berbicara tentang masalah mental, pengalaman pribadi, dan perasaan.",
    },
    {
      title: "W – Well-being",
      desc: "Keselamatan dan kesejahteraan anggota di dalam aspek fisik, mental, emosional, dan sosial.",
    },
    {
      title: "T – Togetherness",
      desc: "Menciptakan komunitas yang saling mendukung dan membangun ikatan yang kuat.",
    },
    {
      title: "H – Hope",
      desc: "Memberikan harapan kepada anggota komunitas untuk memandang masa depan dengan optimisme, bahkan dalam situasi yang sulit.",
    },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Nilai Nilai Komunitas
      </h2>

      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-secondary">
              {card.title}
            </h3>
            <p className="mt-2 text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
