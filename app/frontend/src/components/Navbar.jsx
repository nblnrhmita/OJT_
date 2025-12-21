import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    checkAuthStatus();
    window.addEventListener("storage", checkAuthStatus);
    return () => window.removeEventListener("storage", checkAuthStatus);
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setIsLoggedIn(true);
      if (user) setUserData(JSON.parse(user));
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    setMobileMenuOpen(false);
    navigate("/");
    window.dispatchEvent(new Event("storage"));
  };

  /* ================= NAVIGATION ================= */
  const navigation = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "Tentang Kami", href: "#about-me", type: "scroll" },
    { name: "Program", href: "#tentang-kami", type: "scroll" },
    { name: "Artikel", href: "#artikel", type: "scroll" },
  ];

  /* ================= RENDER LINK ================= */
  const NavItem = ({ item, mobile = false }) =>
    item.type === "scroll" ? (
      <a
        href={item.href}
        onClick={() => mobile && setMobileMenuOpen(false)}
        className={`${
          mobile
            ? "block px-3 py-3 rounded-lg text-base"
            : "text-sm relative group"
        } font-medium text-gray-700 hover:text-primary transition`}
      >
        {item.name}
        {!mobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        )}
      </a>
    ) : (
      <Link
        to={item.href}
        onClick={() => mobile && setMobileMenuOpen(false)}
        className={`${
          mobile
            ? "block px-3 py-3 rounded-lg text-base"
            : "text-sm relative group"
        } font-medium text-gray-700 hover:text-primary transition`}
      >
        {item.name}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
              Minds United
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <div className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                    {userData?.username?.charAt(0) || "U"}
                  </div>
                  <span className="text-sm">{userData?.username}</span>
                </button>

                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm text-primary">
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm text-white bg-primary rounded-lg"
                >
                  Daftar Gratis
                </Link>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg">
          <DialogPanel className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-primary">Minds United</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 p-4 space-y-2">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} mobile />
              ))}
            </div>

            <div className="border-t p-4">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-red-600"
                >
                  Keluar
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mb-2 text-center border rounded-lg py-2"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center bg-primary text-white rounded-lg py-2"
                  >
                    Daftar Gratis
                  </Link>
                </>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
