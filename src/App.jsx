// import { useContext } from "react";
// import { ThemeContext } from "./context/ThemeContext";
// import IconButton from "@mui/material/IconButton";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

// function App() {
//   const { mode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
//       <div className="flex justify-end p-6">
//         <IconButton onClick={toggleTheme} color="inherit">
//           {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//         </IconButton>
//       </div>

//       <h1 className="text-3xl font-bold text-center">
//         Portfolio Setup Complete
//       </h1>
//     </div>
//   );
// }

// export default App;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    
<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden font-sans">      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;