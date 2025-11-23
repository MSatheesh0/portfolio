import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  currentTheme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentTheme, toggleTheme }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Scroll detection + active section highlight
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Hide header on scroll down
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll = currentScroll;

      // Active section indicator
      let current = '';
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section instanceof HTMLElement &&
          window.scrollY >= section.offsetTop - 120
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for in-page links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`Header_header ${isHidden ? 'Header_header--hidden' : ''}`}>
      <nav className="Header_nav">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`Header_navLink ${
              activeSection === link.href.substring(1)
                ? 'Header_navLink--active'
                : ''
            }`}
          >
            {link.label}
          </a>
        ))}

        <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </nav>
    </header>
  );
};

export default Header;
