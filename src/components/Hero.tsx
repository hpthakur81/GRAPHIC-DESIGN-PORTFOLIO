import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background Streaks */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-full h-px bg-linear-to-r from-transparent via-accent-orange/20 to-transparent rotate-12 blur-sm"></div>
        <div className="absolute top-1/2 -left-20 w-full h-px bg-linear-to-r from-transparent via-accent-gold/10 to-transparent -rotate-6 blur-sm"></div>
        <div className="absolute top-3/4 -left-20 w-full h-px bg-linear-to-r from-transparent via-accent-red/20 to-transparent rotate-3 blur-sm"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-orange/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-display font-medium tracking-[0.3em] uppercase text-text-sub mb-4">
            Creative Designer
          </h2>
          
          <div className="relative inline-block w-full max-w-fit mx-auto">
            <h1 className="relative z-10 text-[13vw] sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white leading-none">
              PORT<span className="gradient-text glow-orange">FOLIO</span>
            </h1>
            
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-8 md:-right-12 font-script text-[6vw] sm:text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20 whitespace-nowrap"
            >
              Harsh Pratap Singh
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-24"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-text-sub mb-4">Scroll Down</span>
            <div className="w-px h-12 bg-linear-to-b from-accent-orange to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
