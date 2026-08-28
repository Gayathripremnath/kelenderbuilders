import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Compass, Layers, Home as HomeIcon, Award, 
  CheckCircle, Briefcase, Building, PenTool, Palette, 
  Calendar, User, ChevronLeft, ChevronRight 
} from 'lucide-react';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('objective');
  const [portfolioTab, setPortfolioTab] = useState('All');

  return (
    <div className="home-main">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <motion.div 
          className="hero-content-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-pill">SIGN / TIMELESS DESIGN</div>
          <h1 className="hero-title">Shaping Spaces, <br />Inspiring Lives</h1>
          <p className="hero-desc">
            We believe architecture is more than buildings—it’s about creating that uplift, connect. Every project is crafted with precision and a dedication.
          </p>
          <a href="#look" className="hero-look-btn">
            <div className="arrow-circle-dark"><ArrowRight size={16} /></div>
            <span>Have A Look</span>
          </a>
        </motion.div>
        <div className="hero-pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* 2. VISIONARY PLANNING GRID */}
      <section className="features-section">
        <div className="features-grid">
          {[
            { icon: <Compass size={32} />, title: "Visionary Planning", desc: "Turning ideas into detailed, achievable blueprints." },
            { icon: <Layers size={32} />, title: "Detailed Engineering", desc: "Seamlessly integrating strength with aesthetic appeal." },
            { icon: <HomeIcon size={32} />, title: "Sustainable Approach", desc: "Balancing beauty with environmental responsibility." },
            { icon: <Award size={32} />, title: "Design Expertise", desc: "Blending modern concepts with classic architectural values." }
          ].map((item, idx) => (
            <motion.div 
              className="feature-card" 
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. REDEFINING THE FUTURE OF DESIGN */}
      <section className="redefining-section">
        <div className="redefining-container">
          <div className="redefining-img-wrapper">
            <div className="satisfaction-badge">
              <h2>100%</h2>
              <p>Satisfaction Guarantee</p>
            </div>
          </div>
          <div className="redefining-content">
            <span className="section-tag">ENDLESS POSSIBILITIES</span>
            <h2>Redefining The Future Of Design</h2>
            
            <div className="tab-pills">
              <button className={activeTab === 'objective' ? 'active' : ''} onClick={() => setActiveTab('objective')}>Our Objective</button>
              <button className={activeTab === 'goals' ? 'active' : ''} onClick={() => setActiveTab('goals')}>Our Goals</button>
              <button className={activeTab === 'heritage' ? 'active' : ''} onClick={() => setActiveTab('heritage')}>Our Heritage</button>
            </div>

            <div className="tab-pane-content">
              <div className="pane-left-img"></div>
              <div className="pane-right-info">
                <p>Our vision goes beyond aesthetics—we aim to design spaces that remain relevant and functionals.</p>
                <ul>
                  <li><CheckCircle size={16} className="check" /> Enduring Vision</li>
                  <li><CheckCircle size={16} className="check" /> Sustainable Focus</li>
                  <li><CheckCircle size={16} className="check" /> Precision & Detail</li>
                  <li><CheckCircle size={16} className="check" /> Future-Ready</li>
                </ul>
              </div>
            </div>
            <a href="#chat" className="chat-btn">
              <div className="arrow-circle"><ArrowRight size={14} /></div>
              <span>Chat With Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. PATH TO ARCHITECTURAL GREATNESS (SERVICES) */}
      <section className="services-section">
        <div className="services-header">
          <span className="section-tag light">OUR FUNCTIONS</span>
          <h2>Our Path To Architectural Greatness</h2>
        </div>
        <div className="services-cards-grid">
          {[
            { title: "Strategic Design", icon: <Compass size={24} />, desc: "From the first idea to the master plan, we shape layouts that balance innovation." },
            { title: "Space Styling", icon: <Building size={24} />, desc: "Interiors designed to reflect personality and purpose – combining comfort and elegance." },
            { title: "Business Environments", icon: <Briefcase size={24} />, desc: "Dynamic offices, retail spaces, and commercial hubs built to boost productivity." }
          ].map((srv, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-card-top-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a href="#details" className="view-details-link">View Details <div className="mini-arrow">↗</div></a>
            </div>
          ))}
        </div>
        <div className="center-action">
          <a href="#all-services" className="all-services-btn">
            <div className="arrow-circle"><ArrowRight size={14} /></div>
            <span>See All Services</span>
          </a>
        </div>
      </section>

      {/* 5. TURNING IDEAS INTO LANDMARKS (PROCESS) */}
      <section className="process-section">
        <div className="process-header">
          <span className="section-tag">OUR PROCESS</span>
          <h2>Turning Ideas Into Landmarks</h2>
        </div>
        <div className="process-timeline">
          {[
            { step: "01", title: "Consultation", desc: "Listening to your needs and goals." },
            { step: "02", title: "Design Drafting", desc: "Developing creative concepts." },
            { step: "03", title: "Blueprints & Approvals", desc: "Ensuring compliance and clarity." },
            { step: "04", title: "Construction", desc: "Managing every step with precision." }
          ].map((p, idx) => (
            <div className="process-step" key={idx}>
              <div className="step-circle-icon"><PenTool size={22} /></div>
              <h4>{p.step}/ {p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR EXCELLENT EFFORTS (PORTFOLIO FILTER) */}
      <section className="portfolio-section">
        <span className="section-tag">FRESH UPDATES</span>
        <h2>Our Excellent Efforts</h2>
        <div className="filter-buttons">
          {['All', 'Interior Architecture', 'Residential Architecture', 'Sustainable Design', 'Urban Planning'].map((cat) => (
            <button 
              key={cat} 
              className={portfolioTab === cat ? 'active' : ''} 
              onClick={() => setPortfolioTab(cat)}
            >
              {cat === 'All' && <span className="dot-bullet"></span>} {cat}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          <div className="p-item large"></div>
          <div className="p-item tall"></div>
          <div className="p-item"></div>
          <div className="p-item"></div>
        </div>
      </section>

      {/* 7. EXPLORE THE LATEST NEWS */}
      <section className="news-section">
        <span className="section-tag">RECENT UPDATES</span>
        <h2>Explore The Latest News</h2>
        <div className="news-grid-container">
          <div className="news-main-card">
            <div className="news-img-box"></div>
            <div className="news-meta">
              <span><Calendar size={14} /> May 24, 2025</span>
              <span><User size={14} /> Developer</span>
            </div>
            <h3>Reviving Traditional Architecture With A Modern Twist</h3>
            <p>Cultural heritage is finding new life in contemporary designs by incorporating traditional patterns...</p>
          </div>
          <div className="news-sub-list">
            <div className="news-sm-card">
              <div className="news-meta">
                <span><Calendar size={14} /> June 13, 2025</span>
                <span><User size={14} /> Developer</span>
              </div>
              <h4>Luxury Living Redefined Through Simplicity</h4>
            </div>
            <div className="news-sm-card">
              <div className="news-meta">
                <span><Calendar size={14} /> May 30, 2025</span>
                <span><User size={14} /> Developer</span>
              </div>
              <h4>The Art Of Designing Timeless Spaces</h4>
            </div>
            <div className="news-sm-card">
              <div className="news-meta">
                <span><Calendar size={14} /> May 28, 2025</span>
                <span><User size={14} /> Developer</span>
              </div>
              <h4>Wellness-Centered Homes For Better Living</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}