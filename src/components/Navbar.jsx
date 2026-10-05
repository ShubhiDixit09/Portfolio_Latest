import React, { useState, useEffect, useRef } from 'react';
import { Palette, Menu, X, ArrowUpRight, Check, Search, FileText, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { themes } from '../data/themes';

export default function Navbar({ themeId, setThemeId }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const themeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close theme picker when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const currentTheme = themes.find(t => t.id === themeId) || themes[0];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={isScrolled ? {
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--nav-border)',
        backdropFilter: 'blur(12px)',
        padding: '10px 0',
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      } : { background: 'transparent', padding: '16px 0' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5 font-bold tracking-tight"
            style={{ color: 'var(--text-1)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200"
              style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-hover))` }}>
              <span className="text-sm font-black tracking-wider">SD</span>
            </div>
            <span className="text-lg font-semibold tracking-tight transition-colors"
              style={{ color: 'var(--text-1)' }}>
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={isActive
                    ? { color: 'var(--accent-text)', background: 'var(--accent-muted)' }
                    : { color: 'var(--text-2)' }
                  }
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.background = 'var(--surface-2)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">

            {/* Theme Picker */}
            <div className="relative" ref={themeRef}>
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                aria-label="Choose theme"
                title="Choose theme"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer text-xs font-medium"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
              >
                {/* Color dot showing current theme */}
                <span className="w-3.5 h-3.5 rounded-full shrink-0 ring-2 ring-offset-1"
                  style={{ background: currentTheme.dot, ringOffsetColor: 'var(--surface)' }} />
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{currentTheme.label}</span>
              </button>

              {/* Dropdown */}
              {themeOpen && (
                <div
                  className="absolute right-0 mt-2 p-2 rounded-2xl shadow-xl border z-50 min-w-[180px]"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider px-2 pb-1.5"
                    style={{ color: 'var(--text-3)' }}>
                    Choose Theme
                  </p>
                  <div className="space-y-0.5">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setThemeId(t.id); setThemeOpen(false); }}
                        className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer text-left"
                        style={themeId === t.id
                          ? { background: 'var(--accent-muted)', color: 'var(--accent-text)' }
                          : { color: 'var(--text-2)' }
                        }
                        onMouseEnter={e => { if (themeId !== t.id) { e.currentTarget.style.background = 'var(--surface-2)'; } }}
                        onMouseLeave={e => { if (themeId !== t.id) { e.currentTarget.style.background = 'transparent'; } }}
                      >
                        {/* Mini preview strip */}
                        <div className="flex items-center gap-0.5 shrink-0">
                          {t.preview.map((color, i) => (
                            <span
                              key={i}
                              className="rounded-sm"
                              style={{
                                background: color,
                                width: i === 0 ? '14px' : '8px',
                                height: '18px',
                                border: '1px solid rgba(0,0,0,0.15)',
                              }}
                            />
                          ))}
                        </div>
                        <span className="flex-1">{t.label}</span>
                        {themeId === t.id && (
                          <Check className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent-text)' }} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Command Menu Shortcut Button */}
            <button
              onClick={() => {
                const e = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true, bubbles: true });
                window.dispatchEvent(e);
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer"
              style={{ background: 'var(--surface-2)', color: 'var(--text-3)', border: '1px solid var(--border)' }}
              title="Open command palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <kbd className="text-[10px] font-mono px-1 py-0.5 rounded" style={{ background: 'var(--border)' }}>⌘K</kbd>
            </button>

            {/* Developer Terminal Trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-colors cursor-pointer"
              style={{ background: 'var(--surface-2)', color: 'var(--text-2)', border: '1px solid var(--border)' }}
              title="Open Developer Terminal (Press ` or ~)"
            >
              <Terminal className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
              <span>&gt;_</span>
            </button>

            {/* Resume Link */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all"
              style={{ color: 'var(--text-1)', border: '1px solid var(--border)', background: 'var(--surface-2)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-text)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--surface)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface-2)'; }}
            >
              <FileText className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
              <span>Resume</span>
            </a>

            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm text-white"
              style={{ background: 'var(--accent)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border transition-colors"
              style={{ color: 'var(--text-2)', border: '1px solid var(--border)', background: 'var(--surface)' }}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-2 rounded-2xl shadow-xl flex flex-col gap-1"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-text)'; e.currentTarget.style.background = 'var(--accent-muted)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 px-2 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border)' }}>
              <button
                onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('toggle-terminal')); }}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-mono transition-colors cursor-pointer"
                style={{ background: 'var(--surface-2)', color: 'var(--text-2)', border: '1px solid var(--border)' }}
              >
                <Terminal className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
                <span>Developer Terminal (&gt;_)</span>
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{ background: 'var(--surface-2)', color: 'var(--text-1)', border: '1px solid var(--border)' }}
              >
                <FileText className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
                <span>View Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium text-white transition-colors"
                style={{ background: 'var(--accent)' }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
