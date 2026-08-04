import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Command } from 'lucide-react';
import { cn } from '../lib/utils';
import { CommandPalette } from './CommandPalette';

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check initial theme preference
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setIsDark(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('light');
      localStorage.theme = 'light';
    } else {
      root.classList.remove('light');
      localStorage.theme = 'dark';
    }
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-color)]/80 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-display font-bold tracking-tight">
              Dev<span className="text-accent">.</span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive ? "text-accent" : "text-[var(--text-color)]"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-2 pl-4 border-l border-[var(--border-color)]">
              <button
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                className="p-2 rounded-full hover:bg-[var(--border-color)] text-[var(--text-muted)] transition-colors flex items-center justify-center gap-1"
                aria-label="Open command palette"
                title="Command Palette (Cmd/Ctrl + K)"
              >
                <Command size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--text-color)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-color)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive ? "text-accent bg-[var(--border-color)]" : "text-[var(--text-color)] hover:bg-[var(--border-color)]"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[var(--text-color)] hover:bg-[var(--border-color)] flex items-center gap-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-lg mb-1">Developer Portfolio</p>
          <p className="text-meta text-[var(--text-muted)]">
            Built with React, Tailwind, and Framer Motion.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-[var(--text-muted)] hover:text-accent transition-colors">GitHub</a>
          <a href="#" className="text-[var(--text-muted)] hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="text-[var(--text-muted)] hover:text-accent transition-colors">Twitter</a>
        </div>
        
        {/* Lighthouse Score Display */}
        <div className="flex items-center gap-3 bg-[var(--border-color)]/50 px-4 py-2 rounded-full border border-[var(--border-color)]">
          <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mr-2">Lighthouse</span>
          {[
            { label: 'Perf', val: 100 },
            { label: 'A11y', val: 100 },
            { label: 'Practices', val: 100 },
            { label: 'SEO', val: 100 }
          ].map((score) => (
            <div key={score.label} className="flex flex-col items-center group relative cursor-help">
              <svg viewBox="0 0 36 36" className="w-8 h-8 text-[var(--success)]">
                <path
                  className="fill-none stroke-current opacity-20"
                  strokeWidth="3"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="fill-none stroke-current"
                  strokeWidth="3"
                  strokeDasharray={`${score.val}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="21.5" className="fill-current font-bold" fontSize="10" textAnchor="middle">{score.val}</text>
              </svg>
              <span className="absolute -top-8 bg-[var(--bg-color)] border border-[var(--border-color)] px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {score.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-[var(--bg-dark)] relative">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
}
