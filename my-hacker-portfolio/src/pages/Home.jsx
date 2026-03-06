import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [glitchText, setGlitchText] = useState('');
  const [hackerLevel, setHackerLevel] = useState(0);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: '>> Terminal v2.0 initialized' },
    { type: 'system', content: '>> Type "help" for available commands' },
    { type: 'system', content: '>> Ready for input...' }
  ]);
  
  const canvasRef = useRef(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const fullText = "> SYSTEM ACCESS: GRANTED_";
  const [typingText, setTypingText] = useState('');
  const [scanLine, setScanLine] = useState(0);

  const stats = [
    { label: "FIREWALL", value: "ACTIVE", status: "secure" },
    { label: "ENCRYPTION", value: "AES-256", status: "secure" },
    { label: "NETWORK", value: "TOR ACTIVE", status: "secure" },
    { label: "INTRUSIONS", value: "0", status: "warning" }
  ];

  const skills = [
    { name: "KALI LINUX", level: 95 },
    { name: "PYTHON", level: 90 },
    { name: "NETWORK SECURITY", level: 85 },
    { name: "CRYPTOGRAPHY", level: 80 },
    { name: "METASPLOIT", level: 75 },
    { name: "BASH SCRIPTING", level: 88 }
  ];

  // Terminal Commands
  const commands = {
    help: () => ({
      type: 'output',
      content: [
        'Available commands:',
        '  help     - Show this help message',
        '  clear    - Clear terminal',
        '  whoami   - Display current user',
        '  ls       - List directories',
        '  pwd      - Print working directory',
        '  date     - Show system date',
        '  uptime   - Show system uptime',
        '  ifconfig - Show network config',
        '  ps       - Show processes',
        '  scan     - Run network scan',
        '  crack    - Attempt password crack',
        '  hack     - Execute hack sequence',
        '  matrix   - Enter the matrix',
        '  about    - About this system'
      ].join('\n')
    }),
    
    clear: () => ({
      type: 'clear',
      content: ''
    }),
    
    whoami: () => ({
      type: 'output',
      content: 'root@hack3r'
    }),
    
    ls: () => ({
      type: 'output',
      content: [
        'Documents/',
        'Downloads/',
        'Projects/',
        'Tools/',
        'README.md',
        'config.sh',
        'secret.key'
      ].join('  ')
    }),
    
    pwd: () => ({
      type: 'output',
      content: '/root/hack3r/system'
    }),
    
    date: () => ({
      type: 'output',
      content: new Date().toString()
    }),
    
    uptime: () => ({
      type: 'output',
      content: `System uptime: ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`
    }),
    
    ifconfig: () => ({
      type: 'output',
      content: [
        'eth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500',
        '      inet 192.168.1.${Math.floor(Math.random() * 255)}  netmask 255.255.255.0',
        '      inet6 fe80::${Math.floor(Math.random() * 9999)}  prefixlen 64',
        '      ether 00:1a:2b:3c:4d:5e  txqueuelen 1000'
      ].join('\n')
    }),
    
    ps: () => ({
      type: 'output',
      content: [
        'PID   USER     COMMAND',
        '1     root     init',
        '42    root     terminal',
        '56    root     firewall',
        '78    root     encryption',
        '99    root     monitoring'
      ].join('\n')
    }),
    
    scan: () => ({
      type: 'process',
      content: 'Scanning network...',
      process: true
    }),
    
    crack: () => ({
      type: 'process',
      content: 'Cracking password hash...',
      process: true
    }),
    
    hack: () => ({
      type: 'process',
      content: 'Initializing hack sequence...',
      process: true
    }),
    
    matrix: () => ({
      type: 'output',
      content: 'Wake up, Neo... The Matrix has you...'
    }),
    
    about: () => ({
      type: 'output',
      content: [
        '╔════════════════════════════════╗',
        '║     H4CK3R SYSTEM v2.4.2       ║',
        '║  Advanced Security Framework   ║',
        '║  Created by: Root Access       ║',
        '║  Status: Elite Hacker          ║',
        '╚════════════════════════════════╝'
      ].join('\n')
    })
  };

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const chars = matrix.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 35);
    return () => clearInterval(interval);
  }, []);

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setTypingText('');
          i = 0;
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  // Glitch Effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = '!<>-_\\/[]{}—=+*^?#@$%';
      let result = '';
      for (let i = 0; i < 3; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitchText(result);
    }, 200);

    return () => clearInterval(glitchInterval);
  }, []);

  // Scan Line Animation
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(scanInterval);
  }, []);

  // Hacker Level Animation
  useEffect(() => {
    const levelInterval = setInterval(() => {
      setHackerLevel(Math.floor(Math.random() * 30) + 70);
    }, 2000);
    return () => clearInterval(levelInterval);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleTerminalInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(terminalInput);
      setTerminalInput('');
    }
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add user input to history
    setTerminalHistory(prev => [...prev, { type: 'input', content: `root@hack3r:~$ ${cmd}` }]);
    
    if (trimmedCmd === '') {
      return;
    }

    const command = commands[trimmedCmd];
    
    if (command) {
      const result = command();
      
      if (result.type === 'clear') {
        setTerminalHistory([]);
      } else if (result.process) {
        // Simulate process
        setTerminalHistory(prev => [...prev, { type: 'output', content: result.content }]);
        
        setTimeout(() => {
          const outcomes = [
            '✓ Scan complete: 3 vulnerabilities found',
            '✓ Crack successful: password: admin123',
            '⚠ Access denied: firewall detected',
            '✓ Connection established',
            '⚠ Intrusion detected: tracing...',
            '✓ Hack sequence complete: root access granted'
          ];
          const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
          setTerminalHistory(prev => [...prev, { type: 'output', content: randomOutcome }]);
        }, 2000);
      } else {
        setTerminalHistory(prev => [...prev, { type: 'output', content: result.content }]);
      }
    } else {
      setTerminalHistory(prev => [...prev, { type: 'error', content: `Command not found: ${cmd}. Type 'help' for available commands.` }]);
    }
  };

  return (
    <div className="home-container">
      {/* Matrix Canvas Background */}
      <canvas ref={canvasRef} className="matrix-canvas" />
      
      {/* Scan Line Overlay */}
      <div className="scan-line" style={{ top: `${scanLine}%` }} />
      
      {/* Glitch Overlay */}
      <div className="glitch-overlay" />
      
      {/* Main Content */}
      <div className="content-wrapper">
        {/* Header Section */}
        <header className="header">
          <div className="header-top">
            <div className="system-info">
              <div className="info-item">
                <span className="info-label">STATUS:</span>
                <span className="info-value online">ONLINE</span>
              </div>
              <div className="info-item">
                <span className="info-label">HACKER LEVEL:</span>
                <span className="info-value">{hackerLevel}%</span>
              </div>
              <div className="info-item">
                <span className="info-label">ENCRYPTION:</span>
                <span className="info-value">ACTIVE</span>
              </div>
            </div>
            
            <div className="header-right">
              <div className="terminal-line">
                <span className="prompt">root@hack3r:~$</span>
                <span className="typing-text">{typingText}</span>
                <span className="cursor">_</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">CYBER SECURITY EXPERT</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-bracket">{"{"}</span>
              <span className="title-main">GH0ST_F4RH4N</span>
              <span className="title-bracket">{"}"}</span>
              <span className="title-glitch">{glitchText}</span>
            </h1>
            
            <p className="hero-description">
              &gt; Ethical Hacker | Security Researcher | Digital Phantom
              <span className="cursor-blink">_</span>
            </p>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-label">{stat.label}</span>
                  <span className={`stat-value ${stat.status}`}>{stat.value}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <span className="btn-text">INITIATE CONTACT</span>
                <span className="btn-glitch"></span>
              </a>
              <a href="#projects" className="btn-secondary">
                <span className="btn-text">VIEW PROJECTS</span>
                <span className="btn-bracket">{'>'}</span>
              </a>
            </div>
          </div>
          
          {/* Working Terminal */}
          <div className="hero-terminal">
            <div className="terminal-header">
              <span className="terminal-title">TERMINAL v2.0 [WORKING]</span>
              <span className="terminal-controls">
                <span className="control">─</span>
                <span className="control">□</span>
                <span className="control" onClick={() => setTerminalHistory([])}>✕</span>
              </span>
            </div>
            <div className="terminal-body" ref={terminalRef}>
              <div className="terminal-output">
                {terminalHistory.map((item, index) => (
                  <div key={index} className={`terminal-line ${item.type}`}>
                    {item.type === 'input' && (
                      <>
                        <span className="prompt">$</span>
                        <span className="command">{item.content}</span>
                      </>
                    )}
                    {item.type === 'output' && (
                      <span className="output">{item.content}</span>
                    )}
                    {item.type === 'error' && (
                      <span className="error">{item.content}</span>
                    )}
                    {item.type === 'system' && (
                      <span className="system">{item.content}</span>
                    )}
                  </div>
                ))}
                <div className="terminal-input-line">
                  <span className="prompt">root@hack3r:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    className="terminal-input"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalInput}
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">
            <span className="title-prefix">[</span>
            SYSTEM_CAPABILITIES
            <span className="title-suffix">]</span>
          </h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-fill" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="skill-glitch"></div>
                  </div>
                </div>
                <div className="skill-binary">
                  {Array.from({ length: 8 }, (_, i) => (
                    <span key={i} className="binary-digit">
                      {Math.round(Math.random())}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="projects-section">
          <h2 className="section-title">
            <span className="title-prefix">[</span>
            ACTIVE_PROJECTS
            <span className="title-suffix">]</span>
          </h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <span className="project-status">● LIVE</span>
                <span className="project-type">PENETRATION</span>
              </div>
              <h3 className="project-name">DarkNet Scanner</h3>
              <p className="project-description">
                Advanced network scanning tool with AI-powered vulnerability detection
              </p>
              <div className="project-tags">
                <span className="tag">PYTHON</span>
                <span className="tag">AI</span>
                <span className="tag">NETWORK</span>
              </div>
              <div className="project-stats">
                <span className="stat">↑ 2.4k</span>
                <span className="stat">↓ 1.2k</span>
              </div>
              <div className="project-overlay"></div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-status">● LIVE</span>
                <span className="project-type">CRYPTO</span>
              </div>
              <h3 className="project-name">Quantum Cipher</h3>
              <p className="project-description">
                Post-quantum encryption algorithm with quantum-resistant protocols
              </p>
              <div className="project-tags">
                <span className="tag">RUST</span>
                <span className="tag">CRYPTO</span>
                <span className="tag">QUANTUM</span>
              </div>
              <div className="project-stats">
                <span className="stat">↑ 3.1k</span>
                <span className="stat">↓ 2.8k</span>
              </div>
              <div className="project-overlay"></div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-status">● BETA</span>
                <span className="project-type">FORENSICS</span>
              </div>
              <h3 className="project-name">Ghost Protocol</h3>
              <p className="project-description">
                Digital forensics framework for anonymous investigation
              </p>
              <div className="project-tags">
                <span className="tag">FORENSICS</span>
                <span className="tag">ANALYSIS</span>
                <span className="tag">SECURE</span>
              </div>
              <div className="project-stats">
                <span className="stat">↑ 1.8k</span>
                <span className="stat">↓ 0.9k</span>
              </div>
              <div className="project-overlay"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item-large">
            <span className="stat-number">157+</span>
            <span className="stat-label">Vulnerabilities Found</span>
          </div>
          <div className="stat-item-large">
            <span className="stat-number">43</span>
            <span className="stat-label">Security Tools</span>
          </div>
          <div className="stat-item-large">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-item-large">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Monitoring</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <span className="copyright">© 2024 // H4CK3R_SYSTEM</span>
            <span className="version">v2.4.2.0.1</span>
          </div>
          <div className="footer-right">
            <a href="#" className="social-link">[GH]</a>
            <a href="#" className="social-link">[LI]</a>
            <a href="#" className="social-link">[TG]</a>
            <a href="#" className="social-link">[DC]</a>
          </div>
          <div className="footer-glitch"></div>
        </footer>
      </div>
    </div>
  );
};

export default Home;