import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

const Experience = () => {
  const { experience } = portfolioData;

  const bgImage =
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop";

  return (
    <section
      className="relative py-28 px-6 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/75"></div>

      <div className="relative max-w-5xl mx-auto z-10">
        <h2 className="text-4xl font-semibold mb-16 text-center text-white">
          Professional Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{
            rotateX: 6,
            rotateY: -6,
            scale: 1.03,
          }}
          className="
            relative
            backdrop-blur-xl
            bg-white/10
            p-12
            rounded-3xl
            border border-white/20
            shadow-2xl
            transition-all duration-500
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glow Layer */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <h3 className="text-2xl font-semibold text-white relative z-10">
            {experience.role}
          </h3>

          <p className="text-blue-300 mt-1 relative z-10">
            {experience.company}
          </p>

          <p className="text-sm text-gray-300 mb-6 relative z-10">
            {experience.duration}
          </p>

          <ul className="space-y-4 relative z-10">
            {experience.points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-200 leading-relaxed"
              >
                • {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;