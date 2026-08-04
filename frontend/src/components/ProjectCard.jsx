import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col border border-[var(--border-color)] bg-[var(--bg-color)] rounded-2xl overflow-hidden hover:border-accent transition-colors duration-300"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--border-color)] relative">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--border-color)] text-[var(--text-color)]">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--border-color)] text-[var(--text-muted)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-[var(--text-muted)] mb-6 flex-grow">
          {project.shortDescription}
        </p>
        <Link 
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-hover transition-colors mt-auto"
        >
          View Case Study <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
