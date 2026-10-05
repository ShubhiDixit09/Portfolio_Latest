import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import TerminalDrawer from './components/TerminalDrawer';
import RecruiterModal from './components/RecruiterModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import { themes } from './data/themes';

export default function App() {
  // Always default to light; restore saved theme on mount
  const [themeId, setThemeId] = useState('light');
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Activate intersection observer scroll reveals
  useScrollReveal();

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
  }, [themeId]);

  // Restore saved theme on first load; also clear old dark/light key
  useEffect(() => {
    localStorage.removeItem('theme'); // remove old binary toggle key
    const saved = localStorage.getItem('portfolio-theme');
    const valid = ['light', 'dark', 'ocean', 'sunset', 'forest', 'rose'];
    if (saved && valid.includes(saved)) {
      setThemeId(saved);
    } else {
      setThemeId('light');
    }
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-200 relative"
      style={{ background: 'var(--bg)', color: 'var(--text-1)' }}
    >
      {/* Top Reading / Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[120] pointer-events-none transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)'
        }}
      />

      {/* Global Interactive Overlays */}
      <Toast />
      <TerminalDrawer themeId={themeId} setThemeId={setThemeId} />
      <RecruiterModal isOpen={isRecruiterOpen} onClose={() => setIsRecruiterOpen(false)} />
      <CommandPalette
        themeId={themeId}
        setThemeId={setThemeId}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

      <Navbar
        themeId={themeId}
        setThemeId={setThemeId}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

      <main className="space-y-4">
        <Hero onOpenRecruiter={() => setIsRecruiterOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
