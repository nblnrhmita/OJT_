import AboutMe from "../components/AboutMe";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NilaiKomunitas from "../components/NilaiKomunitas";
import TentangKami from "../components/TentangKami";

export default function Index() {
  return (
    <>
      <Navbar />

      <section id="home" className="scroll-mt-20">
        <HeroSection />
      </section>

      <section id="about-me" className="scroll-mt-20">
        <AboutMe />
      </section>

      <section id="nilai-komunitas" className="scroll-mt-20">
        <NilaiKomunitas />
      </section>

      <section id="tentang-kami" className="scroll-mt-20">
        <TentangKami />
      </section>

      <section id="artikel" className="scroll-mt-20">
        <Artikel />
      </section>

      <Footer />
    </>
  );
}
