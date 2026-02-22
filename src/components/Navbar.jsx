import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    

  return (
    <>
      {/* ===== Sticky Navbar ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-md border-b border-gray-200 dark:border-gray-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">

          {/* Logo */}
          <h1 className="text-2xl font-semibold tracking-wide">
            RaghulKumar<span className="text-purple-500"></span>
          </h1>

          {/* Desktop Center Menu */}
          <div className="hidden md:flex bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl px-8 py-3 rounded-full shadow-md space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-purple-500 transition">Home</a>
            <a href="#about" className="hover:text-purple-500 transition">About me</a>
            <a href="#projects" className="hover:text-purple-500 transition">My Work</a>
            <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* Desktop Contact Button */}
            <a
              href="#contact"
              className="hidden md:block border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-slate-800 transition"
            >
              Contact ↗
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

          </div>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-transform duration-300 z-40
        ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>My Work</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;