import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Email dan password harus diisi");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form
      );

      if (response.data.success) {
        toast.success(response.data.message || "Login berhasil");

        if (response.data.data?.token)
          localStorage.setItem("token", response.data.data.token);

        if (response.data.data?.user)
          localStorage.setItem("user", JSON.stringify(response.data.data.user));

        navigate("/");
      } else {
        toast.error(response.data.message || "Login gagal");
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
        {/* CARD LOGIN */}
        <div className="border border-slate-300 rounded-lg p-8 max-w-md w-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.16)] bg-white mx-auto">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="mb-8">
              <h1 className="text-slate-900 text-3xl font-semibold">Login</h1>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Sign in to your account and explore a world of possibilities.
              </p>
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
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  disabled={loading}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON LOGIN */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-medium text-white bg-primary hover:bg-teal-500 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Sign in"}
            </button>

            <p className="text-sm text-center mt-4 text-slate-600">
              Don’t have an account?
              <a
                href="/register"
                className="text-primary font-medium hover:underline ml-1"
              >
                Register
              </a>
            </p>
          </form>
        </div>

        {/* GAMBAR */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            src="logo-about.jpg"
            className="w-96 rounded-lg object-cover"
            alt="login visual"
          />
        </div>
      </div>
    </div>
  );
}