import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Resume() {
  const resumeUrl = "/amoo-resume.pdf";

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[8.5/11] bg-white rounded-lg overflow-hidden shadow-xl border border-[var(--border-color)]"
        >
          <embed
            src={resumeUrl}
            type="application/pdf"
            className="w-full h-full"
            title="Amoo Quadri Ayomikun Resume"
          />
        </motion.div>
      </div>
    </div>
  );
}
