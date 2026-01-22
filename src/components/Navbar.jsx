import { FaGithub, FaLinkedin,FaInstagram, FaWhatsapp,FaTimes  } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion,AnimatePresence  } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <motion.nav
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: scrolled ? 10 : 0,
          scale: scrolled ? 0.96 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`
          fixed left-1/2 -translate-x-1/2 top-0 z-50 text-white
          transition-all duration-300
          ${
            scrolled
              ? "max-w-5xl  w-[80%] rounded-2xl bg-black/20 backdrop-blur-md shadow-2xl border border-white/20"
              : "w-full bg-black/20 backdrop-blur-xl border-b border-white/20"
          }
        `}
      >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <h2 className="text-2xl font-bold text-white">
              Adil<span className="text-cyan-400">.</span>
            </h2>
          </motion.a>

        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#gallery" className="hover:text-cyan-400 transition">
            Gallery
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          {/* <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a> */}

          <div className="flex gap-4 text-xl text-white">

          <a
            href="https://github.com/Adil-Aadhi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
          </a>

          <a
            href="https://linkedin.com/in/adil-shinas-b8545327a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
          </a>

          <a
            href="https://instagram.com/adil__a_adhi_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-cyan-400 cursor-pointer transition" />
          </a>

          <a
            href="https://wa.me/919544773622"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-cyan-400 cursor-pointer transition" />
          </a>

        </div>


        </div>

        {/* Mobile Button */}
       <motion.button
          className="md:hidden flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white"
          />
        </motion.button>



      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden fixed inset-0 top-16 z-[9999]"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-2xl"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ y: -60, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -40, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative mx-4 mt-6 rounded-3xl
                      bg-slate-900
                      border border-slate-700
                      shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                      overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-6">

              {/* Navigation */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-col gap-3"
              >
                {[
                  { href: "#about", label: "About" },
                  { href: "#gallery", label: "Gallery" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="group flex items-center justify-between
                              p-4 rounded-2xl
                              bg-white/[0.06] border border-white/10
                              hover:bg-white/[0.1]
                              active:scale-[0.98]
                              transition-all duration-200"
                  >
                    <span className="text-md font-semibold text-white/90">
                      {item.label}
                    </span>

                    <motion.span
                      initial={{ x: -6, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-cyan-400"
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Social Icons */}
              <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/Adil-Aadhi",
                  color: "hover:text-gray-300",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/in/adil-shinas-b8545327a",
                  color: "hover:text-blue-400",
                  label: "LinkedIn",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://instagram.com/adil__a_adhi_/",
                  color: "hover:text-pink-400",
                  label: "Instagram",
                },
                {
                  icon: <FaWhatsapp />,
                  href: "https://wa.me/919544773622",
                  color: "hover:text-green-400",
                  label: "WhatsApp",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className={`w-14 h-14 rounded-2xl
                              flex items-center justify-center
                              bg-white/[0.08] border border-white/20
                              text-white/80 text-2xl
                              transition-all duration-200 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>


              {/* Close Button */}
             <motion.button
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.96 }}
                className="
                  mt-8 mx-auto
                  w-14 h-14
                  flex items-center justify-center
                  rounded-full
                  bg-gradient-to-r from-cyan-500/20 to-cyan-400/10
                  border border-cyan-400/30
                  text-cyan-300 text-xl
                  hover:from-cyan-500/30 hover:to-cyan-400/20
                  transition-all duration-200
                "
              >
                <FaTimes />
              </motion.button>


            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
