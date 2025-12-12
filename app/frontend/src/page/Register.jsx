import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      toast.error("Semua field harus diisi!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        form
      );

      if (response.data.success) {
        toast.success("Registrasi berhasil!");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Registrasi gagal");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Terjadi kesalahan server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="grid lg:grid-cols-2 gap-2 max-w-4xl w-full items-center">
        {/* CARD REGISTER */}
        <div className="border border-slate-300 rounded-lg p-8 max-w-md w-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.16)] bg-white mx-auto">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="mb-8">
              <h1 className="text-slate-900 text-3xl font-semibold">
                Register
              </h1>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Create your account and start your journey with us.
              </p>
            </div>

            {/* USERNAME */}
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Username
              </label>
              <input
                type="text"
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                disabled={loading}
                className="w-full text-sm border border-slate-300 px-4 py-3 rounded-lg outline-blue-600"
                placeholder="Enter your username"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={loading}
                className="w-full text-sm border border-slate-300 px-4 py-3 rounded-lg outline-blue-600"
                placeholder="Enter your email"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  disabled={loading}
                  className="w-full text-sm border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                  placeholder="Enter password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-medium text-white bg-primary hover:bg-teal-500 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Register"}
            </button>

            <p className="text-sm text-center mt-4 text-slate-600">
              Already have an account?
              <a
                href="/login"
                className="text-primary font-medium hover:underline ml-1"
              >
                Login
              </a>
            </p>
          </form>
        </div>

        {/* GAMBAR */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            src="logo-about.jpg"
            className="w-96 rounded-lg object-cover"
            alt="register visual"
          />
        </div>
      </div>
    </div>
  );
}