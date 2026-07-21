import { portfolioData } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import profileImage from "../assets/profile.jpeg";
import dsaImage from "../assets/dsa.png";
import problemSolvingImage from "../assets/problem-solving.png";
import { SiLeetcode } from "react-icons/si";
import { FaCode, FaBrain } from "react-icons/fa";

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="
bg-white dark:bg-slate-800
p-5 rounded-2xl
border border-black dark:border-gray-700
shadow-[6px_6px_0px_0px_#000]
dark:shadow-[6px_6px_0px_0px_#9333ea]
hover:shadow-[3px_3px_0px_0px_#000]
dark:hover:shadow-[3px_3px_0px_0px_#9333ea]
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">
                <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">Stack</h3>
                <p className="text-xs text-gray-700 dark:text-gray-200">
                  Full Stack (MERN)
                </p>
              </div>

              <div className="
bg-white dark:bg-slate-800
p-5 rounded-2xl
border border-black dark:border-gray-700
shadow-[6px_6px_0px_0px_#000]
dark:shadow-[6px_6px_0px_0px_#9333ea]
hover:shadow-[3px_3px_0px_0px_#000]
dark:hover:shadow-[3px_3px_0px_0px_#9333ea]
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">
                <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">DSA</h3>
                <p className="text-xs text-gray-700 dark:text-gray-200">
                  Data Structures & LeetCode
                </p>
              </div>

              <div className="
bg-white dark:bg-slate-800
p-5 rounded-2xl
border border-black dark:border-gray-700
shadow-[6px_6px_0px_0px_#000]
dark:shadow-[6px_6px_0px_0px_#9333ea]
hover:shadow-[3px_3px_0px_0px_#000]
dark:hover:shadow-[3px_3px_0px_0px_#9333ea]
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">
                <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">Education</h3>
                <p className="text-xs text-gray-700 dark:text-gray-200">
                  B.E, 12th & 10th
                </p>
              </div>

              <div className="
bg-white dark:bg-slate-800
p-5 rounded-2xl
border border-black dark:border-gray-700
shadow-[6px_6px_0px_0px_#000]
dark:shadow-[6px_6px_0px_0px_#9333ea]
hover:shadow-[3px_3px_0px_0px_#000]
dark:hover:shadow-[3px_3px_0px_0px_#9333ea]
transition-all duration-200
cursor-pointer
hover:scale-[1.02]
">
                <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">Projects</h3>
                <p className="text-xs text-gray-700 dark:text-gray-200">
                  Full-Stack Applications
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ===== DSA & Problem Solving Showcase ===== */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-['Playfair_Display'] text-3xl font-semibold mb-2">
              DSA & Algorithmic Problem Solving
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl mx-auto">
              Strengthening core Computer Science foundations through active problem solving, optimal algorithm design, and continuous practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Data Structures & Algorithms */}
            <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden group hover:border-purple-500 transition-all duration-300">
              <div className="relative h-56 overflow-hidden rounded-2xl mb-6">
                <img
                  src={dsaImage}
                  alt="Data Structures & Algorithms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs flex items-center gap-1.5">
                  <FaCode className="text-purple-400" />
                  <span>Data Structures & Algorithms</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Core CS & Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Proficient in fundamental data structures including Arrays, Linked Lists, Trees, Graphs, Hash Tables, and dynamic programming techniques to design space- and time-efficient code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-medium">Data Structures</span>
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">Algorithms</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">Optimization</span>
              </div>
            </div>

            {/* Card 2: Problem Solving & LeetCode */}
            <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden group hover:border-amber-500 transition-all duration-300">
              <div className="relative h-56 overflow-hidden rounded-2xl mb-6">
                <img
                  src={problemSolvingImage}
                  alt="Problem Solving & LeetCode"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs flex items-center gap-1.5">
                  <FaBrain className="text-amber-400" />
                  <span>Problem Solving</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">LeetCode & Logic Building</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Regularly practicing algorithmic challenges on LeetCode to enhance analytical thinking, optimize time complexity (Big-O), and sharpen interview readiness.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-medium">LeetCode</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">Problem Solving</span>
                </div>
                <a
                  href={portfolioData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl shadow-md transition-all hover:scale-105"
                >
                  <SiLeetcode className="text-sm" />
                  <span>View LeetCode Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default About;