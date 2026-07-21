import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const { github, linkedin, leetcode, email } = portfolioData.contact;

  return (
    <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="flex justify-center items-center gap-6 mb-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl transition-colors"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-xl transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-amber-500 text-xl transition-colors"
          title="LeetCode"
        >
          <SiLeetcode />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-gray-600 dark:text-gray-400 hover:text-purple-500 text-xl transition-colors"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © 2026 Raghulkumar K S | FULL Stack Developer
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
        Built with ❤️ using React.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;