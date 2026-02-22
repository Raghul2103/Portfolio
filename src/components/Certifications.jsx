// import { portfolioData } from "../data/portfolioData";

// const Certifications = () => {
//   return (
//     <section className="py-20 px-6 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-8">Certifications</h2>

//       <div className="space-y-4">
//         {portfolioData.certifications.map((cert, index) => (
//           <div key={index} className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow-md">
//             {cert}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;


import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

// Custom Icon for the Certificate
const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const Certifications = () => {
  const { certifications } = portfolioData;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      
      {/* 1. Unique "Blueprint" Grid Background */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div 
            className="absolute inset-0" 
            style={{ 
                backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', 
                backgroundSize: '40px 40px' 
            }} 
        />
      </div>

      {/* Decorative Gradient Orb - Top Right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-2 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* 2. Professional Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative border-l-2 border-dashed border-slate-300 dark:border-slate-700 ml-4 md:ml-8 pl-8 space-y-10"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[2.60rem] top-4 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 group-hover:scale-125 transition-transform duration-300" />

              {/* Card Content */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
                
                <div className="flex items-start gap-5">
                  {/* Icon Container */}
                  <div className="hidden sm:flex flex-shrink-0 w-12 h-12 items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                    <CertificateIcon />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                       {/* Certification Number Badge */}
                       <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                         CRED-{String(index + 1).padStart(3, '0')}
                       </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white leading-snug">
                      {cert}
                    </h3>

                    {/* Decorative "Verified" Line */}
                    <div className="mt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;