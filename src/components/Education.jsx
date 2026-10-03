import React, { useState } from 'react';
import { Award, X, ZoomIn, ArrowUpRight } from 'lucide-react';
import { education, achievements, certifications } from '../data/portfolioData';

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="mb-8">
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-1.5"
            style={{ color: 'var(--accent-text)' }}
          >
            Credentials
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-1)' }}
          >
            Education & Honors
          </h2>
        </div>

        {/* 2-Column Grid: Education & Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-start">

          {/* Left Column: Academic Background (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: 'var(--text-3)' }}
            >
              Academic Background
            </h3>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl transition-colors"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4
                    className="text-base font-bold leading-snug"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {edu.degree}
                  </h4>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: 'var(--text-3)' }}
                  >
                    {edu.period}
                  </span>
                </div>

                <p
                  className="text-xs font-semibold mb-2.5"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {edu.institution}
                </p>

                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-2)' }}
                >
                  <span className="font-semibold mr-1.5" style={{ color: 'var(--text-1)' }}>
                    {edu.score}
                  </span>
                  <span>• {edu.detail}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Honors & Milestones (7 cols) - Clean structured list */}
          <div className="lg:col-span-7">
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: 'var(--text-3)' }}
            >
              Honors & Milestones
            </h3>

            <div
              className="rounded-2xl divide-y overflow-hidden"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderColor: 'var(--border)'
              }}
            >
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:px-5 sm:py-3.5 transition-colors hover:bg-[var(--surface-2)]"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <h5
                    className="text-sm font-bold leading-tight"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: 'var(--text-3)' }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Previews Gallery */}
        <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3
              className="text-sm font-bold uppercase tracking-wider flex items-center gap-2"
              style={{ color: 'var(--text-1)' }}
            >
              <Award className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
              <span>Verified Certificate Previews</span>
            </h3>
            <span className="text-xs" style={{ color: 'var(--text-3)' }}>
              Click to view full certificate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer p-2 rounded-xl flex flex-col justify-between transition-all"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2"
                  style={{ background: 'var(--surface-2)' }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.3)' }}
                  >
                    <ZoomIn className="w-4 h-4 text-white drop-shadow-md" />
                  </div>
                </div>

                <div>
                  <h4
                    className="text-[11px] font-bold leading-tight line-clamp-2 mb-0.5"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className="text-[10px] truncate"
                    style={{ color: 'var(--text-3)' }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal Lightbox */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className="px-5 py-4 flex items-start justify-between gap-4 shrink-0"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <div>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: 'var(--text-1)' }}>
                    {selectedCert.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                    {selectedCert.issuer}
                    {selectedCert.date ? ` · ${selectedCert.date}` : ''}
                  </p>
                  {selectedCert.highlight && (
                    <p className="text-[11px] font-medium mt-1.5 px-2 py-0.5 rounded-md inline-block"
                      style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)', border: '1px solid var(--accent-border)' }}>
                      ★ {selectedCert.highlight}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="shrink-0 p-1.5 rounded-lg transition-colors cursor-pointer"
                  style={{ color: 'var(--text-3)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div
                className="flex-1 flex items-center justify-center p-4 overflow-auto"
                style={{ background: 'var(--surface-2)' }}
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-h-[60vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Modal Footer */}
              {selectedCert.verifyUrl && (
                <div
                  className="px-5 py-3 shrink-0 flex items-center justify-end"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: 'var(--accent-text)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <span>Verify Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
