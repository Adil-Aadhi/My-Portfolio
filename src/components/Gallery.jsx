import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlay, FaImage, FaVideo, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = () => {
  const [visible, setVisible] = useState(4);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const loadMore = () => setVisible((prev) => Math.min(prev + 4, galleryData.length));
  const showLess = () => setVisible(4);

  const galleryData = [
  { 
    type: "image",
    src: "/gallery/8.jpeg",
    title: "Paper Presentation",
    desc: "Presented a research paper on Artificial Intelligence concepts and real-world applications. Explained core AI fundamentals.",
    year: "2023",
    category: "Academic"
  },

  {
    type: "video",
    src: "/gallery/expo.mp4",
    title: "Exhibition",
    desc: "Led the college exhibition during NAAC visit along with my team. Received appreciation for project explanation and presentation.",
    year: "2024",
    category: "Event"
  },

  {
    type: "image",
    src: "/gallery/7.jpeg",
    title: "Industrial Visit",
    desc: "Visited Cybrosys Technologies at Kinfra, Calicut for industry exposure. Learned about real software workflows and IT culture.",
    year: "2025",
    category: "Academic"
  },

  {
    type: "image",
    src: "/gallery/6.jpeg",
    title: "Internship",
    desc: "Started internship as Python Full Stack Developer at Bridgeon, Calicut. Worked on web development and backend concepts.",
    year: "2025",
    category: "professional"
  },

  {
    type: "image",
    src: "/gallery/5.jpeg",
    title: "Topic Presentation",
    desc: "Got opportunity to present a session on 'how to make first impression' during internship period. Shared communication and work ethics.",
    year: "2025",
    category: "Professional"
  },

  {
    type: "image",
    src: "/gallery/4.jpeg",
    title: "Preparation",
    desc: "Preparing presentation slides and project demonstration materials. Focused on structuring content clearly and effectively.",
    year: "2025",
    category: "Professional"
  },

  {
    type: "video",
    src: "/gallery/presentation.mp4",
    title: "Presentation Clip",
    desc: "Explored the concept of dreams seen during sleep, their types and meanings. Discussed mysterious dream experiences with scientific and psychological perspectives.",
    year: "2025",
    category: "Professional"
  },

  {
    type: "image",
    src: "/gallery/3.jpeg",
    title: "Paper Presentation",
    desc: "Moment from my presentation on the mystery of dreams, sharing knowledge with confidence. A motivating experience that inspired curiosity and self-learning among the audience.",
    year: "2025",
    category: "Professional"
  },

  {
    type: "image",
    src: "/gallery/2.jpeg",
    title: "Paper Presentation",
    desc: "Extended discussion on dream concepts with better structure and real-life examples. Showcased growth in presentation and communication skills.",
    year: "2025",
    category: "Professional"
  }
];


  const filteredData = galleryData.filter(item => 
    filter === "all" || item.type === filter
  )

  const visibleData = [...filteredData].reverse().slice(0, visible);

  const getNextItem = () => {
    const currentIndex = filteredData.findIndex(item => item === selected);
    return filteredData[(currentIndex + 1) % filteredData.length];
  };

  const getPrevItem = () => {
    const currentIndex = filteredData.findIndex(item => item === selected);
    return filteredData[(currentIndex - 1 + filteredData.length) % filteredData.length];
  };

  return (
    <section id="gallery" className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white px-4 md:px-6 py-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Memory Gallery
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            A collection of moments from presentations, exhibitions, and collaborative projects
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["all", "image", "video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300
                flex items-center gap-2 cursor-pointer
                ${filter === type 
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-300 shadow-lg shadow-cyan-500/10" 
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {type === "image" && <FaImage className="text-sm" />}
              {type === "video" && <FaVideo className="text-sm" />}
              {type === "all" ? "All Media" : type === "image" ? "Photos" : "Videos"}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {visibleData.map((item, i) => (
              <motion.div
                key={`${item.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(item)}
                className="group relative cursor-pointer"
              >
                {/* Glass Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  
                  {/* Type Badge */}
                  <div className={`
                    absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md
                    ${item.type === "video" 
                      ? "bg-cyan-500/20 border border-cyan-400/30 text-cyan-300" 
                      : "bg-purple-500/20 border border-purple-400/30 text-purple-300"
                    }
                  `}>
                    <div className="flex items-center gap-1.5">
                      {item.type === "video" ? <FaPlay className="text-[10px]" /> : <FaImage className="text-[10px]" />}
                      <span className="uppercase tracking-wider">{item.type}</span>
                    </div>
                  </div>

                  {/* Media Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                    {item.type === "image" ? (
                      <motion.img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"   
                        decoding="async" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                          loop
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-400/30 group-hover:bg-cyan-500/30 transition-colors">
                            <FaPlay className="text-cyan-300 text-xl ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="text-xs text-gray-400 capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Show Less Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {visible < filteredData.length && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="px-8 py-3 rounded-xl font-medium transition-all duration-300
                        bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 
                        border border-cyan-400/30 text-cyan-300
                        hover:from-cyan-500/30 hover:to-cyan-600/30 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
            >
              Load More (+{Math.min(4, filteredData.length - visible)})
            </motion.button>
          )}

          {visible > 4 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showLess}
              className="px-8 py-3 rounded-xl font-medium transition-all duration-300
                        bg-gradient-to-r from-purple-500/10 to-purple-600/10 
                        border border-purple-400/20 text-purple-300
                        hover:from-purple-500/20 hover:to-purple-600/20 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer"
            >
              Show Less
            </motion.button>
          )}
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] border border-white/20 backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 transition-colors"
              >
                <FaTimes />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(getPrevItem()); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(getNextItem()); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 transition-colors"
              >
                <FaChevronRight />
              </button>

              {/* Media Content */}
              <div className="flex flex-col h-full">
                {/* Media Display */}
                <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800">
                  {selected.type === "image" ? (
                    <motion.img
                      key={selected.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      src={selected.src}
                      alt={selected.title}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[60vh] max-w-full object-contain rounded-xl"
                    />
                  ) : (
                    <motion.div
                      key={selected.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full max-w-2xl"
                    >
                      <video
                        src={selected.src}
                        controls
                        autoPlay
                        className="w-full h-auto max-h-[60vh] rounded-xl"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 border-t border-white/10 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selected.title}</h3>
                      <p className="text-gray-300 text-lg">{selected.desc}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${selected.type === "video" 
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30" 
                          : "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                        }
                      `}>
                        {selected.type.toUpperCase()}
                      </span>
                      <span className="text-cyan-400 font-semibold">{selected.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-sm">Click outside or press ESC to close</span>
                    <span className="text-sm capitalize">{selected.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;