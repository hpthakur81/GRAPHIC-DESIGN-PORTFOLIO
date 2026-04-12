import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Project } from '../types';

export default function Projects() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [clickedProjectId, setClickedProjectId] = useState<string | null>(null);

  const filters = ['UI/UX', 'Branding', 'CREATIVE', 'LOGO', 'SOCIAL MEDIA', 'MERCHANDISE', 'PRINT MEDIA'];

  const handleProjectClick = (project: Project) => {
    if (clickedProjectId === project.id) {
      // If already clicked, open lightbox
      setSelectedImage(project.image);
    } else {
      // First click shows the button
      setClickedProjectId(project.id);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              SELECTED <span className="gradient-text">WORKS</span>
            </h2>
            <p className="text-text-sub max-w-md">
              A collection of projects where creativity meets functionality. Each piece is crafted with precision and purpose.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border-b ${activeFilter === 'All' ? 'text-white border-accent-orange' : 'text-text-sub border-transparent hover:text-white'}`}
            >
              All
            </button>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-sub hover:text-white transition-all group"
              >
                <span>Categories</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-xl overflow-hidden z-50 shadow-2xl border border-white/20"
                  >
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setActiveFilter(filter);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-white/5 ${activeFilter === filter ? 'text-accent-orange' : 'text-text-sub hover:text-white'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects
              .filter(p => activeFilter === 'All' || p.category.toUpperCase() === activeFilter.toUpperCase() || (activeFilter === 'UI/UX' && p.category === 'UI/UX'))
              .map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className={`group relative glass-card rounded-3xl overflow-hidden cursor-pointer ${
                  project.category === 'LOGO' ? 'border-accent-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.15)]' : 
                  project.category === 'CREATIVE' ? 'border-accent-orange/40 shadow-[0_0_30px_rgba(255,106,0,0.15)]' : 
                  project.category === 'SOCIAL MEDIA' ? 'border-accent-red/40 shadow-[0_0_30px_rgba(255,68,68,0.15)]' : 
                  project.category === 'MERCHANDISE' ? 'border-accent-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.15)]' : 
                  project.category === 'PRINT MEDIA' ? 'border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : ''
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* View More Button Overlay */}
                  <AnimatePresence>
                    {clickedProjectId === project.id && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/designs/${project.id}`);
                          }}
                          className="px-6 py-3 bg-accent-orange text-white font-black uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(255,106,0,0.5)] hover:scale-110 transition-transform flex items-center space-x-2"
                        >
                          <span>View More</span>
                          <ExternalLink size={14} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="p-8">
                  <span className="text-xs font-bold text-accent-orange uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent-gold transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 pointer-events-none">
                  <div className="w-full h-1 bg-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_#FF6A00]"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-3 rounded-full glass-card text-white hover:bg-accent-orange/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Project"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
