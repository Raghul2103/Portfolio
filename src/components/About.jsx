import { portfolioData } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        {/* ===== Section Title ===== */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Introduction
          </p>

          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-semibold">
            About me
          </h2>
        </div>

        {/* ===== Main Layout ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT SIDE ===== */}
          <div className="relative flex justify-center">

            <div className="relative w-full flex justify-center">

              {/* Image */}
              <img
                src={profileImage}
                alt="About"
                className="w-full max-w-[420px] rounded-3xl shadow-xl object-cover"
              />

              {/* ===== Rotating Circular Badge ===== */}
              <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 md:-bottom-12 md:-right-12 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center">

  {/* White Background Circle */}
  <div className="absolute w-full h-full bg-white rounded-full shadow-xl"></div>

  {/* Outer Border Circle */}
  <div className="absolute w-full h-full rounded-full border border-gray-300 dark:border-gray-600"></div>

  {/* SVG Rotating Text */}
  <svg
    viewBox="0 0 200 200"
    className="absolute w-full h-full animate-spin-slow text-gray-700 dark:text-gray-300"
  >
    <defs>
      <path
        id="circlePath"
        d="
          M 100, 100
          m -75, 0
          a 75,75 0 1,1 150,0
          a 75,75 0 1,1 -150,0
        "
      />
    </defs>

   <text
  fontSize="12"
  letterSpacing="4"
  className="font-['Playfair_Display'] fill-gray-800"
>
  <textPath xlinkHref="#circlePath" startOffset="0%">
    FULL STACK DEVELOPER • FULL STACK DEVELOPER •
  </textPath>
</text>
  </svg>

  {/* Center Icon */}
  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
    💻
  </div>

</div>
            </div>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-10">
              {portfolioData.about}
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-3 gap-6">

<div className="
bg-white dark:bg-slate-800
p-6 rounded-2xl
border border-black dark:border-gray-700
shadow-[8px_8px_0px_0px_#000]
dark:shadow-[8px_8px_0px_0px_#9333ea]
hover:shadow-[4px_4px_0px_0px_#000]
dark:hover:shadow-[4px_4px_0px_0px_#9333ea]
hover:border-black
dark:hover:border-white
active:border-black
dark:active:border-white
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">Stack</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  MERN
                </p>
              </div>

              <div className="
bg-white dark:bg-slate-800
p-6 rounded-2xl
border border-black dark:border-gray-700
shadow-[8px_8px_0px_0px_#000]
dark:shadow-[8px_8px_0px_0px_#9333ea]
hover:shadow-[4px_4px_0px_0px_#000]
dark:hover:shadow-[4px_4px_0px_0px_#9333ea]
hover:border-black
dark:hover:border-white
active:border-black
dark:active:border-white
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">Education</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  B.E Computer Science
                </p>
              </div>

              <div className="
bg-white dark:bg-slate-800
p-6 rounded-2xl
border border-black dark:border-gray-700
shadow-[8px_8px_0px_0px_#000]
dark:shadow-[8px_8px_0px_0px_#9333ea]
hover:shadow-[4px_4px_0px_0px_#000]
dark:hover:shadow-[4px_4px_0px_0px_#9333ea]
hover:border-black
dark:hover:border-white
active:border-black
dark:active:border-white
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">Projects</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Built multiple full-stack systems
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default About;