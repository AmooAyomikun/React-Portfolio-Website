import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Terminal, BookOpen } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';

const GithubActivity = lazy(() => import('../components/GithubActivity').then(m => ({ default: m.GithubActivity })));
import { projects } from '../lib/data';

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
            <div className="max-w-3xl flex-1 animate-fade-in-up">
              <h1 className="mb-2">
                Hi, I'm <span className="text-accent">Ayomikun Amoo</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-color)]">Software Engineer</h2>
              <p className="text-xl text-[var(--text-muted)] font-medium mb-8">Frontend Developer • Full Stack Developer</p>
              <div className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl font-body space-y-4">
                <p>
                  I build modern web applications with a strong focus on creating fast, intuitive, and accessible user experiences. While frontend is where I do my best work, I also enjoy building complete full-stack applications that solve real problems.
                </p>
                <p>
                  I'm always learning, exploring new technologies, and turning ideas into products that people can use every day.
                </p>
              </div>
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
            </div>
            
            <div className="flex-1 w-full flex justify-center md:justify-end animate-fade-in-scale">
              <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-color)] shadow-xl transition-transform hover:-translate-y-2 duration-500">
                <img src="/professional-image.webp" alt="Quadri Ayomikun Amoo" className="w-full h-full object-cover object-top" loading="eager" fetchPriority="high" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle background detail (no blobs, just structural lines) */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "CGPA (First Technical University)", value: "4.48/5" },
              { label: "Developers Mentored", value: "200+" },
              { label: "Lighthouse Performance", value: "100%" },
              { label: "Production Apps Shipped", value: "3+" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 border border-[var(--border-color)] rounded-2xl shadow-sm hover:border-accent transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="py-24 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl">Core Engineering Pillars</h2>
            <p className="text-xl text-[var(--text-muted)]">
              The foundational principles I bring to every software project I work on.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl hover:border-accent transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[var(--border-color)] rounded-xl flex items-center justify-center text-accent mb-6">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Frontend Excellence</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Building accessible, high-performance, and pixel-perfect user interfaces using modern tooling like React and Tailwind CSS.
              </p>
            </div>
            
            <div className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl hover:border-accent transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[var(--border-color)] rounded-xl flex items-center justify-center text-accent mb-6">
                <Terminal size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Robust Backends</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Architecting secure, scalable APIs and reliable databases using Django, Node.js, and PostgreSQL to support complex data operations.
              </p>
            </div>

            <div className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl hover:border-accent transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[var(--border-color)] rounded-xl flex items-center justify-center text-accent mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Research-Driven</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Applying rigorous academic research methodologies to software architecture, resulting in well-documented and deeply analyzed solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="pt-24 pb-24 min-h-[400px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="flex justify-center items-center h-64 text-[var(--text-muted)]">Loading GitHub Activity...</div>}>
            <GithubActivity />
          </Suspense>
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
