import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

let toastListeners = [];

export function showToast(message, type = 'success') {
  toastListeners.forEach(listener => listener({ message, type, id: Date.now() }));
}

export default function Toast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleNewToast = (toast) => {
      setToasts(prev => [...prev.slice(-2), toast]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, 3000);
    };

    toastListeners.push(handleNewToast);
    return () => {
      toastListeners = toastListeners.filter(l => l !== handleNewToast);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] flex flex-col gap-2 items-center pointer-events-none">
      {toasts.map(t => (
        <div
          key={t.id}
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-3 duration-200"
          style={{
            background: 'var(--surface)',
            color: 'var(--text-1)',
            border: '1px solid var(--accent-border)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
          }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)' }}
          >
            <Check className="w-3 h-3 stroke-[2.5]" />
          </div>
          <span>{t.message}</span>
          <button
            onClick={() => setToasts(prev => prev.filter(item => item.id !== t.id))}
            className="ml-1 p-0.5 rounded cursor-pointer opacity-60 hover:opacity-100"
            style={{ color: 'var(--text-3)' }}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
