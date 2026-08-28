import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import "./Footer.css";
import Logo from "../assets/Logo-kel1.png";

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* ================= NEWSLETTER ================= */}
      


      {/* ================= DIVIDER ================= */}
      <div className="footer-divider"></div>


      {/* ================= FOOTER CONTENT ================= */}
      <div className="footer-content">

        {/* COMPANY */}
        <div className="footer-column company-column">

          <img
            src={Logo}
            alt="Kelender Builders"
            className="footer-logo"
          />

          <p className="company-description">
            Kelender Builders is dedicated to transforming
            visions into timeless spaces through innovative
            construction, thoughtful design and quality
            development.
          </p>

          <a
            href="#consultation"
            className="consultation-btn"
          >
            <span className="consultation-icon">
              <ArrowRight size={16} />
            </span>

            <span>
              Request Consultation
            </span>
          </a>

        </div>


        {/* SUPPORT LINKS */}
        <div className="footer-column">

          <h3>Support Links</h3>

          <ul className="footer-links">

            <li>
              <a href="#about">
                About Us
              </a>
            </li>

            <li>
              <a href="#projects">
                 Projects
              </a>
            </li>

            <li>
              <a href="#services">
                 Services
              </a>
            </li>

            {/* <li>
              <a href="#careers">
                Careers
              </a>
            </li> */}

            <li>
              <a href="#contact">
                Contact Us
              </a>
            </li>

            {/* <li>
              <a href="#faq">
                FAQ
              </a>
            </li> */}

          </ul>

        </div>


        {/* BUSINESS HOURS */}
        <div className="footer-column">

          <h3>Business Hours</h3>

          <div className="business-hours">

            <div className="hours-item">
              <Clock size={14} />
              <span>
                Mon to Fri : 09 Am – 06 Pm
              </span>
            </div>

            <div className="hours-item">
              <Clock size={14} />
              <span>
                Saturday : 10 Am – 02 Pm
              </span>
            </div>

            <div className="hours-item">
              <Clock size={14} />
              <span>
                Sunday : Closed
              </span>
            </div>

          </div>

        </div>


        {/* CONTACT */}
        <div className="footer-column contact-column">

          <span className="contact-label">
            Dial Us For Help
          </span>

          <a
            href="tel:+919876543210"
            className="contact-item"
          >
            <Phone size={16} />

            <span>
              +91 98765 43210
            </span>
          </a>


          <span className="contact-label email-label">
            Got A Question?
          </span>

          <a
            href="mailto:info@kelenderbuilders.com"
            className="contact-item"
          >
            <Mail size={16} />

            <span>
              info@kelenderbuilders.com
            </span>
          </a>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">

        <p>
          © 2026{" "}
          <span>Kelender Builders</span>{" "}
          all rights reserved.
        </p>


        {/* SOCIAL ICONS */}
        <div className="footer-socials">

          <a
            href="#facebook"
            aria-label="Facebook"
          >
            <FaFacebookF size={13} />
          </a>

          <a
            href="#instagram"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
          </a>

          <a
            href="#youtube"
            aria-label="YouTube"
          >
            <FaYoutube size={14} />
          </a>

          <a
            href="#linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;