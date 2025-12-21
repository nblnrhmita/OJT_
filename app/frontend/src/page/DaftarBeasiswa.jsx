import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DaftarBeasiswa() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    no_hp: "",
    pendidikan: "",
    beasiswa: "",
    alasan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/pendaftaran", form);
      alert("Pendaftaran berhasil!");
      setForm({
        nama: "",
        email: "",
        no_hp: "",
        pendidikan: "",
        beasiswa: "",
        alasan: "",
      });
        }catch (err) {
    console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow">
          <h1 className="text-3xl font-bold text-center mb-6">
            Form Pendaftaran <span className="text-primary">Beasiswa</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Aktif"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-xl"
            />

            <input
              type="text"
              name="no_hp"
              placeholder="Nomor HP"
              value={form.no_hp}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-xl"
            />

            <select
              name="pendidikan"
              value={form.pendidikan}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-xl"
            >
              <option value="">Pilih Jenjang Pendidikan</option>
              <option value="SMA">SMA</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
            </select>

            <select
              name="beasiswa"
              value={form.beasiswa}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-xl"
            >
              <option value="">Pilih Beasiswa</option>
              <option value="LPDP">LPDP</option>
              <option value="Beasiswa Unggulan">Beasiswa Unggulan</option>
            </select>

            <textarea
              name="alasan"
              placeholder="Alasan mendaftar beasiswa"
              value={form.alasan}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border px-4 py-3 rounded-xl"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-teal-600"
            >
              Kirim Pendaftaran
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
