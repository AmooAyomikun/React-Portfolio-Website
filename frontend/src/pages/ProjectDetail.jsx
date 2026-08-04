import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../lib/data';
import { ExternalLink, Code2 as Github, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectDetail() {
  const { slug } = useParams();
  
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[currentIndex];
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-24 pb-32 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-accent transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border-color)] text-[var(--text-color)]">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="mb-6">{project.title}</h1>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-color)] text-[var(--bg-color)] font-medium rounded-md hover:opacity-90 transition-opacity">
              Live Demo <ExternalLink size={18} />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] font-medium rounded-md hover:bg-[var(--border-color)] transition-colors">
              Source Code <Github size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="aspect-[16/9] w-full bg-[var(--border-color)] rounded-2xl overflow-hidden border border-[var(--border-color)]">
          <img src={project.heroImage} alt={`${project.title} Hero`} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        <section>
          <h2 className="mb-6 text-accent">The Problem</h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="mb-6">The Solution</h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            {project.solution}
          </p>
        </section>

        <section className="bg-[var(--border-color)]/30 -mx-4 sm:mx-0 p-6 sm:p-10 rounded-2xl border border-[var(--border-color)]">
          <h2 className="mb-8">Technical Challenges</h2>
          <div className="space-y-10">
            {project.technicalChallenges.map((challenge, idx) => (
              <div key={idx}>
                <h3 className="mb-3 text-[var(--text-color)] font-semibold">{challenge.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {challenge.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6">Tech Stack & Architecture</h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
            {project.techStackDetails}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-[var(--border-color)] text-sm font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section>
            <h2 className="mb-10">Gallery</h2>
            <div className="space-y-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="border border-[var(--border-color)] rounded-xl overflow-hidden">
                  <img src={img} alt={`${project.title} Screenshot ${idx + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 border-t border-[var(--border-color)] pt-16">
        <Link 
          to={`/projects/${nextProject.slug}`}
          className="group block"
        >
          <p className="text-[var(--text-muted)] text-sm font-medium mb-2 uppercase tracking-wider">Next Project</p>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl md:text-4xl font-bold group-hover:text-accent transition-colors">
              {nextProject.title}
            </h3>
            <ArrowRight size={32} className="text-[var(--text-muted)] group-hover:text-accent transition-colors transform group-hover:translate-x-2 duration-300" />
          </div>
        </Link>
      </div>
    </article>
  );
}
