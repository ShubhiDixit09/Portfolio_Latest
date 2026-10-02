import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 transition-colors"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
              style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-hover))` }}>
              SD
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>
                {personalInfo.name}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-3)' }}>
                Built with React, Vite & Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[
                { href: personalInfo.github, icon: <GithubIcon className="w-4 h-4" />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <LinkedinIcon className="w-4 h-4" />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
                { href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`, icon: <Phone className="w-4 h-4" />, label: 'Phone' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer" aria-label={label}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: 'var(--text-3)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-text)'; e.currentTarget.style.background = 'var(--surface-2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'transparent'; }}>
                  {icon}
                </a>
              ))}
            </div>

            <div className="h-4 w-px" style={{ background: 'var(--border)' }} />

            <button onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-text)'; e.currentTarget.style.background = 'var(--surface-2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'transparent'; }}>
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-xs"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
