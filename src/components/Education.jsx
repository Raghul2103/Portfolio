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

const Education = () => {
  const { education } = portfolioData;

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

  // Logic for Circular Progress (Assuming CGPA is out of 10)
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  // Calculate stroke offset (defaulting to 10 scale, adjust denominator if needed)
  const percentage = (education.cgpa / 10) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section className="relative py-24 px-6 overflow-hidden min-h-[60vh] flex items-center justify-center">
      
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
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-2 block">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white tracking-tight">
            Education
          </h2>
        </motion.div>

        {/* 2. The "Credential" Card - Split Layout */}
        <motion.div
          variants={itemVariants}
          className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50 dark:border-slate-800 transition-all duration-500 hover:shadow-indigo-500/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative flex flex-col md:flex-row items-stretch">
            
            {/* Left Column: Academic Details */}
            <div className="flex-1 p-8 md:p-12 text-left border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-center">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-4">
                  {education.duration}
                </span>
              </motion.div>

              <motion.h3 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight"
              >
                {education.degree}
              </motion.h3>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-400 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {education.college}
              </motion.p>
            </div>

            {/* Right Column: CGPA Visualization */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 relative overflow-hidden">
              
              {/* Background Decorative Number */}
              <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-slate-200/40 dark:text-slate-700/30 select-none">
                CGPA
              </div>

              <div className="relative flex flex-col items-center">
                {/* Animated Circular Progress */}
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-slate-200 dark:text-slate-700"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* CGPA Text inside circle */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span 
                      className="text-4xl font-bold text-slate-800 dark:text-white"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      {education.cgpa}
                    </motion.span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">out of 10</span>
                  </div>
                </div>

                <motion.p 
                  variants={itemVariants}
                  className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider"
                >
                  Academic Score
                </motion.p>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;