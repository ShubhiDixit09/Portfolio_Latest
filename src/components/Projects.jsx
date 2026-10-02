import React, { useState } from 'react';
import { ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

function ArchStrip({ steps }) {
  return (
    <div
      className="flex flex-wrap items-center gap-1 p-3 rounded-xl mt-3"
      style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
    >
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <span
            className="text-[10px] font-medium px-2 py-1 rounded-lg"
            style={{ background: 'var(--surface)', color: 'var(--text-2)', border: '1px solid var(--border)' }}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight className="w-3 h-3 shrink-0" style={{ color: 'var(--text-3)' }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [expandedArch, setExpandedArch] = useState(null);
  const categories = ['All', 'AI & Full Stack', 'AI & Deep Learning', 'Distributed Systems', 'Full Stack & Algorithms'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header + Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider block mb-2"
              style={{ color: 'var(--accent-text)' }}>Work</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: 'var(--text-1)' }}>Featured Projects</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer"
                style={filter === cat
                  ? { background: 'var(--surface)', color: 'var(--accent-text)', fontWeight: 700,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }
                  : { color: 'var(--text-3)' }
                }
              >
                {cat === 'All' ? 'All' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => {
            const archOpen = expandedArch === item.id;
            return (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden"
                  style={{ background: 'var(--surface-2)' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-sm"
                      style={{ background: 'var(--surface)', color: 'var(--text-1)',
                        border: '1px solid var(--border)', opacity: 0.95 }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold mb-1.5 leading-snug" style={{ color: 'var(--text-1)' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: 'var(--text-2)' }}>
                      {item.description}
                    </p>

                    {item.metric && (
                      <div className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold mb-3"
                        style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)',
                          border: '1px solid var(--accent-border)' }}>
                        ★ {item.metric}
                      </div>
                    )}

                    {/* Architecture Strip (expandable) */}
                    {item.architecture && (
                      <>
                        <button
                          onClick={() => setExpandedArch(archOpen ? null : item.id)}
                          className="inline-flex items-center gap-1 text-[11px] font-medium mb-1 transition-colors"
                          style={{ color: archOpen ? 'var(--accent-text)' : 'var(--text-3)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          {archOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                          Pipeline
                        </button>
                        {archOpen && <ArchStrip steps={item.architecture} />}
                      </>
                    )}
                  </div>

                  <div className="mt-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                          style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)',
                            border: '1px solid var(--tag-border)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 text-xs"
                      style={{ borderTop: '1px solid var(--border)' }}>
                      <a href={item.githubUrl} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium transition-colors"
                        style={{ color: 'var(--text-3)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-text)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                      <a href={item.liveUrl} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold transition-colors"
                        style={{ color: 'var(--accent-text)' }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                        <span>{item.liveLabel || (item.id === 'oon-nirnay' ? 'Link' : 'Repo')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
