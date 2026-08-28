import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, PhoneCall } from 'lucide-react';
import Logo from '../assets/Logo-kel.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

        <nav className="navbar-nav">
          <a href="#home" className="nav-link active">Home  </a>
          <a href="#inner-pages" className="nav-link">Inner Pages </a>
          <a href="#projects" className="nav-link">Projects </a>
          <a href="#blog" className="nav-link">Blog </a>
          <a href="#contact" className="nav-link">Contact Us</a>
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
      </div>
    </header>
  );
}