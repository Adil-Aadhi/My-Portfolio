import { motion } from "framer-motion";

const Projects = () => {

  const projects = [
    {
      name: "PC - CRAFT",
      img: "/pccraft-2.png",
      features: [
        "3D Visualization",
        "Combitbility Checking",
        "Messaging System",
        "Razorpay Payment Gateway",
        "AI Agentic Model"
      ],
      tech: ["React", "Python", "Django Rest Framework", "Django Channels", "Fast API", "SQL"],
      link: "https://pc-craft-frontent.vercel.app/",
      git: "https://github.com/Adil-Aadhi/PC_craft_backend"
    },
    {
      name: "Technox – E-Commerce",
      img: "/technox.png",
      features: [
        "Glassmorphic modern UI",
        "Add to Cart & Wishlist",
        "Order Management",
        "Razorpay Payment Gateway",
        "Admin Dashboard Control"
      ],
      tech: ["React", "Python", "Django", "SQL"],
      link: "https://technox-e-com.vercel.app/",
      git: "https://github.com/Adil-Aadhi/technox-backend-prod"
    },

    {
      name: "MovieVerse",
      img: "/movie.png",
      features: [
        "Netflix style modern UI",
        "Search & Filter movies",
        "Latest movies all languages",
        "Show details, cast, posters",
        "OTT platform navigation"
      ],
      tech: ["React", "API", "TMDB"],
      link: "https://movie-recomendation-system-plum.vercel.app/",
      git: "https://github.com/Adil-Aadhi/Movie-Recomendation-System"
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-900 to-black px-4 md:px-6 py-12 md:py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE – FIXED FOR MOBILE */}
        <div className="sticky top-4 md:top-16 mb-6 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 py-2"
          >
            Projects
          </motion.h2>
        </div>

        <div className="relative">
          {projects.map((p, i) => (

            <motion.div
              key={i}
              className="
                sticky top-[90px] md:top-[120px]
                min-h-[auto] md:h-[70vh]
                flex items-start md:items-center
                transition-all duration-500
              "
              style={{ zIndex: i + 1 }}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >

              {/* CARD */}
              <div
                className="
                  w-full mt-4 md:mt-7
                  relative overflow-hidden
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  border rounded-3xl p-5 md:p-8
                  backdrop-blur-2xl
                  transition-all duration-700
                "
              >

                <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-center z-10">

                  {/* IMAGE – MOBILE SAFE */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl group w-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={p.img}
                      alt={p.name}
                      className="w-100 h-56 md:h-80 object-cover rounded-xl"
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <div className="text-white space-y-5">

                    <h3 className="text-2xl md:text-3xl font-bold">
                      {p.name}
                    </h3>

                    <ul className="space-y-2">
                      {p.features.map((feature, k) => (
                        <li key={k} className="flex gap-2 text-gray-300">
                          <span className="text-cyan-400">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((tech, k) => (
                        <span
                          key={k}
                          className="
                            px-3 py-1 text-sm rounded-full
                            bg-cyan-500/10 text-cyan-300
                            border border-cyan-400/30
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={p.link}
                        target="_blank"
                        className="px-5 py-2 rounded-lg bg-cyan-500 text-black"
                      >
                        Live Demo
                      </a>

                      <a
                        href={p.git}
                        target="_blank"
                        className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400"
                      >
                        GitHub
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
