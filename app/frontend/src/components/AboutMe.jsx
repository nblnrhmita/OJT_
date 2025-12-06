export default function AboutMe() {
  return (
    <section className="px-6 lg:px-20 py-20 bg-light">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LOGO / IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo-about.jpg" // ganti dengan path logo kamu
            alt="Company Logo"
            className="w-48 sm:w-64 md:w-72 lg:w-80 object-contain"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            About MindsUnited
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            MindsUnited adalah komunitas nasional yang berkomitmen untuk
            meningkatkan kesehatan mental dan kesejahteraan sosial di Indonesia.
            Kami menyediakan ruang aman untuk diskusi, edukasi, dan dukungan
            terhadap berbagai isu yang berkaitan dengan pengembangan diri dan
            kesehatan emosional.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
            Dengan berbagai program dan kegiatan, seperti kelas edukasi,
            konseling komunitas, hingga ruang berbagi cerita, kami berupaya
            menghadirkan lingkungan yang inklusif, suportif, dan mudah diakses
            oleh siapa saja.
          </p>
        </div>
      </div>
    </section>
  );
}
