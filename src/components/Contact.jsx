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

const Contact = () => {
  const { contact } = portfolioData;
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="py-28 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-semibold mb-10">Contact Me</h2>

        <p className="mb-6 text-gray-600 dark:text-gray-300">
          I'm always open to new opportunities and collaborations.
        </p>

        <div className="space-y-3 text-lg">
          <p>📧 {contact.email}</p>
          <p>📞 {contact.phone}</p>
          <p>💻 {contact.github}</p>
          <p>📍 {contact.location}</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:scale-105"
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