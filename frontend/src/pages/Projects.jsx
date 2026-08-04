import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../lib/data';
import { Layers, Rocket, ShieldCheck } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('All');

  // Extract unique categories (mocked as simple matching for now based on tags)
  // Assuming projects have tags like 'React', 'Django', etc.
  // We'll create smart filters based on common stack combinations.
  const filters = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    const tags = project.tags.map(t => t.toLowerCase());
    if (filter === 'Frontend') {
      return tags.includes('react') || tags.includes('frontend') || tags.includes('html5');
    }
    if (filter === 'Full Stack') {
      return tags.includes('django') || tags.includes('node') || tags.includes('backend');
    }
    return true;
  });

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 animate-fade-in-up">
          <h1 className="mb-6">Projects</h1>
          <p className="text-xl text-[var(--text-muted)] mb-8">
            A selection of my recent work, focusing on full-stack web applications, e-commerce platforms, and developer tools.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  filter === f 
                    ? 'bg-[var(--text-color)] text-[var(--bg-color)]' 
                    : 'bg-[var(--bg-color)] text-[var(--text-muted)] border border-[var(--border-color)] hover:border-[var(--text-color)] hover:text-[var(--text-color)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-[var(--text-muted)] border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
              No projects found for this category.
            </div>
          )}
        </div>

        {/* How I Ship Section */}
        <div className="border-t border-[var(--border-color)] pt-24 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl">How I Ship</h2>
            <p className="text-xl text-[var(--text-muted)]">
              My structured approach to taking an idea from specification to a production-ready application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl">
              <div className="w-12 h-12 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-[var(--text-color)] mb-6 shadow-sm">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Architecture First</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                Before writing code, I design the database schema, define API contracts, and map out the frontend component tree to ensure a scalable foundation.
              </p>
            </div>
            
            <div className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl">
              <div className="w-12 h-12 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-[var(--text-color)] mb-6 shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Test-Driven & Secure</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                I build incrementally, integrating authentication early and writing tests for critical business logic to prevent regressions as the codebase grows.
              </p>
            </div>

            <div className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl">
              <div className="w-12 h-12 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Automated Deployment</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                I utilize CI/CD pipelines (via GitHub Actions, Vercel, or Render) to automate testing and deployments, ensuring that main is always shippable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
