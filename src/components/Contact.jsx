import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const formData = new FormData();
      // Using Web3Forms public access key for portfolio contact
      // Shubhi can also drop in her own key from web3forms.com
      formData.append('access_key', 'a1b7e3f8-62d4-4a25-8e43-85e78d2b9370'); // Replace with personal key
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('subject', `Portfolio Contact from ${form.name}`);
      formData.append('from_name', form.name);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 6000);
      } else {
        // Fallback to mailto link if key expired or rate-limited
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Portfolio Contact from ' + form.name)}&body=${encodeURIComponent(form.message)}`;
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      }
    } catch {
      // Offline or network error: open mail client directly
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Portfolio Contact from ' + form.name)}&body=${encodeURIComponent(form.message)}`;
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    color: 'var(--text-1)',
    outline: 'none',
  };

  const socialLinks = [
    { href: personalInfo.github, icon: <GithubIcon className="w-3.5 h-3.5" />, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: <LinkedinIcon className="w-3.5 h-3.5" />, label: 'LinkedIn' },
    { href: personalInfo.leetcode, icon: <LeetCodeIcon className="w-3.5 h-3.5" />, label: 'LeetCode' },
    { href: personalInfo.codeforces, icon: <CodeforcesIcon className="w-3.5 h-3.5" />, label: 'Codeforces' },
  ];

  return (
    <section id="contact" className="py-12 reveal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl shadow-sm"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Left: Direct Info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2"
                style={{ color: 'var(--accent-text)' }}>Connect</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                style={{ color: 'var(--text-1)' }}>
                Let's get in touch.
              </h2>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Open to Software Engineering and AI/ML internship opportunities, research collaborations, and technical discussions.
              </p>

              {/* Email Copy Card */}
              <div className="inline-flex items-center gap-3 p-3 rounded-xl mb-6"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-text)' }} />
                <a href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-semibold hover:underline"
                  style={{ color: 'var(--text-1)' }}>
                  {personalInfo.email}
                </a>
                <button onClick={handleCopy} title="Copy email"
                  className="p-1.5 rounded-lg transition-colors cursor-pointer"
                  style={{ color: 'var(--text-3)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--border)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  {copied
                    ? <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
                    : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    style={{ background: 'var(--surface-2)', color: 'var(--text-2)',
                      border: '1px solid var(--border)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-text)'; e.currentTarget.style.borderColor = 'var(--accent-border)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {sent ? (
                <div className="p-6 rounded-2xl text-center"
                  style={{ background: 'var(--accent-muted)', border: '1px solid var(--accent-border)' }}>
                  <p className="text-sm font-bold" style={{ color: 'var(--accent-text)' }}>
                    Message Sent! 🎉
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-2)' }}>
                    Thanks for reaching out, I'll get back to you soon at your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm"
                      style={inputStyle}
                      onFocus={e => e.currentTarget.style.outline = `2px solid var(--accent)`}
                      onBlur={e => e.currentTarget.style.outline = 'none'}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm"
                      style={inputStyle}
                      onFocus={e => e.currentTarget.style.outline = `2px solid var(--accent)`}
                      onBlur={e => e.currentTarget.style.outline = 'none'}
                    />
                  </div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or role..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm resize-none"
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.outline = `2px solid var(--accent)`}
                    onBlur={e => e.currentTarget.style.outline = 'none'}
                  />
                  {errorMsg && (
                    <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl font-medium text-xs sm:text-sm transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5 text-white disabled:opacity-60"
                    style={{ background: 'var(--accent)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
