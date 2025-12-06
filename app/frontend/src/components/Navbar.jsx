import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Cek token saat komponen mount dan ketika ada perubahan
  useEffect(() => {
    checkAuthStatus();

    // Listen untuk event storage change (jika login/logout dari tab lain)
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setIsLoggedIn(true);
      if (user) {
        try {
          setUserData(JSON.parse(user));
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  const handleLogout = () => {
    // Clear semua auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Update state
    setIsLoggedIn(false);
    setUserData(null);

    // Tutup mobile menu jika terbuka
    setMobileMenuOpen(false);

    // Redirect ke home
    navigate("/");

    // Optional: Refresh halaman untuk update state global
    window.dispatchEvent(new Event("storage"));
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Program", href: "/program" },
    { name: "Artikel", href: "/articles" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 shadow-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-primary/10"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
                  EduConnect
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  {/* User Profile Dropdown */}
                  <div className="relative group">
                    <button className="flex items-center space-x-2 focus:outline-none">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-r from-primary to-cyan-600 flex items-center justify-center text-white font-semibold">
                        {userData?.username?.charAt(0) || "U"}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {userData?.username || "User"}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Profile Saya
                        </Link>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                        >
                          Keluar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-primary hover:text-cyan-700 transition-colors"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-cyan-600 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Daftar Gratis
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="md:hidden"
        >
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl">
              <DialogPanel className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="text-lg font-bold text-primary">
                      EduConnect
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="p-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex-1 p-4">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="border-t p-4">
                  {isLoggedIn ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-cyan-600 flex items-center justify-center text-white font-semibold">
                          {userData?.username?.charAt(0) || "U"}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {userData?.username || "User"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {userData?.email}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Link
                          to="/profile"
                          className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Profile Saya
                        </Link>
                        <Link
                          to="/dashboard"
                          className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          Keluar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        to="/login"
                        className="block w-full px-4 py-3 text-center text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Masuk
                      </Link>
                      <Link
                        to="/register"
                        className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-primary to-cyan-600 rounded-lg hover:shadow-lg transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Daftar Gratis
                      </Link>
                    </div>
                  )}
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </header>
    </>
  );
}
