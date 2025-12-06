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
      <HeroSection />
      <AboutMe />
      <NilaiKomunitas />
      <TentangKami />
      <Artikel />
      <Footer />
    </>
  );
}
