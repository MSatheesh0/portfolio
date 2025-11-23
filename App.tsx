// App.tsx
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  // Robust hash scrolling:
  // - Ignore hash routes used by the router (e.g. "#/project/...")
  // - Retry a few times if the target element isn't mounted yet
  useEffect(() => {
    const scrollToHash = () => {
      const rawHash = window.location.hash; // e.g. "#projects" or "#/project/abc"
      if (!rawHash) return;

      // If this looks like a router route for project detail (HashRouter puts route after #/)
      // don't treat it as an in-page anchor. Let the router handle project detail pages.
      if (rawHash.startsWith('#/')) {
        // common route pattern: "#/project/..."
        // skip scrolling for route hashes
        return;
      }

      // Convert "#projects" -> "#projects" (we query selector with the hash)
      const hashSelector = rawHash;

      const tryScroll = (): boolean => {
        try {
          const el = document.querySelector(hashSelector);
          if (el) {
            // If header is fixed and you want offset you can handle here (optional).
            el.scrollIntoView({ behavior: 'smooth' });
            return true;
          }
        } catch (err) {
          // ignore invalid selector errors
        }
        return false;
      };

      // Try immediate
      if (tryScroll()) return;

      // Otherwise retry for up to ~2 seconds (10 attempts x 200ms)
      let attempts = 0;
      const maxAttempts = 10;
      const interval = 200;
      const iv = window.setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts >= maxAttempts) {
          clearInterval(iv);
        }
      }, interval);
    };

    // Run at initial load
    scrollToHash();

    // Run when the hash changes (e.g. clicking internal anchor links)
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <HashRouter>
      <div className={`app-container ${theme}`}>
        <Header currentTheme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
