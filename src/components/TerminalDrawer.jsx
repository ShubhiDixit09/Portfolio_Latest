import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, stats, projects, skillCategories } from '../data/portfolioData';
import { showToast } from './Toast';

export default function TerminalDrawer({ themeId, setThemeId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', text: "Shubhi Dixit's Developer Shell v2.4 (DTU CSE)" },
    { type: 'system', text: "Type 'help' to inspect commands or 'exit' to close." },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // Toggle on `~` / `` ` `` key or custom event
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing inside an input/textarea and terminal is closed
      const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      if ((e.key === '`' || e.key === '~') && (!isInput || isOpen)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomToggle = () => setIsOpen(prev => !prev);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-terminal', handleCustomToggle);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-terminal', handleCustomToggle);
    };
  }, [isOpen]);

  // Focus input and scroll to bottom when terminal opens or history updates
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    setCmdHistory(prev => [...prev, raw]);
    setHistoryIndex(-1);

    const [cmd, ...args] = raw.split(' ');
    const normalized = cmd.toLowerCase();

    const newEntries = [{ type: 'command', text: raw }];

    switch (normalized) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `Available Commands:
  whoami / bio     - Developer background & career overview
  skills           - Technical toolkit across AI, Systems, Web
  projects         - Shipped systems, hackathon winners & links
  stats            - Academic & competitive programming metrics
  cat resume       - View resume summary & open PDF
  contact          - Email, phone, LinkedIn, GitHub
  theme <name>     - Set theme (light, dark, ocean, sunset, forest, rose)
  clear            - Clear terminal screen
  exit / close     - Dismiss terminal drawer`
        });
        break;

      case 'whoami':
      case 'bio':
        newEntries.push({
          type: 'output',
          text: `${personalInfo.name} (${personalInfo.pronouns})
${personalInfo.role}
${personalInfo.title}
Status: ${personalInfo.status}
Location: ${personalInfo.location}`
        });
        break;

      case 'skills':
        const skillsText = skillCategories.map(cat => {
          return `${cat.category.toUpperCase()}:\n  ${cat.skills.map(s => `${s.name} (${s.level})`).join(', ')}`;
        }).join('\n\n');
        newEntries.push({ type: 'output', text: skillsText });
        break;

      case 'projects':
        const projText = projects.map(p => {
          return `• ${p.title}\n  Category: ${p.category} | Metric: ${p.metric || 'Shipped'}\n  Stack: ${p.tags.join(', ')}\n  GitHub: ${p.githubUrl}`;
        }).join('\n\n');
        newEntries.push({ type: 'output', text: projText });
        break;

      case 'stats':
        const statsText = stats.map(s => `• ${s.label.padEnd(20)}: ${s.value}`).join('\n');
        newEntries.push({
          type: 'output',
          text: `Key Milestones:\n${statsText}\n• JEE Main            : 99.08 Percentile (Qualified JEE Adv)\n• Class X / XII       : 95.8% / 89.8%`
        });
        break;

      case 'resume':
      case 'cat':
        if (normalized === 'cat' && args[0]?.toLowerCase() !== 'resume' && args[0]?.toLowerCase() !== 'cv') {
          newEntries.push({ type: 'error', text: `cat: ${args[0] || 'missing file'}: No such file or directory. Try 'cat resume'` });
        } else {
          window.open(personalInfo.resumeUrl, '_blank');
          showToast('Opened Shubhi Dixit Resume PDF in new tab');
          newEntries.push({
            type: 'output',
            text: `Opening Resume PDF in browser...\nDirect Link: ${personalInfo.resumeUrl}`
          });
        }
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: `Email    : ${personalInfo.email}
Phone    : ${personalInfo.phone}
GitHub   : ${personalInfo.github}
LinkedIn : ${personalInfo.linkedin}
LeetCode : ${personalInfo.leetcode}`
        });
        break;

      case 'theme':
        const themeChoice = args[0]?.toLowerCase();
        const validThemes = ['light', 'dark', 'ocean', 'sunset', 'forest', 'rose'];
        if (validThemes.includes(themeChoice)) {
          setThemeId(themeChoice);
          showToast(`Switched theme to ${themeChoice}`);
          newEntries.push({ type: 'output', text: `Theme updated to: ${themeChoice}` });
        } else {
          newEntries.push({
            type: 'error',
            text: `Unknown theme "${themeChoice || ''}". Valid options: ${validThemes.join(', ')}`
          });
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        setIsOpen(false);
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `zsh: command not found: ${raw}. Type 'help' for available commands.`
        });
        break;
    }

    setHistory(prev => [...prev, ...newEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['help', 'whoami', 'skills', 'projects', 'stats', 'resume', 'contact', 'theme', 'clear', 'exit'];
      const match = available.find(c => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-[95] flex flex-col transition-all duration-200 font-mono text-xs shadow-2xl ${
        isExpanded ? 'h-[80vh]' : 'h-[360px] sm:h-[400px]'
      }`}
      style={{
        background: 'var(--surface)',
        borderTop: '2px solid var(--accent)',
        color: 'var(--text-1)'
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-4 py-2 select-none shrink-0"
        style={{
          background: 'var(--surface-2)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={() => setIsOpen(false)} title="Close" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block cursor-pointer" onClick={() => setHistory([])} title="Clear" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Expand/Collapse" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-[11px] font-semibold" style={{ color: 'var(--text-2)' }}>
            <TerminalIcon className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
            <span>shubhi@dtu:~ (developer-cli)</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-[10px]" style={{ color: 'var(--text-3)' }}>
            Press <kbd className="px-1 py-0.5 rounded" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>`</kbd> to toggle
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded cursor-pointer hover:opacity-80"
            style={{ color: 'var(--text-2)' }}
            title={isExpanded ? 'Restore' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded cursor-pointer hover:opacity-80"
            style={{ color: 'var(--text-2)' }}
            title="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Output Console */}
      <div
        ref={outputRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 overflow-y-auto space-y-2 select-text"
        style={{
          background: 'var(--bg)',
          color: 'var(--text-1)'
        }}
      >
        {history.map((entry, idx) => {
          if (entry.type === 'system') {
            return (
              <div key={idx} className="text-[11px]" style={{ color: 'var(--text-3)' }}>
                {entry.text}
              </div>
            );
          }
          if (entry.type === 'command') {
            return (
              <div key={idx} className="flex items-center gap-2 font-bold" style={{ color: 'var(--text-1)' }}>
                <span style={{ color: 'var(--accent-text)' }}>shubhi@dtu:~$</span>
                <span>{entry.text}</span>
              </div>
            );
          }
          if (entry.type === 'error') {
            return (
              <div key={idx} className="whitespace-pre-wrap pl-4 border-l-2 border-red-500/50 text-red-400">
                {entry.text}
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="whitespace-pre-wrap pl-4 border-l-2 py-0.5 leading-relaxed"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-2)'
              }}
            >
              {entry.text}
            </div>
          );
        })}

        {/* Current prompt input */}
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold shrink-0" style={{ color: 'var(--accent-text)' }}>shubhi@dtu:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none font-mono text-xs"
            style={{ color: 'var(--text-1)' }}
            placeholder="Type 'help'..."
            autoFocus
          />
          <CornerDownLeft className="w-3 h-3 shrink-0 opacity-40" />
        </div>
      </div>
    </div>
  );
}
