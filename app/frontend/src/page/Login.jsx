import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // PERUBAHAN: useNavigate
import { toast } from "react-toastify";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" }); // Inisialisasi
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // PERUBAHAN: Gunakan hook

  const handleLogin = async (e) => {
    if (e) e.preventDefault(); // Mencegah form submit default

    // Validasi
    if (!form.email || !form.password) {
      toast.error("Email dan password harus diisi", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    setLoading(true);

    try {
      console.log("Mengirim data:", form);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Cek jika berhasil
      if (response.data.success === true) {
        toast.success(response.data.message || "Login berhasil", {
          position: "top-right",
          autoClose: 5000,
        });

        // Simpan token jika ada
        if (response.data.data?.token) {
          localStorage.setItem("token", response.data.data.token);
        }

        // Simpan user data jika ada
        if (response.data.data?.user) {
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
        }

        // Navigasi ke halaman utama
        navigate("/"); // PERUBAHAN: Gunakan sebagai fungsi
      } else {
        // Jika success = false
        toast.error(response.data.message || "Login gagal", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Login error:", error);

      // Handle Axios error
      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data?.message || `Error ${error.response.status}`;

        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
        });

        console.log("Error response data:", error.response.data);
      } else if (error.request) {
        // Request was made but no response
        toast.error("Tidak ada respons dari server", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        // Something else
        toast.error("Terjadi kesalahan: " + error.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Handler untuk form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(e);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="py-6 px-4">
          <div className="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
            <div className="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto">
              {/* Tambahkan onSubmit */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="mb-12">
                  <h1 className="text-slate-900 text-3xl font-semibold">
                    Sign in
                  </h1>
                  <p className="text-slate-600 text-[15px] mt-6 leading-relaxed">
                    Sign in to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>

                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email" // Ubah ke type="email"
                      required
                      value={form.email} // Tambahkan value binding
                      className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      value={form.password} // Tambahkan value binding
                      className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                      disabled={loading}
                    />
                    <label className="ml-3 block text-sm text-slate-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="/forgot-password" // Perbaiki href
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    type="submit" // Ubah ke type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading || !form.email || !form.password}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </button>

                  <p className="text-sm mt-6 text-center text-slate-600">
                    Don't have an account{" "}
                    <a
                      href="/register"
                      className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap"
                    >
                      Register here
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div className="hidden lg:block max-lg:mt-8">
              <img
                src="https://readymadeui.com/login-image.webp"
                className="w-full aspect-71/50 max-lg:w-4/5 mx-auto block object-cover"
                alt="login img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
