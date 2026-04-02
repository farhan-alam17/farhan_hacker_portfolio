import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [encryptionLevel, setEncryptionLevel] = useState(0);
  const [hackerLevel, setHackerLevel] = useState(0);
  const [decryptProgress, setDecryptProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [glitchText, setGlitchText] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [activeField, setActiveField] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [securityClearance, setSecurityClearance] = useState('PENDING');
  const [matrixChars, setMatrixChars] = useState([]);
  const [hackingProgress, setHackingProgress] = useState(0);
  const [firewallStatus, setFirewallStatus] = useState('ACTIVE');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [dataPackets, setDataPackets] = useState([]);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [activeConnections, setActiveConnections] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  
  const formRef = useRef(null);
  const canvasRef = useRef(null);
  const terminalRef = useRef(null);
  const hackerGlobeRef = useRef(null);

  // Generate encryption key
  useEffect(() => {
    const generateKey = () => {
      const chars = 'ABCDEF0123456789';
      let key = '';
      for (let i = 0; i < 32; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setEncryptionKey(key);
    };
    generateKey();
    const interval = setInterval(generateKey, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animated Matrix Rain Effect with 3D
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const chars = matrix.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    const speeds = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
      speeds[i] = Math.random() * 2 + 1;
    }

    let frame = 0;
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const brightness = Math.sin(frame + i) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(0, ${Math.floor(255 * brightness)}, 0, ${brightness})`;
        ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speeds[i];
      }
      frame++;
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  // Hacker Globe 3D Effect
  useEffect(() => {
    const canvas = hackerGlobeRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    let angle = 0;
    const nodes = [];
    const connections = [];

    // Create network nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2
      });
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          connections.push({ from: i, to: j });
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.beginPath();
      connections.forEach(conn => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `rgba(0, 255, 0, ${Math.sin(Date.now() * 0.001) * 0.3 + 0.2})`;
        ctx.stroke();
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 0, ${Math.sin(Date.now() * 0.002 + node.angle) * 0.5 + 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ff00';
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  // System monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 40) + 30);
      setMemoryUsage(Math.floor(Math.random() * 50) + 40);
      setActiveConnections(Math.floor(Math.random() * 20) + 5);
      setHackingProgress(prev => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Glitch text effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = '!<>-_\\/[]{}—=+*^?#@$%';
      let result = '';
      for (let i = 0; i < 10; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitchText(result);
    }, 150);
    return () => clearInterval(glitchInterval);
  }, []);

  // Matrix characters
  useEffect(() => {
    const chars = [];
    for (let i = 0; i < 100; i++) {
      chars.push({
        char: String.fromCharCode(0x30A0 + Math.random() * 96),
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    setMatrixChars(chars);
    
    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: (char.y + char.speed) % 100,
        opacity: Math.sin(Date.now() * 0.001) * 0.3 + 0.3
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Data packets simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPackets(prev => [
        ...prev,
        {
          id: Math.random(),
          size: Math.floor(Math.random() * 1000),
          encrypted: Math.random() > 0.5,
          timestamp: new Date().toLocaleTimeString()
        }
      ].slice(-10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Terminal animation
  useEffect(() => {
    const commands = [
      '> INITIALIZING SECURE SHELL...',
      '> ESTABLISHING TOR CONNECTION...',
      '> ENCRYPTING DATA PACKETS...',
      '> BYPASSING FIREWALL...',
      '> ACCESSING DARKNET...',
      '> DECRYPTING MESSAGE...',
      '> VERIFYING SECURITY TOKENS...'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < commands.length) {
        setTerminalLines(prev => [...prev, commands[index]]);
        index++;
      } else {
        index = 0;
        setTerminalLines([]);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTerminalOutput(prev => [
      ...prev,
      { type: 'input', field: name, value: value.length > 0 ? '●'.repeat(Math.min(value.length, 20)) : '...' }
    ].slice(-8));
  };

  const handleFocus = (field) => {
    setActiveField(field);
    setTerminalOutput(prev => [
      ...prev,
      { type: 'system', content: `> ACCESSING ${field.toUpperCase()} BUFFER... [GRANTED]` }
    ].slice(-8));
  };

  const handleBlur = () => {
    setActiveField('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSecurityClearance('VERIFYING');
    
    let progress = 0;
    const encryptInterval = setInterval(() => {
      progress += 3;
      setDecryptProgress(progress);
      setEncryptionLevel(progress);
      
      setTerminalOutput(prev => [
        ...prev,
        { type: 'process', content: `> ENCRYPTING DATA PACKET: ${progress}%` }
      ].slice(-8));
      
      if (progress >= 100) {
        clearInterval(encryptInterval);
        setIsSending(false);
        setSent(true);
        setSecurityClearance('GRANTED');
        setFirewallStatus('BREACHED');
        
        setTerminalOutput(prev => [
          ...prev,
          { type: 'success', content: '> MESSAGE ENCRYPTED WITH AES-256' },
          { type: 'success', content: '> TRANSMISSION SECURE' },
          { type: 'success', content: '> MESSAGE SENT SUCCESSFULLY' },
          { type: 'success', content: '> SECURITY PROTOCOLS UPDATED' }
        ].slice(-8));
        
        setTimeout(() => {
          setSent(false);
          setDecryptProgress(0);
          setFormData({ name: '', email: '', message: '' });
          setSecurityClearance('PENDING');
          setFirewallStatus('ACTIVE');
        }, 4000);
      }
    }, 30);
  };

  const hackingTools = [
    { name: 'NMAP SCAN', value: 'ACTIVE', icon: '🔍', status: 'scanning' },
    { name: 'METASPLOIT', value: 'LOADED', icon: '💀', status: 'ready' },
    { name: 'WIRESHARK', value: 'CAPTURING', icon: '📡', status: 'active' },
    { name: 'BURPSUITE', value: 'PROXY', icon: '🕸️', status: 'listening' }
  ];

  return (
    <div className="contact-container">
      {/* Matrix Canvas Background */}
      <canvas ref={canvasRef} className="matrix-canvas" />
      
      {/* 3D Hacker Globe */}
      <div className="hacker-globe">
        <canvas ref={hackerGlobeRef} className="globe-canvas"></canvas>
        <div className="globe-text">DARKNET</div>
      </div>
      
      {/* Floating Binary Rain */}
      <div className="binary-rain-3d">
        {matrixChars.map((char, i) => (
          <span
            key={i}
            className="binary-char-3d"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              opacity: char.opacity,
              animationDelay: `${Math.random() * 3}s`,
              transform: `rotate(${Math.sin(Date.now() * 0.001) * 10}deg)`
            }}
          >
            {char.char}
          </span>
        ))}
      </div>

      {/* Animated Glitch Overlay */}
      <div className="glitch-overlay-master" style={{
        background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, 
          rgba(255, 0, 0, 0.1) 0%, 
          rgba(0, 255, 0, 0.05) 50%, 
          transparent 100%)`
      }}></div>

      {/* Scan Lines 3D */}
      <div className="scan-lines-3d"></div>

      {/* CRT Flicker */}
      <div className="crt-flicker"></div>

      <div className="contact-wrapper">
        {/* INSANE HEADER SECTION */}
        <div className="insane-header">
          <div className="header-3d">
            <div className="header-3d-front">
              <h1 className="insane-title">
                <span className="title-bracket">[</span>
                <span className="title-text">SECURE_COMMUNICATION</span>
                <span className="title-bracket">]</span>
              </h1>
            </div>
            <div className="header-3d-back">
              <h1 className="insane-title-back">{glitchText}</h1>
            </div>
          </div>
          
          <div className="header-stats-grid">
            <div className="stat-3d">
              <div className="stat-3d-front">
                <span className="stat-label">ENCRYPTION</span>
                <span className="stat-value">{encryptionLevel}%</span>
              </div>
            </div>
            <div className="stat-3d">
              <div className="stat-3d-front">
                <span className="stat-label">HACKER LVL</span>
                <span className="stat-value">{hackerLevel}%</span>
              </div>
            </div>
            <div className="stat-3d pulse">
              <div className="stat-3d-front">
                <span className="stat-label">CLEARANCE</span>
                <span className={`stat-value ${securityClearance.toLowerCase()}`}>
                  {securityClearance}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT - INSANE GRID */}
        <div className="insane-grid">
          {/* LEFT PANEL - HACKER TOOLS */}
          <div className="hacker-panel">
            <div className="panel-header">
              <span className="header-icon">⚡</span>
              <span className="header-text">HACKER_TOOLS</span>
              <span className="header-glitch">{glitchText.slice(0, 3)}</span>
            </div>
            
            <div className="tools-grid">
              {hackingTools.map((tool, index) => (
                <div key={index} className="tool-card-3d">
                  <div className="tool-icon">{tool.icon}</div>
                  <div className="tool-info">
                    <span className="tool-name">{tool.name}</span>
                    <span className={`tool-value ${tool.status}`}>{tool.value}</span>
                  </div>
                  <div className="tool-status-dot"></div>
                </div>
              ))}
            </div>

            {/* System Monitor */}
            <div className="system-monitor">
              <div className="monitor-title">SYSTEM_MONITOR</div>
              <div className="monitor-stats">
                <div className="monitor-item">
                  <span>CPU: {cpuUsage}%</span>
                  <div className="monitor-bar">
                    <div className="monitor-fill" style={{ width: `${cpuUsage}%` }}></div>
                  </div>
                </div>
                <div className="monitor-item">
                  <span>RAM: {memoryUsage}%</span>
                  <div className="monitor-bar">
                    <div className="monitor-fill" style={{ width: `${memoryUsage}%` }}></div>
                  </div>
                </div>
                <div className="monitor-item">
                  <span>CONNECTIONS: {activeConnections}</span>
                  <div className="monitor-bar">
                    <div className="monitor-fill" style={{ width: `${(activeConnections / 20) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Terminal */}
            <div className="live-terminal-3d">
              <div className="terminal-3d-header">
                <span>root@hack3r:~$</span>
                <span className="terminal-pulse">●</span>
              </div>
              <div className="terminal-3d-body">
                {terminalLines.map((line, i) => (
                  <div key={i} className="terminal-line-3d">
                    <span className="terminal-prompt">{'>'}</span>
                    <span className="terminal-command">{line}</span>
                  </div>
                ))}
                <div className="terminal-line-3d cursor">
                  <span className="terminal-prompt">_</span>
                  <span className="terminal-cursor-blink"></span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - CONTACT FORM */}
          <div className="contact-panel">
            <div className="form-header-3d">
              <div className="form-header-text">
                <span className="bracket">{'{{'}</span>
                INITIATE_CONTACT
                <span className="bracket">{'}}'}</span>
              </div>
              <div className="encryption-badge">
                <span>🔒</span>
                <span>AES-256</span>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form-3d">
              {/* NAME FIELD */}
              <div className={`input-group-3d ${activeField === 'name' ? 'active' : ''}`}>
                <label className="input-label-3d">
                  <span className="label-prefix">[</span>
                  TARGET_NAME
                  <span className="label-suffix">]</span>
                </label>
                <div className="input-wrapper-3d">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className="hacker-input-3d"
                    placeholder="ENTER_TARGET_IDENTITY"
                    required
                  />
                  <div className="input-glitch-3d"></div>
                  <div className="input-scan-3d"></div>
                </div>
                <div className="binary-stream">
                  {Array.from({ length: 15 }, (_, i) => (
                    <span key={i}>{Math.round(Math.random())}</span>
                  ))}
                </div>
              </div>

              {/* EMAIL FIELD */}
              <div className={`input-group-3d ${activeField === 'email' ? 'active' : ''}`}>
                <label className="input-label-3d">
                  <span className="label-prefix">[</span>
                  ENCRYPTED_EMAIL
                  <span className="label-suffix">]</span>
                </label>
                <div className="input-wrapper-3d">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="hacker-input-3d"
                    placeholder="USER@DARKWEB.ONION"
                    required
                  />
                  <div className="input-glitch-3d"></div>
                  <div className="input-scan-3d"></div>
                </div>
                <div className="encryption-status">
                  <span className="key-display">KEY: {encryptionKey.slice(0, 16)}...</span>
                  <span className="lock-icon">🔒</span>
                </div>
              </div>

              {/* MESSAGE FIELD */}
              <div className={`input-group-3d ${activeField === 'message' ? 'active' : ''}`}>
                <label className="input-label-3d">
                  <span className="label-prefix">[</span>
                  SECURE_MESSAGE
                  <span className="label-suffix">]</span>
                </label>
                <div className="input-wrapper-3d">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className="hacker-textarea-3d"
                    placeholder="ENTER_ENCRYPTED_MESSAGE..."
                    rows="4"
                    required
                  />
                  <div className="input-glitch-3d"></div>
                  <div className="input-scan-3d"></div>
                </div>
                <div className="char-counter-3d">
                  <span>BYTES: {formData.message.length}</span>
                  <span>|</span>
                  <span>ENCRYPTED: YES</span>
                </div>
              </div>

              {/* DATA PACKETS */}
              <div className="data-packets">
                <div className="packets-header">DATA_PACKETS</div>
                <div className="packets-list">
                  {dataPackets.map(packet => (
                    <div key={packet.id} className="packet-item">
                      <span className="packet-size">{packet.size} bytes</span>
                      <span className="packet-status">{packet.encrypted ? '🔒' : '⚠️'}</span>
                      <span className="packet-time">{packet.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button 
                type="submit" 
                className={`hacker-button-3d ${isSending ? 'sending' : ''} ${sent ? 'sent' : ''}`}
                disabled={isSending || sent}
              >
                <div className="button-3d-front">
                  <span className="button-text">
                    {isSending ? 'ENCRYPTING...' : sent ? '✓ TRANSMITTED' : 'SEND_SECURE_MESSAGE'}
                  </span>
                </div>
                <div className="button-3d-back">
                  <span className="button-text">{glitchText.slice(0, 5)}</span>
                </div>
                
                {isSending && (
                  <div className="encryption-ring">
                    <svg width="80" height="80">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="var(--primary-green)"
                        strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - decryptProgress / 100)}`}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                      />
                    </svg>
                  </div>
                )}
              </button>

              {/* SUCCESS EXPLOSION */}
              {sent && (
                <div className="success-explosion">
                  <div className="explosion-particles">
                    {Array.from({ length: 50 }, (_, i) => (
                      <div key={i} className="explosion-particle"></div>
                    ))}
                  </div>
                  <div className="success-message-3d">
                    <span className="success-text">MESSAGE TRANSMITTED</span>
                    <span className="success-sub">SECURE CONNECTION ESTABLISHED</span>
                  </div>
                </div>
              )}
            </form>

            {/* TERMINAL OUTPUT */}
            <div className="terminal-output-3d">
              <div className="output-header">
                <span>LIVE_TRANSMISSION.log</span>
                <span className="output-glow">●</span>
              </div>
              <div className="output-body">
                {terminalOutput.map((line, i) => (
                  <div key={i} className={`output-line ${line.type}`}>
                    <span className="output-prompt">{'>'}</span>
                    <span className="output-content">
                      {line.type === 'input' ? `${line.field}: ${line.value}` : line.content}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER STATS */}
        <div className="footer-stats-3d">
          <div className="footer-stat-item">
            <span>FIREWALL:</span>
            <span className={`stat-value ${firewallStatus === 'ACTIVE' ? 'active' : 'breached'}`}>
              {firewallStatus}
            </span>
          </div>
          <div className="footer-stat-item">
            <span>PROTOCOL:</span>
            <span>HTTPS / TOR / I2P</span>
          </div>
          <div className="footer-stat-item">
            <span>ENCRYPTION:</span>
            <span>AES-256 / RSA-4096</span>
          </div>
          <div className="footer-stat-item">
            <span>STATUS:</span>
            <span className="status-pulse">SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;