import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, PhoneCall, X } from 'lucide-react';
import Logo from '../assets/Logo-kel.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="kel Logo" className="logo-img" />
        </div>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#inner-pages" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#blog" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-phone">
            <div className="phone-icon-wrap"><PhoneCall size={16} /></div>
            <div className="phone-details">
              <span>Dial Us For Help</span>
              <strong>+1 (0) 1234 5678</strong>
            </div>
          </div>
          <a href="#quote" className="quote-btn">
            <span>Get A Quote</span>
            <div className="arrow-circle"><ArrowRight size={14} /></div>
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}