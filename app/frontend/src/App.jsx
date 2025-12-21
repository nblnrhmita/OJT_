import React from "react";
import { Routes, Route } from "react-router-dom";
import Mindscheck from "./page/Mindcheck";
import Assesment from "./page/Assesment";
import Index from "./page/Index";
import Login from "./page/Login";
import Register from "./page/Register";
import Results from "./page/Results";
import { ToastContainer } from "react-toastify";
import Beasiswa from "././page/Beasiswa";
import KontakPsikolog from "./page/KontakPsikolog";
import Bootcamp from "./page/Bootcamp";
import ScrollToTop from "./components/ScrollToTop";
import DaftarBeasiswa from "./page/DaftarBeasiswa";

function App() {
  return (
    <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mindscheck" element={<Mindscheck />} />
            <Route path="/assesment" element={<Assesment />} />
            <Route path="/results" element={<Results />} />
            {/* auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/beasiswa" element={<Beasiswa />} />
            <Route path="/kontakpsikolog" element={<KontakPsikolog/>} />
            <Route path="/bootcamp" element={<Bootcamp/>} />
            <Route path="/daftar" element={<DaftarBeasiswa />} />
          </Routes>
    </>
  );
}

export default App;
