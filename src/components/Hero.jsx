import { portfolioData } from "../data/portfolioData";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  const { name, role, description } = portfolioData.hero;

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-6 py-24 min-h-screen overflow-hidden"
    >

      {/* ===== Background Glow Effects ===== */}

      {/* Purple Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl -top-32 -left-32"></div>

      {/* Orange Glow */}
      <div className="absolute w-[350px] h-[350px] bg-orange-300/20 dark:bg-orange-500/20 rounded-full blur-3xl -bottom-32 -right-32"></div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-4xl">

        {/* Profile Image */}
        <img
          src={profileImage}
          alt={name}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-6 shadow-xl mx-auto border-4 border-white dark:border-slate-800"
        />

        {/* Small Intro */}
        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
          Hi! I'm {name} 👋
        </p>

        {/* Big Serif Heading */}
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight max-w-4xl mx-auto">
          {role.toLowerCase()}
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-orange-400 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact me →
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-slate-800 transition"
          >
            My Resume ↓
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;