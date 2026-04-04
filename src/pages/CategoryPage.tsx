import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const filteredProjects = projects.filter(
    (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-text-sub hover:text-accent-orange transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase">
            {categoryName} <span className="gradient-text">COLLECTION</span>
          </h1>
          <p className="text-text-sub max-w-md">
            Exploring the depth and variety of our {categoryName} projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-text-sub text-xl italic">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
