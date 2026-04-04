import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function DesignsPage() {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects.find(p => p.id === projectId);
  const designs = project?.designs || [];

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-accent-orange hover:underline font-bold">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-text-sub hover:text-accent-orange transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-black">
            {project.title.split(' ')[0]} <span className="gradient-text">{project.title.split(' ').slice(1).join(' ')}</span>
          </h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {designs.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid rounded-3xl overflow-hidden glass-card border border-white/10 group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Design ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
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
                alt="Selected Design"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
