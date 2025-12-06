import { Link } from "react-router-dom";

export default function TentangKami() {
  const programs = [
    {
      title: "Minds Check",
      desc: "Kenali Kondisi Kesehatan Mental Anda...",
      icon: "ri-mental-health-line",
      link: "/mindscheck",
    },
    {
      title: "Minds Talks",
      desc: "Mindstalk adalah ruang berbagi cerita...",
      icon: "ri-megaphone-line",
      link: "/minds-talks",
    },
    {
      title: "Donasi",
      desc: "Dukungan donasimu membantu berbagai program di MindsUnited.",
      icon: "ri-hand-coin-line",
      link: "/donasi",
    },
    {
      title: "Brand Ambassador",
      desc: "Mencari individu dengan komitmen terhadap edukasi kesehatan mental.",
      icon: "ri-team-line",
      link: "/brand-ambassador",
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
            <i className={`${item.icon} text-secondary text-6xl mb-4`} />

            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>

            <p className="text-gray-600 leading-relaxed flex-1">{item.desc}</p>

            <hr className="my-4" />

            <Link
              to={item.link}
              className="text-sm font-semibold text-primary hover:text-primary2"
            >
              DETAIL PROGRAM →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
