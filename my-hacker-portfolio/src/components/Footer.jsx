import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate visitor count
  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 9000) + 1000);
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + 1);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: 'GH', icon: '⎇', url: '#' },
    { name: 'LI', icon: '⌗', url: '#' },
    { name: 'TG', icon: '⌘', url: '#' },
    { name: 'DC', icon: '⌨', url: '#' }
  ];

  return (
    <footer className="hacker-footer">
      {/* Top Border with Glow */}
      <div className="footer-border"></div>
      
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="brand-logo">
            <span className="logo-bracket">[</span>
            <span className="logo-text">H4CK3R</span>
            <span className="logo-bracket">]</span>
            <span className="logo-cursor">_</span>
          </div>
          <div className="brand-tagline">
            <span className="tagline-prompt">></span>
            <span className="tagline-text">secure / enhance / protect</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#home" className="footer-link">[HOME]</a>
          <a href="#about" className="footer-link">[ABOUT]</a>
          <a href="#projects" className="footer-link">[PROJECTS]</a>
          <a href="#contact" className="footer-link">[CONTACT]</a>
        </div>

        {/* System Info */}
        <div className="footer-system">
          <div className="system-item">
            <span className="item-label">TIME</span>
            <span className="item-value">{currentTime}</span>
          </div>
          <div className="system-item">
            <span className="item-label">VISITORS</span>
            <span className="item-value">{visitorCount}</span>
          </div>
          <div className="system-item">
            <span className="item-label">STATUS</span>
            <span className="item-value status-online">ONLINE</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} className="social-link">
              <span className="social-icon">{social.icon}</span>
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <span className="copyright">
            <span className="copy-symbol">©</span>
            2024 H4CK3R SYSTEMS // ALL RIGHTS RESERVED
          </span>
          <span className="version">
            <span className="version-bracket">[</span>
            v2.4.2.0
            <span className="version-bracket">]</span>
          </span>
          <span className="encryption">
            <span className="encrypt-dot"></span>
            AES-256
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;