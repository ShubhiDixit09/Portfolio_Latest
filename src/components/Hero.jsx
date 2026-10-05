import React from 'react';
import { ArrowDown, Mail, Phone, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Hero Card */}
        <div className="p-8 sm:p-10 md:p-12 rounded-3xl shadow-sm relative overflow-hidden"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          {/* Accent Ambient */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-2xl pointer-events-none opacity-40"
            style={{ background: `radial-gradient(circle, var(--accent-muted), transparent)` }} />

          <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 border"
                style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)', borderColor: 'var(--accent-border)' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: 'var(--accent)' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: 'var(--accent)' }} />
                </span>
                {personalInfo.status}
              </div>

              {/* Name & Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-3"
                style={{ color: 'var(--text-1)' }}>
                {personalInfo.name}
              </h1>

              <p className="text-base sm:text-lg font-medium mb-4"
                style={{ color: 'var(--accent-text)' }}>
                {personalInfo.title}
              </p>

              <p className="text-sm sm:text-base leading-relaxed max-w-xl mb-7"
                style={{ color: 'var(--text-2)' }}>
                {personalInfo.shortBio}
              </p>

              {/* Buttons & Social Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-sm text-white"
                  style={{ background: 'var(--accent)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-colors"
                  style={{ background: 'var(--surface-2)', color: 'var(--text-1)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface-2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-colors"
                  style={{ background: 'var(--surface-2)', color: 'var(--text-1)', border: '1px solid var(--border)' }}
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-1 pl-1">
                  {[
                    { href: personalInfo.github, icon: <GithubIcon className="w-4 h-4" />, title: 'GitHub' },
                    { href: personalInfo.linkedin, icon: <LinkedinIcon className="w-4 h-4" />, title: 'LinkedIn' },
                    { href: personalInfo.leetcode, icon: <LeetCodeIcon className="w-4 h-4" />, title: 'LeetCode' },
                    { href: personalInfo.codeforces, icon: <CodeforcesIcon className="w-4 h-4" />, title: 'Codeforces' },
                    { href: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4" />, title: 'Email: ' + personalInfo.email },
                    { href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`, icon: <Phone className="w-4 h-4" />, title: 'Phone: ' + personalInfo.phone },
                  ].map(({ href, icon, title }) => (
                    <a
                      key={title}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noreferrer"
                      title={title}
                      className="p-2.5 rounded-xl transition-colors"
                      style={{ color: 'var(--text-3)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-text)'; e.currentTarget.style.background = 'var(--surface-2)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-md"
                style={{ outline: '4px solid var(--border)' }}>
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6"
            style={{ borderTop: '1px solid var(--border)' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: 'var(--text-1)' }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
