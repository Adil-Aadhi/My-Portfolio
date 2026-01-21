import { motion } from "framer-motion";

const Skills = () => {

  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "Redux", "Tailwind", "HTML/CSS"]
    },
    {
      title: "Backend",
      items: ["Python", "Django", "DRF", "ORM", "REST APIs"]
    },
    {
      title: "Database & Cloud",
      items: ["SQL", "PostgreSQL", "AWS Basics"]
    },
    {
      title: "Tools",
      items: ["Git", "Postman", "Figma", "Linux"]
    }
  ];

  return (
    <section id='skills' className="min-h-screen bg-gradient-to-b from-black to-slate-900 px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            text-4xl md:text-5xl font-bold
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-400 to-purple-500
            mb-12
          "
        >
          Skills & Expertise
        </motion.h2>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}

              className="
                p-6 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur
              "
            >

              <h3 className="text-xl text-cyan-400 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((skill, idx) => (

                  <span
                    key={idx}
                    className="
                      px-4 py-2 rounded-lg
                      bg-black/40 text-gray-300
                      border border-white/10
                      hover:border-cyan-400
                      transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Simple Expertise (No Fake Percent) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >

          <p className="text-gray-400 max-w-2xl mx-auto">
            Focused on building scalable full-stack applications  
            with React + Django, clean architecture,  
            and AI-integrated experiences.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Skills;
