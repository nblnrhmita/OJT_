import { Link } from "react-router-dom";

export default function TentangKami() {
  const programs = [
    {
      title: "Minds Check",
      desc: "Kenali kondisi kesehatan mental Anda melalui asesmen komprehensif untuk memahami kesejahteraan mental.",
      icon: "ri-mental-health-line",
      link: "/mindscheck",
    },
    {
      title: "Minds Talks",
      desc: "Ruang berbagi cerita, berdiskusi, dan mendapatkan dukungan dari komunitas positif.",
      icon: "ri-megaphone-line",
      link: "/minds-talks",
    },
    {
      title: "Donasi",
      desc: "Dukungan Anda membantu menjalankan berbagai program kesehatan mental di MindsUnited.",
      icon: "ri-hand-coin-line",
      link: "https://l.instagram.com/?u=https%3A%2F%2Flynk.id%2Fmindsunited%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnvvEf64omenzkv6zbiF1yjx8HBMv4kGPwTLkFziyRikD8H4RnzjvnxbdQEsw_aem_paLf6VWen0I0OCLyzQErrA&e=AT1jl4LyHEyX8K1pQB-TvEK3KtnoxtWK_B-Tam6JlAJcc8Ks90T9LmeiLItNzzV3WNmySqNPzKEbmcHAtw0bE99fPhhc49pTiRLWLYwfHg",
    },
    {
      title: "Brand Ambassador",
      desc: "Mencari individu yang berkomitmen dalam edukasi kesehatan mental dan siap menjadi representatif MindsUnited.",
      icon: "ri-team-line",
      link: "/brand-ambassador",
    },
  ];

  return (
    <div className="py-20 px-6 lg:px-28 bg-gradient-to-b from-white to-primary/10">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-primary mb-14">
        Program Kami
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-secondary/20 mb-6">
              <i className={`${item.icon} text-secondary text-4xl`} />
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-bold text-primary mb-3">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>

            {/* CTA */}
            <Link
              to={item.link}
              className="inline-block text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              Detail Program →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
