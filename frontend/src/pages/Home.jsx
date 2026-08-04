import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { GithubActivity } from '../components/GithubActivity';
import { projects } from '../lib/data';

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <h1 className="mb-6">
              Full-Stack Engineer building high-performance 
              <span className="text-accent"> digital experiences</span>.
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-10 max-w-2xl font-body">
              Specializing in React, TypeScript, and modern backend architectures to ship products that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-accent text-[var(--bg-dark)] rounded-md hover:bg-accent-hover transition-colors"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border border-[var(--border-color)] text-[var(--text-color)] rounded-md hover:bg-[var(--border-color)] transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background detail (no blobs, just structural lines) */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </section>

      {/* GitHub Activity Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GithubActivity />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="mb-4">Selected Work</h2>
              <p className="text-[var(--text-muted)] max-w-xl">
                Recent projects emphasizing performance, clean architecture, and user experience.
              </p>
            </div>
            <Link 
              to="/projects"
              className="hidden md:inline-flex text-accent hover:text-accent-hover font-medium transition-colors"
            >
              View all projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link 
              to="/projects"
              className="inline-flex w-full items-center justify-center px-6 py-3 border border-[var(--border-color)] rounded-md hover:bg-[var(--border-color)] transition-colors"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
