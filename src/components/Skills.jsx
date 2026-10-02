import React, { useState } from 'react';
import {
  Code, Code2, FileCode, Terminal, Cpu, Database, Layout, Palette, Globe,
  Sparkles, Server, Workflow, HardDrive, Zap, GitBranch, Container, Send, Wrench,
  Layers, BrainCircuit, Box, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2, FileCode, Terminal, Cpu, Database, Layout, Palette, Globe,
  Sparkles, Server, Workflow, HardDrive, Zap, GitBranch, Container, Send, Wrench,
  Layers, BrainCircuit, Box
};

const categoryIcons = {
  "Languages": Code2,
  "AI, ML & Agentic Systems": Sparkles,
  "Full Stack & Systems": Layout,
  "Tools & DevOps": Wrench
};

function SkillIcon({ name, className, style }) {
  const Icon = iconMap[name] || Code;
  return <Icon className={className} style={style} />;
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2.5"
              style={{
                background: 'var(--accent-muted)',
                color: 'var(--accent-text)',
                border: '1px solid var(--accent-border)'
              }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: 'var(--text-1)' }}>
              Technical Toolkit
            </h2>
          </div>
          <p className="text-xs sm:text-sm max-w-sm leading-relaxed"
            style={{ color: 'var(--text-2)' }}>
            Core toolkit spanning algorithmic problem solving, modern web platforms, and agentic AI systems.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {skillCategories.map((group) => {
            const CategoryIcon = categoryIcons[group.category] || Layers;

            return (
              <div
                key={group.category}
                className="group/card rounded-2xl p-5 sm:p-6 transition-all duration-300 relative flex flex-col"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                {/* Subtle card top accent line on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, var(--accent), transparent)`
                  }}
                />

                {/* Card Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover/card:scale-105 duration-200 shrink-0"
                    style={{
                      background: 'var(--accent-muted)',
                      color: 'var(--accent-text)',
                      border: '1px solid var(--accent-border)'
                    }}
                  >
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-base font-bold tracking-tight"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Snug, Tactile Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/item inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 cursor-default select-none relative"
                        style={{
                          background: isHovered ? 'var(--surface)' : 'var(--surface-2)',
                          border: `1px solid ${isHovered ? 'var(--accent)' : 'var(--border)'}`,
                          transform: isHovered ? 'translateY(-1.5px)' : 'none',
                          boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.06)' : 'none'
                        }}
                      >
                        {/* Icon badge */}
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                          style={{
                            background: isHovered ? 'var(--accent-muted)' : 'var(--surface)',
                            border: `1px solid ${isHovered ? 'var(--accent-border)' : 'var(--border)'}`,
                          }}
                        >
                          <SkillIcon
                            name={skill.icon}
                            className="w-3.5 h-3.5 transition-transform group-hover/item:scale-110 duration-200"
                            style={{ color: 'var(--accent-text)' }}
                          />
                        </div>

                        {/* Skill Name */}
                        <span
                          className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap"
                          style={{ color: 'var(--text-1)' }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
