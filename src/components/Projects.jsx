import React, { useState } from 'react';
import { ExternalLink, ChevronRight, ChevronDown, X, Search } from 'lucide-react';
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

function CaseStudyModal({ project, onClose }) {
  const cs = project.caseStudy;

  // Close on Escape key
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between gap-4 px-6 py-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent-text)' }}>
              Case Study
            </p>
            <h2 className="text-base font-bold leading-tight" style={{ color: 'var(--text-1)' }}>
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg transition-colors cursor-pointer"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="overflow-y-auto px-6 py-5 space-y-6" style={{ maxHeight: 'calc(90vh - 70px)' }}>

          {/* Problem */}
          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-3)' }}
            >
              Problem
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {cs.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-3)' }}
            >
              Solution
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {cs.solution}
            </p>
          </div>

          {/* Technical Decisions */}
          {cs.decisions && cs.decisions.length > 0 && (
            <div>
              <h3
                className="text-[11px] font-bold uppercase tracking-wider mb-3"
                style={{ color: 'var(--text-3)' }}
              >
                Key Technical Decisions
              </h3>
              <div className="space-y-2.5">
                {cs.decisions.map((d, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                  >
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-1)' }}>
                      {d.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                      {d.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact */}
          {cs.impact && (
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'var(--accent-muted)', border: '1px solid var(--accent-border)' }}
            >
              <span className="text-base shrink-0">★</span>
              <p className="text-sm font-medium" style={{ color: 'var(--accent-text)' }}>
                {cs.impact}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)', border: '1px solid var(--tag-border)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer links */}
          <div className="flex items-center gap-3 pt-1" style={{ borderTop: '1px solid var(--border)' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-3)'}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
              style={{ color: 'var(--accent-text)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <span>{project.liveLabel || 'Live / Repo'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [expandedArch, setExpandedArch] = useState(null);
  const [caseStudyProject, setCaseStudyProject] = useState(null);
  const [search, setSearch] = useState('');

  // Skill-to-project cross-linking listener
  React.useEffect(() => {
    const handleSkillFilter = (e) => {
      const skillName = e.detail;
      setSearch(skillName);
      setFilter('All');
    };
    window.addEventListener('filter-projects-by-skill', handleSkillFilter);
    return () => window.removeEventListener('filter-projects-by-skill', handleSkillFilter);
  }, []);

  const categories = ['All', 'AI & Full Stack', 'AI & Deep Learning', 'Distributed Systems', 'Full Stack & Algorithms'];

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const q = search.toLowerCase();
    const matchesSearch = !q || [p.title, p.description, ...p.tags, p.category]
      .some((s) => s.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
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
                onClick={() => { setFilter(cat); setSearch(''); }}
                className="px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer"
                style={filter === cat && !search
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

        {/* Search Bar & Active Skill Pill */}
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
            style={{ color: 'var(--text-3)' }}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, tech, or click any skill badge above…"
            className="w-full pl-9 pr-9 py-2 rounded-xl text-sm outline-none transition-colors"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-1)',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Active Filter Helper Alert */}
        {search && (
          <div
            className="flex items-center justify-between px-3.5 py-2 rounded-xl mb-6 text-xs"
            style={{
              background: 'var(--accent-muted)',
              border: '1px solid var(--accent-border)',
              color: 'var(--accent-text)'
            }}
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold">Filtered by:</span>
              <span className="px-2 py-0.5 rounded-md font-bold" style={{ background: 'var(--surface)', color: 'var(--text-1)' }}>
                {search}
              </span>
              <span className="text-[11px] opacity-80">({filtered.length} matching project{filtered.length === 1 ? '' : 's'})</span>
            </div>
            <button
              onClick={() => setSearch('')}
              className="font-bold underline cursor-pointer hover:opacity-80 ml-2"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 && (
            <p className="col-span-3 text-center py-10 text-sm" style={{ color: 'var(--text-3)' }}>
              No projects match your search.
            </p>
          )}
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
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
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
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-text)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-3)'}>
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      <div className="flex items-center gap-3">
                        {item.caseStudy && (
                          <button
                            onClick={() => setCaseStudyProject(item)}
                            className="inline-flex items-center gap-1 font-medium text-xs transition-colors cursor-pointer"
                            style={{ color: 'var(--text-3)', background: 'transparent', border: 'none', padding: 0 }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-text)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-3)'}
                          >
                            Case Study
                          </button>
                        )}
                        <a href={item.liveUrl} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 font-semibold transition-colors"
                          style={{ color: 'var(--accent-text)' }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                          <span>{item.liveLabel || (item.id === 'oon-nirnay' ? 'Link' : 'Repo')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {caseStudyProject && (
        <CaseStudyModal
          project={caseStudyProject}
          onClose={() => setCaseStudyProject(null)}
        />
      )}
    </section>
  );
}
