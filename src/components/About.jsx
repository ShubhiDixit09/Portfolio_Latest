import React from 'react';

export default function About() {
  const cards = [
    {
      num: "01",
      heading: "AI, Agents & Reasoning",
      content: "RAG, tool-using agents, temporal knowledge systems, grounded generation, and on-device LLM experiments."
    },
    {
      num: "02",
      heading: "Systems & Optimization",
      content: "Distributed meshes, partition-tolerant coordination, spatial algorithms, and combinatorial optimization."
    },
    {
      num: "03",
      heading: "Research & Engineering",
      content: "Building and evaluating experimental systems across multimodal reasoning, decision support, and trustworthy AI."
    },
    {
      num: "04",
      heading: "Building & Problem Solving",
      content: "Developer @ DTU Times · competitive programming · 5× hackathon finalist · research-driven prototyping."
    }
  ];

  return (
    <section id="about" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-5"
          style={{ color: 'var(--text-1)' }}
        >
          Background & Focus
        </h2>

        {/* Narrative text with exact bolding */}
        <div className="space-y-4 max-w-4xl mb-8 leading-relaxed text-sm sm:text-base">
          {/* Paragraph 1 - Entirely bold */}
          <p
            className="font-bold text-base sm:text-lg"
            style={{ color: 'var(--text-1)' }}
          >
            I’m a Computer Science student at Delhi Technological University, building systems at the intersection of AI, algorithms, and real-world decision-making.
          </p>

          {/* Paragraph 2 - Normal text */}
          <p style={{ color: 'var(--text-2)' }}>
            My work spans agentic AI, retrieval and reasoning systems, distributed coordination, and optimization — from evidence-grounded legal AI and temporal knowledge systems to disaster-response meshes and geospatial decision platforms.
          </p>

          {/* Paragraph 3 - Normal text */}
          <p style={{ color: 'var(--text-2)' }}>
            I currently build products at DTU Times, experiment with ML/LLM systems and research prototypes, and solve algorithmic problems on LeetCode and Codeforces. I was also selected for McKinsey Forward ’26.
          </p>
        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.num}
              className="p-5 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <span
                  className="text-xs font-mono font-bold block mb-2"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {card.num}
                </span>
                <h3
                  className="text-sm font-bold mb-2 leading-snug"
                  style={{ color: 'var(--text-1)' }}
                >
                  {card.heading}
                </h3>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--text-3)' }}
              >
                {card.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
