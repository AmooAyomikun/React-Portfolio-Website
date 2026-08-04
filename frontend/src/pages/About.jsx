import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Terminal, Database, Wrench, ArrowRight, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-32">
          {/* Hero / Intro */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="mb-8 text-5xl md:text-6xl tracking-tight">About Me</h1>
            <p className="text-2xl md:text-3xl text-[var(--text-color)] font-medium leading-snug mb-8">
              Hi, I'm Ayomikun Amoo — a Software Engineer who enjoys building digital products that solve real-world problems.
            </p>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed">
              I believe great software isn't just about writing code; it's about understanding people, solving meaningful problems, and creating experiences that are <span className="text-[var(--text-color)]">simple, reliable, and enjoyable</span> to use.
            </p>
          </motion.section>

          {/* Journey */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold sticky top-24">My Journey</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                My passion for software engineering began with a curiosity about how technology can improve everyday life. Since then, I've dedicated myself to building modern web applications that combine clean user experiences with scalable backend systems.
              </p>
              <p>
                Along the way, I've developed projects across healthcare, fintech, and education, each challenging me to think beyond code and focus on building solutions that people genuinely find useful.
              </p>
            </div>
          </motion.section>

          {/* What I Build */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What I Build</h2>
              <p className="text-xl text-[var(--text-muted)]">I enjoy building frontend and full stack web applications from the ground up.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "My Health Compass",
                  desc: "An AI-powered healthcare management platform that helps patients track medical records, monitor health trends, and generate intelligent health reports."
                },
                {
                  name: "SkillBridge",
                  desc: "A peer-to-peer skill exchange platform that enables people to learn by trading knowledge instead of paying for courses."
                },
                {
                  name: "DebtFree",
                  desc: "A social finance platform that simplifies bill splitting, community savings, shared expenses, and peer-to-peer financial support."
                }
              ].map((project, idx) => (
                <div key={idx} className="p-8 border border-[var(--border-color)] rounded-2xl bg-gradient-to-b from-[var(--bg-color)] to-transparent hover:border-accent transition-all group flex flex-col h-full">
                  <h3 className="font-bold text-xl mb-4 text-[var(--text-color)] group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12">My Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Frontend Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Code2 size={24} /></div>
                  <h3 className="text-2xl font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Terminal size={24} /></div>
                  <h3 className="text-2xl font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'Python', 'Django'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Database size={24} /></div>
                  <h3 className="text-2xl font-semibold">Database & Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Supabase', 'Prisma'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Wrench size={24} /></div>
                  <h3 className="text-2xl font-semibold">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git & GitHub', 'Vercel', 'Render', 'Figma'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.section>

          {/* Beyond the Code & Currently */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Beyond the Code</h2>
              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  Outside of software development, I enjoy learning new technologies, improving my engineering skills, and exploring better ways to solve problems through technology.
                </p>
                <p>
                  During my NYSC, I also served as a Research Assistant, where I strengthened my research, analytical, and problem-solving abilities while supporting academic research.
                </p>
                <p>
                  I also enjoy mentoring aspiring developers and sharing knowledge whenever I can.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Currently Focused On</h2>
              <ul className="space-y-4">
                {[
                  "Building production-ready full-stack applications",
                  "Deepening my knowledge of software architecture",
                  "Learning cloud technologies and DevOps practices",
                  "Contributing to open-source projects",
                  "Preparing for graduate studies and international research"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-muted)]">
                    <ChevronRight className="text-accent shrink-0 mt-1" size={18} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-color)] p-12 md:p-20 text-center">
              {/* Subtle background glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-[var(--text-color)]">Let's Connect</h2>
                <p className="text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
                  I'm always interested in connecting with developers, researchers, founders, and organizations building meaningful products. Whether it's an opportunity or just a conversation about technology, I'd be happy to connect.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-[var(--bg-dark)] font-bold text-lg rounded-xl hover:bg-accent-hover transition-all hover:scale-105 active:scale-95"
                >
                  Get in Touch
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.section>

        </div>

      </div>
    </div>
  );
}
