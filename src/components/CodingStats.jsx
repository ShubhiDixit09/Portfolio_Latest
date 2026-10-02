import React from 'react';
import { LeetCodeIcon, CodeforcesIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { ExternalLink, Terminal } from 'lucide-react';

export default function CodingStats() {
  const platforms = [
    {
      icon: <LeetCodeIcon className="w-5 h-5" />,
      name: 'LeetCode',
      handle: 'shubhi_dixit_09',
      href: personalInfo.leetcode,
      badge: 'Active Solver',
      stats: [
        { label: 'Easy', value: '70+', color: '#22c55e' },
        { label: 'Medium', value: '110+', color: '#f59e0b' },
        { label: 'Hard', value: '20+', color: '#ef4444' },
      ],
      total: '200+',
      totalLabel: 'DSA Problems Solved',
      accentColor: '#f59e0b',
    },
    {
      icon: <CodeforcesIcon className="w-5 h-5" />,
      name: 'Codeforces',
      handle: 'shubhi.dixit.dtu',
      href: personalInfo.codeforces,
      badge: 'Contestant',
      stats: [
        { label: 'Division', value: 'Div. 2/3', color: '#6366f1' },
        { label: 'Contests', value: '12+', color: '#8b5cf6' },
        { label: 'Rank', value: 'Pupil', color: '#06b6d4' },
      ],
      total: 'Active',
      totalLabel: 'Algorithmic Competitor',
      accentColor: '#6366f1',
    }
  ];

  return (
    <section id="coding" className="py-6 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
            <h3 className="text-sm font-bold tracking-tight uppercase" style={{ color: 'var(--accent-text)' }}>
              Competitive Programming & Problem Solving
            </h3>
          </div>
          <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
            200+ Solved
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 no-underline"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = p.accentColor;
                e.currentTarget.style.boxShadow = `0 6px 20px ${p.accentColor}18`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${p.accentColor}15`,
                      color: p.accentColor,
                      border: `1px solid ${p.accentColor}30`
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>{p.name}</h4>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: p.accentColor }} />
                    </div>
                    <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>@{p.handle}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold leading-tight" style={{ color: 'var(--text-1)' }}>{p.total}</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-3)' }}>{p.totalLabel}</div>
                </div>
              </div>

              {/* Stat breakdown */}
              <div className="grid grid-cols-3 gap-2">
                {p.stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-2.5 rounded-xl text-center"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                  >
                    <div className="text-xs sm:text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
