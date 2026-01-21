import { FaGithub, FaLinkedin, FaInstagram,FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="min-h-screen w-full overflow-hidden flex items-center justify-center px-4 bg-gradient-to-b from-black to-slate-900">

      <motion.div
        className="w-full max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Hi I'm text */}
        <motion.div className="w-full text-center md:text-left  md:pl-45">

         <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            className="
              text-3xl md:text-5xl
              tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500
              drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]

              font-['Outfit'] font-bold
            "
          >
            Hi, I'm
          </motion.h1>


        </motion.div>

        {/* Image + Name */}
        <motion.div
          variants={item}
          className="relative flex justify-center mt-6 w-full"
        >

          {/* Image with Background Gradient */}
            <div className="relative flex justify-center items-center">

              {/* Smooth Gradient Background */}
              <div className="
                absolute
                w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80
                bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/20
                rounded-full blur-3xl
              "/>

              {/* Actual Image */}
              <img
                src="/dp.jpeg"
                alt="Adil"
                className="
                  relative z-10
                  w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56
                  rounded-full object-cover
                  border border-white/20
                "
              />

            </div>


          {/* Name Overlay - RESPONSIVE FIXED */}
          <motion.h1
            className="
              absolute bottom-[-10px] z-20
              left-1/2 -translate-x-1/2
              md:left-auto md:right-[35%] md:translate-x-0

              text-3xl sm:text-4xl md:text-6xl
              font-bold whitespace-nowrap
            "
          >
            <span
              className="
                text-transparent bg-clip-text
                bg-gradient-to-r from-cyan-400 to-purple-500
              "
            >
              Adil
            </span>
          </motion.h1>

        </motion.div>

        {/* Role */}
        <motion.p
          variants={item}
          className="
            text-gray-300 text-base md:text-xl
            max-w-2xl mx-auto mt-10 px-2
          "
        >
          React Developer • AI Enthusiast • Building intelligent  
          web experiences and creative applications
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col md:flex-row justify-center gap-4 px-2"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-6 py-3 rounded-xl
              bg-cyan-500 hover:bg-cyan-600
              transition text-black font-semibold
              w-full md:w-auto
            "
            data-cursor="pointer"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            View Projects
          </motion.button>

          <motion.a
            href="/CV.pdf"
            download="Adil_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              text-white/60
              px-6 py-3 rounded-xl
              border border-cyan-400
              hover:bg-cyan-400/10 transition cursor-pointer
              w-full md:w-auto
              inline-block text-center
            "
          >
            Download Resume
          </motion.a>

        </motion.div>

        {/* Social */}
        <motion.div
            variants={item}
            className="flex justify-center gap-6 mt-8 text-2xl"
          >

            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Adil-Aadhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white/80 hover:text-cyan-400 cursor-pointer transition" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com/in/adil-shinas-b8545327a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white/80 hover:text-cyan-400 cursor-pointer transition" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://instagram.com/adil__a_adhi_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white/80 hover:text-cyan-400 cursor-pointer transition" />
            </motion.a>


            <motion.a
              whileHover={{ y: -5 }}
              href="https://wa.me/919544773622"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white/80 hover:text-cyan-400 cursor-pointer transition" />
            </motion.a>

          </motion.div>


      </motion.div>

    </section>
  );
};

export default Hero;
