import { motion } from "framer-motion";

const whyMe = [
  {
    title: "Problem → Solution First",
    desc: "I understand goals before choosing stacks, ensuring technology serves the business — not the opposite.",
  },
  {
    title: "AI + Web Thinking",
    desc: "I build applications where AI logic and web experience work together, not as separate pieces.",
  },
  {
    title: "Clean & Maintainable",
    desc: "Code should be easy to scale and easy for the next developer — including future me.",
  },
  {
    title: "Client Communication",
    desc: "I explain technical things in simple language and keep work transparent and deadline-driven.",
  },
];

const About = () => {
  
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        {/* STORY */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
           <p className="text-gray-300 text-lg leading-relaxed">
              I’m <span className="text-cyan-400 font-medium">Adil Shinas</span> —  
              a developer who builds applications with purpose, not just features.  
              I focus on understanding the real problem, the user behind it,  
              and the simplest technology that can solve it well.
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              For companies, I write clean and maintainable code that can grow with the product.  
              For clients, I translate ideas into practical systems — without technical confusion,  
              missed deadlines, or over-engineered solutions.
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              My core strength is blending modern web development with AI capabilities  
              to create tools that are intelligent, usable, and genuinely valuable.
            </p>


            {/* WHY ME */}
            <div className="mt-8 space-y-4">
              {whyMe.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur"
                >
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FLOAT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl mb-4">Why I Build</h3>
              <p className="text-gray-300">
                Technology should solve real human problems.  
                Every project I build aims to be useful and meaningful.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
