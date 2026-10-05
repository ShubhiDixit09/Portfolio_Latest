import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowUpRight, FileText, Mail, Phone, X, Sparkles, FolderGit2, GraduationCap, Briefcase, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { showToast } from './Toast';

export default function CommandPalette({ themeId, setThemeId }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [open]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const commands = [
    {
      category: 'Navigation',
      items: [
        { label: 'About', hint: 'Background & Focus', icon: <User className="w-4 h-4" />, action: () => scrollTo('about') },
        { label: 'Skills', hint: 'Languages, AI/ML, Stack', icon: <Sparkles className="w-4 h-4" />, action: () => scrollTo('skills') },
        { label: 'Projects', hint: 'Shipped systems & repos', icon: <FolderGit2 className="w-4 h-4" />, action: () => scrollTo('projects') },
        { label: 'Experience', hint: 'DTU Times & Leadership', icon: <Briefcase className="w-4 h-4" />, action: () => scrollTo('experience') },
        { label: 'Education & Honors', hint: 'DTU, SIH, Milestones', icon: <GraduationCap className="w-4 h-4" />, action: () => scrollTo('education') },
        { label: 'Contact', hint: 'Send a message or reach out', icon: <Mail className="w-4 h-4" />, action: () => scrollTo('contact') },
      ]
    },
    {
      category: 'Quick Actions',
      items: [
        {
          label: 'View / Download Resume',
          hint: 'Opens CV in new tab',
          icon: <FileText className="w-4 h-4" />,
          action: () => {
            window.open(personalInfo.resumeUrl, '_blank');
            setOpen(false);
          }
        },
        {
          label: 'Copy Email Address',
          hint: personalInfo.email,
          icon: <Mail className="w-4 h-4" />,
          action: () => {
            navigator.clipboard.writeText(personalInfo.email);
            showToast(`Copied email: ${personalInfo.email}`);
            setOpen(false);
          }
        },
        {
          label: 'Copy Phone Number',
          hint: personalInfo.phone,
          icon: <Phone className="w-4 h-4" />,
          action: () => {
            navigator.clipboard.writeText(personalInfo.phone);
            showToast(`Copied phone: ${personalInfo.phone}`);
            setOpen(false);
          }
        },
        {
          label: 'Open GitHub Profile',
          hint: '@ShubhiDixit09',
          icon: <ArrowUpRight className="w-4 h-4" />,
          action: () => {
            window.open(personalInfo.github, '_blank');
            setOpen(false);
          }
        },
        {
          label: 'Open LinkedIn Profile',
          hint: 'in/shubhi-dixit-dtu',
          icon: <ArrowUpRight className="w-4 h-4" />,
          action: () => {
            window.open(personalInfo.linkedin, '_blank');
            setOpen(false);
          }
        },
      ]
    }
  ];

  // Flatten & filter
  const allItems = commands.flatMap(c => c.items);
  const filtered = query.trim()
    ? allItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.hint.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const handleArrowNav = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => (i + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      style={{ background: 'rgba(0, 0, 0, 0.55)', backdropFilter: 'blur(6px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          className="flex items-center gap-3 px-4 py-3.5"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--text-3)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleArrowNav}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm outline-none font-medium"
            style={{ color: 'var(--text-1)' }}
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md hover:opacity-80"
              style={{ color: 'var(--text-3)' }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd
              className="px-1.5 py-0.5 rounded text-[10px] font-mono tracking-wider"
              style={{ background: 'var(--surface-2)', color: 'var(--text-3)', border: '1px solid var(--border)' }}
            >
              ESC
            </kbd>
          )}
        </div>

        {/* Command Results */}
        <div className="py-2 max-h-72 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="py-8 text-center" style={{ color: 'var(--text-3)' }}>
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-left text-xs sm:text-sm transition-colors cursor-pointer"
                  style={{
                    background: isSelected ? 'var(--accent-muted)' : 'transparent',
                    color: isSelected ? 'var(--accent-text)' : 'var(--text-1)',
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="shrink-0"
                      style={{ color: isSelected ? 'var(--accent-text)' : 'var(--text-3)' }}
                    >
                      {item.icon}
                    </span>
                    <span className="font-semibold truncate">{item.label}</span>
                  </div>
                  <span
                    className="text-[11px] truncate ml-3 shrink-0"
                    style={{ color: isSelected ? 'var(--accent-text)' : 'var(--text-3)' }}
                  >
                    {item.hint}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div
          className="flex items-center justify-between px-4 py-2 text-[10px] font-mono"
          style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--surface-2)',
            color: 'var(--text-3)'
          }}
        >
          <span>Use ↑ ↓ to navigate</span>
          <span>↵ to select</span>
          <span>esc to close</span>
        </div>
      </div>
    </div>
  );
}
