import { motion } from 'motion/react';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Visual Branding', level: 90 },
  { name: 'Motion Graphics', level: 85 },
  { name: 'Web Development', level: 80 },
  { name: 'Product Strategy', level: 88 },
  { name: 'Typography', level: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-text-sub max-w-2xl mx-auto">
          Combining creative vision with technical proficiency to deliver exceptional results across multiple design disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-lg font-medium text-white">{skill.name}</span>
              <span className="text-sm font-bold text-accent-gold">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full gradient-bg relative"
              >
                <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm"></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="mt-24 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {['Adobe XD', 'Photoshop', 'Canva'].map((tool) => (
          <span key={tool} className="text-xl font-display font-bold tracking-tighter hover:text-accent-orange cursor-default">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
