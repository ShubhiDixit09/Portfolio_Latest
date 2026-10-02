import React from 'react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider block mb-2"
          style={{ color: 'var(--accent-text)' }}>Experience</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
          style={{ color: 'var(--text-1)' }}>
          Roles & Involvement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experience.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl flex flex-col justify-between"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div>
                {/* Type badge + Period */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold"
                    style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)',
                      border: '1px solid var(--accent-border)' }}>
                    {item.type}
                  </span>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base font-bold mb-1" style={{ color: 'var(--text-1)' }}>
                  {item.title}
                </h3>
                <p className="text-xs font-semibold mb-2.5" style={{ color: 'var(--accent-text)' }}>
                  {item.organization}
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  {item.desc}
                </p>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1 pt-3"
                style={{ borderTop: '1px solid var(--border)' }}>
                {item.skills.map((skill) => (
                  <span key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)',
                      border: '1px solid var(--tag-border)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
