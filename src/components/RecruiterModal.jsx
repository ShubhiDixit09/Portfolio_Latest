import React from 'react';
import { X, Copy, Printer, FileText, Check, ExternalLink, Mail, Phone } from 'lucide-react';
import { personalInfo, stats, projects, education, achievements } from '../data/portfolioData';
import { showToast } from './Toast';

export default function RecruiterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const copyBlurb = () => {
    const blurb = `Candidate: Shubhi Dixit (B.Tech CSE @ DTU, Class of 2029)
Status: Open to Software Engineering & AI/ML Internships
Key Credentials:
• JEE Main: 99.08 Percentile (Qualified JEE Advanced)
• Logitech Women Who Master: Top 1.9% (Top 1,727 of 91k+ candidates)
• 5x Hackathon Finalist (4th / 250+ teams @ VibeWright NSUT, 1st Place Guessapalooza DTU)
• Selected for McKinsey Forward '26
• Core Stack: PyTorch, Agentic AI, RAG, Next.js, FastAPI, C++, Python, TypeScript
• Links: Portfolio: https://github.com/ShubhiDixit09/Portfolio_Latest | Resume: ${window.location.origin}${personalInfo.resumeUrl}
• Contact: ${personalInfo.email} | ${personalInfo.phone}`;

    navigator.clipboard.writeText(blurb);
    showToast('Recruiter candidate summary copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          maxHeight: '92vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{
            background: 'var(--surface-2)',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wider uppercase"
              style={{
                background: 'var(--accent-muted)',
                color: 'var(--accent-text)',
                border: '1px solid var(--accent-border)'
              }}
            >
              Executive Summary
            </span>
            <span className="text-xs font-semibold" style={{ color: 'var(--text-2)' }}>
              Recruiter & Hiring Manager Brief
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyBlurb}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
              style={{
                background: 'var(--surface)',
                color: 'var(--text-1)',
                border: '1px solid var(--border)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              title="Copy candidate summary"
            >
              <Copy className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
              <span className="hidden sm:inline">Copy Blurb</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
              style={{
                background: 'var(--surface)',
                color: 'var(--text-1)',
                border: '1px solid var(--border)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              title="Print one-pager"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl transition-colors cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 text-xs sm:text-sm" style={{ maxHeight: 'calc(92vh - 65px)' }}>
          {/* Identity & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b" style={{ borderColor: 'var(--border)' }}>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: 'var(--text-1)' }}>
                {personalInfo.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold mt-0.5" style={{ color: 'var(--accent-text)' }}>
                {personalInfo.role} • Delhi Technological University
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>
                Targeting: Software Engineering (Backend/Full-Stack) & AI/ML Engineering Internships
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 font-medium hover:underline"
                style={{ color: 'var(--text-2)' }}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: 'var(--text-2)' }}>
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </span>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold"
                style={{ color: 'var(--accent-text)' }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full PDF Resume →</span>
              </a>
            </div>
          </div>

          {/* Key Proof Points Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-3)' }}>
              Quantitative Proof Points & Signals
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { label: 'JEE Main Percentile', val: '99.08%ile', sub: 'Qualified JEE Advanced' },
                { label: 'Logitech Zonal', val: 'Top 1.9%', sub: 'Out of 91,000+ candidates' },
                { label: 'Hackathon Track', val: '5x Finalist', sub: 'VibeWright 4th/250+, Guessapalooza 1st' },
                { label: 'Competitive DSA', val: '200+ Solved', sub: 'Active LeetCode & Codeforces' },
              ].map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>
                    {m.label}
                  </p>
                  <p className="text-base font-extrabold mt-0.5" style={{ color: 'var(--text-1)' }}>
                    {m.val}
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: 'var(--accent-text)' }}>
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Stack Matrix */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-3)' }}>
              Technical Stack Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3.5 rounded-2xl" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <p className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-1)' }}>Languages & Core</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5/CSS3
                </p>
              </div>
              <div className="p-3.5 rounded-2xl" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <p className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-1)' }}>AI & Intelligent Systems</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  PyTorch, Agentic AI, RAG Pipelines, LangGraph, ChromaDB, Weaviate, Ollama/Gemma
                </p>
              </div>
              <div className="p-3.5 rounded-2xl" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <p className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-1)' }}>Full Stack & Systems</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  React, Next.js, Node.js, Express, FastAPI, MongoDB, SQLite, Tailwind CSS, Docker
                </p>
              </div>
            </div>
          </div>

          {/* Highlighted Shipped Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-3)' }}>
              Top 3 Shipped Projects & Impact
            </h3>
            <div className="space-y-2.5">
              {projects.slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  className="p-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold" style={{ color: 'var(--text-1)' }}>{p.title}</p>
                      {p.metric && (
                        <span
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold"
                          style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)' }}
                        >
                          {p.metric}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] mt-1 leading-snug" style={{ color: 'var(--text-2)' }}>
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] px-1.5 py-0.2 rounded" style={{ background: 'var(--surface)', color: 'var(--text-3)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold shrink-0"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-3)' }}>
              Education
            </h3>
            <div className="p-3.5 rounded-2xl space-y-1.5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
              <div className="flex justify-between items-baseline">
                <p className="text-xs font-bold" style={{ color: 'var(--text-1)' }}>
                  Delhi Technological University (DTU) — B.Tech in Computer Science
                </p>
                <span className="text-[11px] font-mono" style={{ color: 'var(--text-3)' }}>2025 – 2029</span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-2)' }}>
                Second-Year (DTU CSE'29) • JEE Main 99.08 Percentile • Qualified JEE Advanced
              </p>
              <p className="text-[11px]" style={{ color: 'var(--text-3)' }}>
                High School: Jaspal Kaur Public School (Class X: 95.8%, Class XII: 89.8% • 2nd in State Mental Math)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
