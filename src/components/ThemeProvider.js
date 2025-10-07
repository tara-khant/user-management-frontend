import React, { useState, useEffect } from 'react';

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return <div className={`${dark ? 'dark' : ''}`}>{children}</div>;
};
