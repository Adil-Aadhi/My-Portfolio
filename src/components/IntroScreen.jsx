import { motion } from "framer-motion";

const IntroScreen = () => {
  const letters = ["A", "d", "i", "l"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[999] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

      {/* Name Animation */}
      <motion.div className="flex gap-1">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              text-6xl md:text-8xl font-bold
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500
            "
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-gray-400 mt-4 tracking-widest text-sm"
      >
        Portfolio
      </motion.p>

      {/* Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="h-[2px] bg-cyan-400 mt-3"
      />

    </motion.div>
  );
};

export default IntroScreen;
