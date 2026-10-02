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
import { useScrollReveal } from './hooks/useScrollReveal';
import { themes } from './data/themes';

export default function App() {
  // Always default to light; restore saved theme on mount
  const [themeId, setThemeId] = useState('light');

  // Activate intersection observer scroll reveals
  useScrollReveal();

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
    <div className="min-h-screen transition-colors duration-200"
      style={{ background: 'var(--bg)', color: 'var(--text-1)' }}
    >
      <CommandPalette />
      <Navbar themeId={themeId} setThemeId={setThemeId} />
      <main className="space-y-4">
        <Hero />
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
