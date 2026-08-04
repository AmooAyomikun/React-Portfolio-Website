import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Terminal, Database, Wrench, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

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

          {/* Journey / Experience Timeline */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold sticky top-24">Experience & Education</h2>
            </div>
            <div className="md:col-span-8">
              <div className="relative border-l border-[var(--border-color)] ml-3 space-y-12 pb-4">
                <div className="relative pl-8 group">
                  <div className="absolute w-6 h-6 bg-[var(--bg-color)] border-2 border-accent rounded-full -left-[13px] top-1 group-hover:bg-accent transition-colors" />
                  <div className="text-sm text-[var(--text-muted)] mb-1 font-medium">Present</div>
                  <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">Frontend Developer Intern</h3>
                  <h4 className="text-lg text-accent mb-3">Circle Orange</h4>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Building and optimizing responsive user interfaces for modern web applications using React and Tailwind CSS.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <div className="absolute w-6 h-6 bg-[var(--bg-color)] border-2 border-[var(--border-color)] rounded-full -left-[13px] top-1 group-hover:border-accent transition-colors" />
                  <div className="text-sm text-[var(--text-muted)] mb-1 font-medium">2023 - 2024</div>
                  <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">Research Assistant</h3>
                  <h4 className="text-lg text-[var(--text-muted)] mb-3">NYSC</h4>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Strengthened research, analytical, and problem-solving abilities while supporting academic research initiatives.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <div className="absolute w-6 h-6 bg-[var(--bg-color)] border-2 border-[var(--border-color)] rounded-full -left-[13px] top-1 group-hover:border-accent transition-colors" />
                  <div className="text-sm text-[var(--text-muted)] mb-1 font-medium">2021 - 2024</div>
                  <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">BSc. Software Engineering</h3>
                  <h4 className="text-lg text-[var(--text-muted)] mb-3">First Technical University</h4>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Graduated with a CGPA of 4.48/5.00. Served as Welfare Director for NACOS and mentored over 200 students in frontend development.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How I Build */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How I Build</h2>
              <p className="text-xl text-[var(--text-muted)]">My process for delivering reliable software.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "1. Spec before code",
                  desc: "I write a clear specification and understand the requirements fully before writing any code."
                },
                {
                  title: "2. Build in small increments",
                  desc: "I break down complex problems into small, testable increments to maintain momentum and catch bugs early."
                },
                {
                  title: "3. Focus on performance",
                  desc: "I optimize for speed and accessibility from the start, ensuring applications load fast and work for everyone."
                },
                {
                  title: "4. Disciplined version control",
                  desc: "I keep a clean and descriptive git history so that the context of changes is always preserved."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)] hover:border-accent transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--border-color)] flex items-center justify-center text-accent font-bold text-lg">
                    {item.title.split('.')[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title.split('. ')[1]}</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Code2 size={24} /></div>
                  <h3 className="text-2xl font-semibold">Frontend</h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">Building accessible, responsive, and interactive user interfaces.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Terminal size={24} /></div>
                  <h3 className="text-2xl font-semibold">Backend</h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">Architecting scalable and secure APIs.</p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Django', 'Django REST Framework'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Database size={24} /></div>
                  <h3 className="text-2xl font-semibold">Database</h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">Designing robust data models and ensuring data integrity.</p>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Supabase'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] bg-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Card */}
              <div className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[var(--border-color)] rounded-lg text-accent"><Wrench size={24} /></div>
                  <h3 className="text-2xl font-semibold">Tools</h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">Leveraging modern developer tools for efficient workflows and deployment.</p>
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

          {/* Why Work With Me */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold">Why Work With Me</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "I ship with real error handling",
                  desc: "I don't just build the happy path. I anticipate edge cases and implement robust error boundaries and fallback UI."
                },
                {
                  title: "I document my decisions",
                  desc: "I leave context behind. Through well-written PR descriptions and code comments, teams can pick up my work without me."
                },
                {
                  title: "I focus on the user experience",
                  desc: "Code is just a means to an end. My primary focus is always on delivering a seamless, accessible, and fast experience for the end-user."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-color)] flex flex-col items-start hover:border-accent transition-colors">
                  <CheckCircle2 className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                  Outside of software development, I actively engage in research and write academic papers, constantly exploring new ideas and methodologies.
                </p>
                <p>
                  I also enjoy learning new technologies, improving my engineering skills, and mentoring aspiring developers to share knowledge whenever I can.
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
