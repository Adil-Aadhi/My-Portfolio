import { motion } from "framer-motion";

const LeetCodeStats = () => {
  return (
    <section
      id="leetcode"
      className="bg-gradient-to-b from-black to-slate-900 py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          LeetCode Stats
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-10"
        >
          My problem-solving journey and coding consistency
        </motion.p>

        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="https://leetcard.jacoblin.cool/AdilAadhi?theme=dark&font=Baloo&ext=contest"
            alt="LeetCode Stats"
            loading="lazy"
            className="rounded-2xl shadow-2xl max-w-full"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default LeetCodeStats;
