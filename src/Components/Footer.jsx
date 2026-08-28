import React from 'react';
import { ArrowRight, Phone, Mail, Globe, X } from 'lucide-react';
import { FaFacebookF, FaYoutube, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import Logo from '../assets/Logo.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-main">
      {/* Newsletter Box */}
      <div className="newsletter-box">
        <div className="newsletter-title">
          <h2>Register Our Newsletter, And Stay In Touch</h2>
        </div>
        <div className="newsletter-form-area">
          <div className="newsletter-input-group">
            <input type="email" placeholder="Enter Your Email" />
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
          <label className="terms-checkbox">
            <input type="checkbox" defaultChecked />
            <span>I have accepted the <strong>Terms & Conditions</strong></span>
          </label>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-content">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={Logo} alt="kel Logo" className="logo-img" />
          </div>
          <p>Kelender is dedicated to transforming visions into timeless spaces through innovative architecture and thoughtful design.</p>
          <a href="#consultation" className="request-consult-btn">
            <div className="arrow-circle"><ArrowRight size={14} /></div>
            <span>Request Consultation</span>
          </a>
        </div>

        <div className="footer-col">
          <h3>Support Links</h3>
          <ul>
            <li><a href="#blogs">Our Blogs</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#faqs">Frequent QA's</a></li>
            <li><a href="#team">Meet Our Team</a></li>
            <li><a href="#awards">Awards and Rewards</a></li>
            <li><a href="#pricing">Pricing Plan</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Business Hours</h3>
          <p className="hours-row"><strong>Mon to Fri :</strong> 09 Am – 06 Pm</p>
          <p className="hours-row"><strong>Saturday :</strong> 10 Am – 02 Pm</p>
          <p className="hours-row"><strong>Sunday :</strong> Closed</p>
        </div>

        <div className="footer-col">
          <h3>Dial Us For Help</h3>
          <p className="footer-contact-item"><Phone size={16} /> +1(0) 1234 5678</p>
          <h3 className="mt-20">Got A Question?</h3>
          <p className="footer-contact-item"><Mail size={16} /> info@example.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>©Designthemes all rights reserved.</p>
        <div className="footer-socials">
          <a href="#fb"><FaFacebookF /></a>
          <a href="#x"><X size={14} /></a>
          <a href="#yt"><FaYoutube /></a>
          <a href="#pin"><FaPinterestP /></a>
        </div>
      </div>
    </footer>
  );
}