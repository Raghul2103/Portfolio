// import { portfolioData } from "../data/portfolioData";

// const Education = () => {
//   const { education } = portfolioData;

//   return (
//     <section className="py-20 px-6 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-8">Education</h2>

//       <div className="bg-gray-100 dark:bg-slate-800 p-8 rounded-xl shadow-md">
//         <h3 className="text-xl font-semibold">{education.degree}</h3>
//         <p>{education.college}</p>
//         <p>{education.duration}</p>
//         <p className="text-blue-500 font-semibold mt-2">CGPA: {education.cgpa}</p>
//       </div>
//     </section>
//   );
// };

// export default Education;


import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa";

const Education = () => {
  const { education } = portfolioData;
  const eduList = Array.isArray(education) ? education : [education];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden min-h-[60vh] flex items-center justify-center">
      
      {/* 1. Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-white dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900" />
        
        {/* Animated floating shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-2 block">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white tracking-tight font-['Playfair_Display']">
            Education
          </h2>
        </motion.div>

        {/* Education List Cards */}
        <div className="space-y-8">
          {eduList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 dark:border-slate-800 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-2xl group-hover:scale-110 transition duration-300 shrink-0">
                    {index === 0 ? <FaGraduationCap /> : <FaSchool />}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-2">
                      {item.duration}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                      {item.college}
                    </p>
                  </div>
                </div>

                <div className="md:text-right shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-200 dark:border-purple-800/50">
                    <FaAward className="text-amber-500 text-lg" />
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {item.score || item.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;