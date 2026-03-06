import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const [bootSequence, setBootSequence] = useState(true);
  
  const navLinks = [
    { name: 'Home', path: '#home', command: '--init' },
    { name: 'About', path: '#about', command: '--profile' },
    { name: 'Projects', path: '#projects', command: '--execute' },
    { name: 'Skills', path: '#skills', command: '--scan' },
    { name: 'Contact', path: '#contact', command: '--connect' }
  ];

  // Boot sequence
  useEffect(() => {
    setTimeout(() => {
      setBootSequence(false);
    }, 3000);
  }, []);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {bootSequence && (
        <div className="boot-sequence">
          <div className="boot-content">
            <pre className="boot-ascii">
              {`
    ╔══════════════════════════════════════╗
    ║     INITIALIZING HACKER SYSTEM      ║
    ║        VERSION 2.0.4.2.0.0.1        ║
    ╚══════════════════════════════════════╝
              `}
            </pre>
            <div className="boot-progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-text">LOADING MODULES...</div>
            </div>
            <div className="boot-details">
              <span className="boot-detail">> KERNEL: 5.4.0-H4CK3R</span>
              <span className="boot-detail">> SECURITY: AES-256</span>
              <span className="boot-detail">> STATUS: SECURE</span>
            </div>
          </div>
        </div>
      )}

      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Simple Logo - No Rotation */}
          <div className="nav-logo">
            <a href="#home" className="logo-link">
              <span className="logo-bracket">[</span>
              <span className="logo-text">H4CK3R</span>
              <span className="logo-bracket">]</span>
              <span className="logo-cursor">_</span>
            </a>
            <div className="logo-status">
              <span className="status-dot"></span>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`nav-menu ${isActive ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.path} className="nav-link">
                <span className="link-prompt">$</span>
                <span className="link-name">{link.name}</span>
                <span className="link-command">{link.command}</span>
              </a>
            ))}
          </div>

          {/* System Info */}
          <div className="nav-system">
            <div className="system-time">
              <span className="time-icon">🕒</span>
              <span className="time-value">{time}</span>
            </div>
            <div className="system-status">
              <span className="status-led"></span>
              <span className="status-text">ROOT</span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;