import { Download, FileText } from 'lucide-react';

export function Resume() {
  const resumeUrl = "/amoo-resume.pdf";

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in-up">
          <div>
            <h1 className="mb-4">Resume</h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl">
              A detailed overview of my experience, education, and technical skills.
            </p>
          </div>
          <a
            href={resumeUrl}
            download="Amoo_Quadri_Ayomikun_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[var(--bg-dark)] font-semibold rounded-md hover:bg-accent-hover transition-colors shrink-0"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>

        <div className="w-full bg-[var(--bg-color)] rounded-2xl shadow-sm border border-[var(--border-color)] p-8 md:p-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          
          <div className="border-b border-[var(--border-color)] pb-8 mb-8">
            <h2 className="text-3xl font-bold text-[var(--text-color)] mb-2">Amoo Quadri Ayomikun</h2>
            <p className="text-xl text-accent mb-4">Software Engineer</p>
            <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
              Software Engineer with a strong foundation in building scalable full-stack web applications and robust user interfaces. Passionate about solving complex problems through research-driven approaches, clean architecture, and performance optimization.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Experience
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h4 className="text-xl font-bold">Frontend Developer Intern</h4>
                  <span className="text-accent font-medium mt-1 md:mt-0">Present</span>
                </div>
                <div className="text-lg text-[var(--text-muted)] mb-4">Circle Orange</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--text-muted)] leading-relaxed">
                  <li>Building and optimizing responsive user interfaces for modern web applications using React and Tailwind CSS.</li>
                  <li>Collaborating with cross-functional teams to integrate frontend applications with robust backend APIs.</li>
                  <li>Improving application performance, accessibility, and overall user experience through rigorous code reviews and testing.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h4 className="text-xl font-bold">Research Assistant</h4>
                  <span className="text-[var(--text-muted)] font-medium mt-1 md:mt-0">2023 - 2024</span>
                </div>
                <div className="text-lg text-[var(--text-muted)] mb-4">NYSC</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--text-muted)] leading-relaxed">
                  <li>Strengthened research, analytical, and problem-solving abilities while supporting academic research initiatives.</li>
                  <li>Drafted and contributed to academic papers and reports focusing on technological methodologies.</li>
                  <li>Organized and maintained complex datasets, ensuring accuracy and data integrity across multiple studies.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Education
            </h3>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-xl font-bold">BSc. Software Engineering</h4>
                <span className="text-[var(--text-muted)] font-medium mt-1 md:mt-0">2021 - 2024</span>
              </div>
              <div className="text-lg text-[var(--text-muted)] mb-2">First Technical University</div>
              <p className="text-accent font-medium mb-4">CGPA: 4.48/5.00 (First Class Honors)</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--text-muted)] leading-relaxed">
                <li>Served as Welfare Director for NACOS, demonstrating leadership and organizational skills.</li>
                <li>Mentored over 200 students in frontend development, fostering a community of continuous learning.</li>
                <li>Relevant Coursework: Data Structures & Algorithms, Software Architecture, Database Systems, Web Engineering.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-md text-sm text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Django', 'PostgreSQL', 'Supabase'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-md text-sm text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-semibold mb-3">Tools & Practices</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git & GitHub', 'CI/CD', 'REST APIs', 'Vercel', 'Render', 'Figma', 'System Design'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-md text-sm text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
