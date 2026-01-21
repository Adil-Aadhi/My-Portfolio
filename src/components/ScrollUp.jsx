import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTop = () => {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setShow(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.8
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 20,
            transition: { duration: 0.2 }
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 360,
            transition: { 
              rotate: { duration: 0.5, ease: "easeInOut" }
            }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Outer Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg"
          />
          
          {/* Progress Ring */}
          <motion.svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
            initial={{ rotate: -90 }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * scrollProgress) / 100}
              initial={{ strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 283 - (283 * scrollProgress) / 100 }}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Main Button */}
          <div className="relative w-14 h-14 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                        border border-white/20 backdrop-blur-xl
                        shadow-2xl shadow-cyan-500/20
                        group-hover:shadow-cyan-500/30 group-hover:shadow-3xl
                        group-hover:border-cyan-400/30
                        transition-all duration-300">
            
            {/* Inner Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-sm" />
            
            {/* Arrow Icon */}
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative text-2xl font-bold text-cyan-400 group-hover:text-white"
            >
              ↑
            </motion.div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2
                        bg-gray-900/90 backdrop-blur-md border border-white/10
                        rounded-lg text-xs font-medium text-white/90 whitespace-nowrap
                        pointer-events-none"
            >
              Back to top
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 
                            bg-gray-900/90 border-b border-r border-white/10 rotate-45" />
            </motion.div>
          </div>


          {/* Particle Effects on Hover */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{
                  opacity: [0, 1, 0],
                  y: -30,
                  x: Math.random() * 20 - 10,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
                className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-cyan-400/60"
              />
            ))}
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;