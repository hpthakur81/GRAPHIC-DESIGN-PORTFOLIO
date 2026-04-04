import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CategoryPage from './pages/CategoryPage';
import DesignsPage from './pages/DesignsPage';
import { motion, useScroll, useSpring } from 'motion/react';

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-bg-primary min-h-screen selection:bg-accent-orange selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-orange z-[60] origin-left shadow-[0_0_10px_#FF6A00]" 
        style={{ scaleX }} 
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        <Projects />
        
        <Skills />
        
        <Contact />
      </main>

      {/* Background Noise/Texture (Optional for premium feel) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/designs/:projectId" element={<DesignsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
