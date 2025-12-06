import React from "react";
import { Routes, Route } from "react-router-dom";
import Mindscheck from "./page/Mindcheck";
import Assesment from "./page/Assesment";
import Index from "./page/Index";
import Login from "./page/Login";
import Register from "./page/Register";
import { ToastContainer } from "react-toastify";

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
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mindscheck" element={<Mindscheck />} />
        <Route path="/assesment" element={<Assesment />} />
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
