import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2 as Github, Briefcase as Linkedin, AlertCircle, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl text-[var(--text-muted)] mb-12">
            I'm always open to discussing product design work, software architecture, or partnership opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
                    placeholder="How can I help you?"
                    required
                    disabled={status === 'loading' || status === 'success'}
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="px-8 py-4 w-full md:w-auto bg-accent text-[var(--bg-dark)] font-semibold rounded-md hover:bg-accent-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <span className="flex items-center gap-2 text-[var(--success)] font-medium">
                      <CheckCircle2 size={20} /> Sent successfully
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="flex items-center gap-2 text-[var(--error)] font-medium">
                      <AlertCircle size={20} /> {errorMessage}
                    </span>
                  )}
                </div>
              </form>
            </div>

            <div className="space-y-8 md:pl-8 md:border-l border-[var(--border-color)]">
              <div>
                <h3 className="text-lg font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@example.com" className="flex items-center gap-3 text-[var(--text-muted)] hover:text-accent transition-colors">
                    <Mail size={20} />
                    hello@example.com
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--text-muted)] hover:text-accent transition-colors">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--text-muted)] hover:text-accent transition-colors">
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
