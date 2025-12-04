import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import TentangKami from "./components/TentangKami";
import Artikel from "./components/Artikel";
import Program from "./components/Program";
import Testimoni from "./components/AboutMe";
import Footer from "./components/Footer";
import NilaiKomunitas from "./components/NilaiKomunitas";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <HeroSection />
            <AboutMe />
            <NilaiKomunitas />
            <TentangKami />
            <Artikel />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
