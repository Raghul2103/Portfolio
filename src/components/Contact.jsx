// import { portfolioData } from "../data/portfolioData";

// const Contact = () => {
//   const { contact } = portfolioData;

//   return (
//     <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

//       <p className="mb-4">I'm always open to new opportunities and collaborations.</p>

//       <div className="space-y-2">
//         <p>📧 {contact.email}</p>
//         <p>📞 {contact.phone}</p>
//         <p>💻 {contact.github}</p>
//         <p>📍 {contact.location}</p>
//       </div>

//       <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//         Send Message
//       </button>
//     </section>
//   );
// };

// export default Contact;

import { portfolioData } from "../data/portfolioData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const { contact } = portfolioData;
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="py-28 px-6 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-semibold mb-4 font-['Playfair_Display']">Contact Me</h2>

        <p className="mb-10 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          I'm always open to new opportunities, collaborations, and tech discussions. Feel free to reach out!
        </p>

        {/* ===== Contact Links Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mb-10">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition duration-300 group"
          >
            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition">
              <FaEnvelope className="text-xl" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{contact.email}</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg transition duration-300 group"
          >
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Phone</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{contact.phone}</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-gray-900 dark:hover:border-gray-400 hover:shadow-lg transition duration-300 group"
          >
            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:scale-110 transition">
              <FaGithub className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">GitHub</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Raghul2103</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition duration-300 group"
          >
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition">
              <FaLinkedin className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">LinkedIn</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">raghulkumar2103</p>
            </div>
          </a>

          {/* LeetCode */}
          <a
            href={contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-lg transition duration-300 group"
          >
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition">
              <SiLeetcode className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">LeetCode</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Raghul2103</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Location</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{contact.location}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:scale-105"
        >
          Send Message
        </button>
      </section>

      {/* ===== Modal Form ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                bg-white dark:bg-slate-900
                w-full max-w-lg
                p-8
                rounded-3xl
                shadow-2xl
                relative
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-5 text-xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold mb-6 text-center">
                Send a Message
              </h3>

              <form
                action="https://formsubmit.co/raghulkumar49@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Message!"
                />

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:scale-105"
                >
                  Send Now
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;