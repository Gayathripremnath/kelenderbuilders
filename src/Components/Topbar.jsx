import React from 'react';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaGlobe, FaXTwitter } from 'react-icons/fa6';
import './Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <span className="topbar-item">
            <MapPin size={14} className="topbar-icon" /> KOCHI,KERALA, INDIA
          </span>
          <span className="topbar-item">
            <Mail size={14} className="topbar-icon" /> info@example.com
          </span>
        </div>
        <div className="topbar-right">
          <span className="topbar-item">
            <Clock size={14} className="topbar-icon" /> Hours: Mon–Fri: 9.00 am - 6.00 pm
          </span>
          <div className="topbar-socials">
            <a href="#facebook"><FaFacebookF /></a>
            <a href="#instagram"><FaInstagram /></a>
            <a href="#globe"><FaGlobe /></a>
            <a href="#twitter"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}