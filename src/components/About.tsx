import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-square border border-white/10 shadow-2xl">
            <img 
              src="https://i.ibb.co/mVdRpWm7/Untitled-design.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-orange/20 rounded-full blur-[60px] z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-red/20 rounded-full blur-[60px] z-0"></div>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-text-sub text-lg leading-relaxed mb-8">
            I am a passionate Creative Designer with over 2 years of experience in building visually stunning and highly functional digital products. My approach combines artistic intuition with data-driven design principles to create interfaces that not only look beautiful but also provide seamless user experiences.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl h-full">
              <h3 className="text-accent-orange font-bold text-xl mb-2">Branding</h3>
              <p className="text-text-sub text-sm">Developing unique visual identities that resonate with audiences.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl h-full">
              <h3 className="text-accent-red font-bold text-xl mb-2">Creative Design</h3>
              <p className="text-text-sub text-sm">Pushing visual boundaries through innovative concepts and artistic execution.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl h-full">
              <h3 className="text-accent-gold font-bold text-xl mb-2">Logo Folio</h3>
              <p className="text-text-sub text-sm">Crafting memorable and timeless logos that define brand essence.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl h-full">
              <h3 className="text-accent-orange font-bold text-xl mb-2">Social Media Post</h3>
              <p className="text-text-sub text-sm">Designing engaging visuals tailored for maximum social media impact.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl h-full">
              <h3 className="text-accent-red font-bold text-xl mb-2">Merchandise Design</h3>
              <p className="text-text-sub text-sm">Creating custom apparel and product designs that people love to wear.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl h-full">
              <h3 className="text-accent-gold font-bold text-xl mb-2">Print Media Design</h3>
              <p className="text-text-sub text-sm">High-quality layouts for brochures, posters, and physical marketing materials.</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 gradient-bg rounded-full font-bold text-white shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-all"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
