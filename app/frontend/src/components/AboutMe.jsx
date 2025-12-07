export default function AboutMe() {
  return (
    <section className="px-6 lg:px-20 py-35 bg-gradient-to-b from-white to-secondary/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE / LOGO */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo-about.jpg"
            alt="About MindsUnited"
            className="w-56 sm:w-72 md:w-80 lg:w-96 object-contain rounded-xl shadow-lg
                       hover:shadow-2xl transition-all duration-300"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-primary leading-snug">
            Tentang <span className="text-secondary">MindsUnited</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MindsUnited adalah komunitas nasional yang berfokus pada peningkatan
            kesehatan mental dan kesejahteraan sosial di Indonesia. Kami
            menghadirkan ruang aman untuk edukasi, diskusi, dan dukungan terkait
            pengembangan diri dan kesehatan emosional.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Melalui berbagai program seperti{" "}
            <span className="font-semibold text-primary">kelas edukasi</span>,
            <span className="font-semibold text-primary">
              {" "}
              konseling komunitas
            </span>
            , dan
            <span className="font-semibold text-primary">
              {" "}
              ruang berbagi cerita
            </span>
            , kami membangun lingkungan inklusif, suportif, dan mudah diakses
            oleh seluruh lapisan masyarakat.
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold 
                         hover:bg-primary2 transition-all shadow-md"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
