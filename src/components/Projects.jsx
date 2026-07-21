import { portfolioData } from "../data/portfolioData";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-semibold text-center mb-24 font-['Playfair_Display']">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((mouseX - centerX) / 15);
    y.set(-(mouseY - centerY) / 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="gradient-border"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        className="
          gradient-border-inner
          bg-white dark:bg-slate-900
          p-8
          rounded-3xl
          relative
          overflow-hidden
          shadow-2xl
          transition-all duration-500
        "
      >
        {/* Spotlight Effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
          <div className="absolute w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl -top-32 -left-32"></div>
        </div>

        {/* Image Preview */}
        {project.image && (
          <div className="relative mb-6 overflow-hidden rounded-2xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        )}

        <h3 className="text-2xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-indigo-500 text-sm mb-3 font-medium">
          {project.tech}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-4">
          {(project.link || project.liveLink) && (
            <motion.a
              href={project.link || project.liveLink}
              target={(project.link || project.liveLink) !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-sm rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              <span>Link</span>
              <FaExternalLinkAlt className="text-xs" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;