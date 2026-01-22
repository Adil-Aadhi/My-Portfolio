import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timelineData } from "./timelineData";

/* ---------------- Year Badge ---------------- */
const YearBadge = ({ year }) => (
  <div className="inline-block px-6 py-2 rounded-full border border-cyan-400/40 text-cyan-400 text-2xl font-bold backdrop-blur-md bg-black/60">
    {year}
  </div>
);

/* ---------------- Timeline Card ---------------- */
const TimelineCard = ({ item }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 
               p-4 
               rounded-xl 
               shadow-md 
               hover:shadow-cyan-500/20 
               transition 
               max-w-[92%] mx-auto"
  >
    <h4 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h4>
    <p className="text-sm md:text-base text-white/70 leading-relaxed">{item.description}</p>
  </motion.div>
);

/* ---------------- Main Timeline ---------------- */
const Timeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black text-white overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-extrabold mb-28 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        My Journey
      </motion.h2>

      {/* ================= PROGRESS LINE (ALL VIEWS) ================= */}
      <div className="absolute left-1/2 top-48 bottom-24 w-[3px] bg-white/10 -translate-x-1/2 z-0">
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-b from-cyan-400 to-blue-500 origin-top rounded-full"
        />
      </div>

      {/* ================= TIMELINE ITEMS ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 space-y-20 md:space-y-32 relative z-10">
        {timelineData.map((block, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index}>

              {/* ================= MOBILE VIEW ================= */}
              <div className="md:hidden flex flex-col items-center text-center space-y-6 relative">

                {/* DOT */}
                <span className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-10" />

                <YearBadge year={block.year} />

                <div className="space-y-6 w-full">
                  {block.items.map((item, i) => (
                    <TimelineCard key={i} item={item} />
                  ))}
                </div>
              </div>

              {/* ================= DESKTOP VIEW ================= */}
              <div className="hidden md:grid grid-cols-9 items-start">

                {/* LEFT SIDE */}
                <div
                  className={`col-span-4 ${
                    isLeft ? "text-right pr-12" : "pl-12"
                  }`}
                >
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <YearBadge year={block.year} />
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      {block.items.map((item, i) => (
                        <TimelineCard key={i} item={item} />
                      ))}
                    </div>
                  )}
                </div>

                {/* CENTER DOT */}
                <div className="col-span-1 flex justify-center pt-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                </div>

                {/* RIGHT SIDE */}
                <div
                  className={`col-span-4 ${
                    isLeft ? "pl-12" : "text-left pr-12"
                  }`}
                >
                  {isLeft ? (
                    <div className="space-y-6">
                      {block.items.map((item, i) => (
                        <TimelineCard key={i} item={item} />
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <YearBadge year={block.year} />
                    </motion.div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
