import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Resume() {
  const resumeUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // Placeholder PDF

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
            download="Resume.pdf"
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
          className="w-full aspect-[1/1.4] md:aspect-[16/11] bg-[var(--border-color)] rounded-xl border border-[var(--border-color)] overflow-hidden"
        >
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[var(--bg-color)]">
              <p className="text-[var(--text-muted)] mb-4">It appears your browser doesn't support embedded PDFs.</p>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Click here to view it directly.
              </a>
            </div>
          </object>
        </motion.div>
      </div>
    </div>
  );
}
