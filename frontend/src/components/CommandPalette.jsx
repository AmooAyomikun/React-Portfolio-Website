import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, User, Briefcase, Mail, Moon, Sun } from 'lucide-react';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const items = [
    { id: 'home', title: 'Home', icon: <Search size={18} />, action: () => navigate('/') },
    { id: 'about', title: 'About Me', icon: <User size={18} />, action: () => navigate('/about') },
    { id: 'projects', title: 'Projects', icon: <Briefcase size={18} />, action: () => navigate('/projects') },
    { id: 'resume', title: 'Resume', icon: <FileText size={18} />, action: () => navigate('/resume') },
    { id: 'contact', title: 'Contact', icon: <Mail size={18} />, action: () => navigate('/contact') },
    { 
      id: 'theme', 
      title: 'Toggle Dark/Light Mode', 
      icon: document.documentElement.classList.contains('light') ? <Moon size={18} /> : <Sun size={18} />, 
      action: () => {
        const isLight = document.documentElement.classList.contains('light');
        if (isLight) {
          document.documentElement.classList.remove('light');
          localStorage.theme = 'dark';
        } else {
          document.documentElement.classList.add('light');
          localStorage.theme = 'light';
        }
      }
    },
  ];

  const filteredItems = query === '' 
    ? items 
    : items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  // Reset selection when filtering
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center px-4 py-3 border-b border-[var(--border-color)]">
              <Search size={20} className="text-[var(--text-muted)] mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search or jump to..."
                className="flex-grow bg-transparent border-none outline-none text-[var(--text-color)] placeholder-[var(--text-muted)]"
              />
              <span className="text-xs text-[var(--text-muted)] bg-[var(--border-color)] px-2 py-1 rounded">ESC</span>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="px-4 py-8 text-center text-[var(--text-muted)]">
                  No results found for "{query}"
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors ${
                      index === selectedIndex 
                        ? 'bg-[var(--border-color)] text-accent' 
                        : 'text-[var(--text-color)]'
                    }`}
                  >
                    <span className={index === selectedIndex ? 'text-accent' : 'text-[var(--text-muted)]'}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
