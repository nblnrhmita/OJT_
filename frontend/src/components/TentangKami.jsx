export default function TentangKami() {
  const programs = [
    {
      title: "Minds Check",
      desc: "Kenali Kondisi Kesehatan Mental Anda Lakukan analisis mandiri melalui asesmen komprehensif yang dirancang untuk membantu Anda memahami berbagai aspek kesejahteraan mental.",
      icon: "ri-mental-health-line",
    },
    {
      title: "Minds Talks",
      desc: "Mindstalk adalah ruang berbagi cerita dan edukasi seputar kesehatan mental dan pengembangan diri yang disampaikan secara ringan, relevan, dan mudah dipahami.",
      icon: "ri-megaphone-line",
    },
    {
      title: "Donasi",
      desc: "Dukungan donasimu membantu MindsUnited menyediakan edukasi, ruang aman, dan program kesehatan mental yang dapat diakses oleh lebih banyak anak muda di seluruh Indonesia.",
      icon: "ri-hand-coin-line",
    },
    {
      title: "Brand Ambassador",
      desc: "Kami mencari individu yang memiliki komitmen terhadap pengembangan diri dan kesehatan mental, keterampilan komunikasi yang baik, serta pemahaman tentang target audiens kami (Gen-Z dan milenial).",
      icon: "ri-team-line",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-30">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Tentang Kami
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {programs.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon CDN */}
            <i className={`${item.icon} text-secondary text-6xl mb-4`}></i>

            <h3 className="text-xl font-bold text-primary mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed flex-1">{item.desc}</p>

            <hr className="my-4" />

            <a
              href="#"
              className="text-sm font-semibold text-primary hover:text-primary2 gap-1"
            >
              DETAIL PROGRAM →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
