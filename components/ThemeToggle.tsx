'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
      aria-label="Toggle dark mode"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
