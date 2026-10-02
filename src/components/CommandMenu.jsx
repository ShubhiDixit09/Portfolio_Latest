import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowUpRight, FileText, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'About', action: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Skills', action: () => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Projects', action: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Experience', action: () => { document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Education', action: () => { document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Contact', action: () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } },
];

export default function CommandMenu({ onThemeChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery('');
  }, [open]);

  const commands = [
    ...navItems.map(n => ({ icon: <ArrowUpRight className="w-4 h-4" />, label: `Go to ${n.label}`, action: () => { n.action(); setOpen(false); } })),
    { icon: <Mail className="w-4 h-4" />, label: 'Copy Email', action: () => { navigator.clipboard.writeText(personalInfo.email); setOpen(false); } },
    { icon: <FileText className="w-4 h-4" />, label: 'Open Resume', action: () => { window.open(personalInfo.resumeUrl, '_blank'); setOpen(false); } },
  ];

  const filtered = query
    ? commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer"
      style={{ background: 'var(--surface-2)', color: 'var(--text-3)', border: '1px solid var(--border)' }}
      title="Open command menu"
    >
      <Search className="w-3.5 h-3.5" />
      <span>Search</span>
      <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ background: 'var(--border)', color: 'var(--text-3)' }}>⌘K</kbd>
    </button>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
          <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--text-3)' }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: 'var(--text-1)' }}
          />
          <kbd className="px-2 py-1 rounded text-xs font-mono" style={{ background: 'var(--surface-2)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>ESC</kbd>
        </div>

        {/* Commands List */}
        <div className="py-2 max-h-80 overflow-y-auto">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-center" style={{ color: 'var(--text-3)' }}>No results found.</p>
          )}
          {filtered.map((cmd, idx) => (
            <button
              key={idx}
              onClick={cmd.action}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left cursor-pointer"
              style={{ color: 'var(--text-1)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ color: 'var(--text-3)' }}>{cmd.icon}</span>
              <span>{cmd.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
