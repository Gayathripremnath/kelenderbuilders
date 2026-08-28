import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Compass, Layers, Home as HomeIcon, Award, 
  CheckCircle, Briefcase, Building, PenTool, Palette, 
  Calendar, User, ChevronLeft, ChevronRight 
} from 'lucide-react';
import './Home.css';

const revealFromBelow = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const staggerReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('objective');
  const [portfolioTab, setPortfolioTab] = useState('All');

  return (
    <div className="home-main">
      {/* 1. HERO SECTION */}
      <motion.section className="hero-section" variants={imageReveal} initial="hidden" animate="visible">
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
      </motion.section>

      {/* 2. VISIONARY PLANNING GRID */}
      <motion.section className="features-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="features-grid" variants={staggerReveal}>
          {[
            { icon: <Compass size={32} />, title: "Visionary Planning", desc: "Turning ideas into detailed, achievable blueprints." },
            { icon: <Layers size={32} />, title: "Detailed Engineering", desc: "Seamlessly integrating strength with aesthetic appeal." },
            { icon: <HomeIcon size={32} />, title: "Sustainable Approach", desc: "Balancing beauty with environmental responsibility." },
            { icon: <Award size={32} />, title: "Design Expertise", desc: "Blending modern concepts with classic architectural values." }
          ].map((item, idx) => (
            <motion.div 
              className="feature-card" 
              key={idx}
              variants={revealFromBelow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 3. REDEFINING THE FUTURE OF DESIGN */}
      <motion.section className="redefining-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="redefining-container" variants={staggerReveal}>
          <motion.div className="redefining-img-wrapper" variants={imageReveal}>
            <div className="satisfaction-badge">
              <h2>100%</h2>
              <p>Satisfaction Guarantee</p>
            </div>
          </motion.div>
          <motion.div className="redefining-content" variants={revealFromBelow}>
            <span className="section-tag">ENDLESS POSSIBILITIES</span>
            <h2>Redefining The Future Of Design</h2>
            
            <div className="tab-pills">
              <button className={activeTab === 'objective' ? 'active' : ''} onClick={() => setActiveTab('objective')}>Our Objective</button>
              <button className={activeTab === 'goals' ? 'active' : ''} onClick={() => setActiveTab('goals')}>Our Goals</button>
              <button className={activeTab === 'heritage' ? 'active' : ''} onClick={() => setActiveTab('heritage')}>Our Heritage</button>
            </div>

            <div className="tab-pane-content">
              <motion.div className="pane-left-img" variants={imageReveal}></motion.div>
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
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 4. PATH TO ARCHITECTURAL GREATNESS (SERVICES) */}
      <motion.section className="services-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="services-header" variants={revealFromBelow}>
          <span className="section-tag light">OUR FUNCTIONS</span>
          <h2>Our Path To Architectural Greatness</h2>
        </motion.div>
        <motion.div className="services-cards-grid" variants={staggerReveal}>
          {[
            { title: "Strategic Design", icon: <Compass size={24} />, desc: "From the first idea to the master plan, we shape layouts that balance innovation." },
            { title: "Space Styling", icon: <Building size={24} />, desc: "Interiors designed to reflect personality and purpose – combining comfort and elegance." },
            { title: "Business Environments", icon: <Briefcase size={24} />, desc: "Dynamic offices, retail spaces, and commercial hubs built to boost productivity." }
          ].map((srv, idx) => (
            <motion.div className="service-card" key={idx} variants={revealFromBelow}>
              <div className="service-card-top-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a href="#details" className="view-details-link">View Details <div className="mini-arrow">↗</div></a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="center-action" variants={revealFromBelow}>
          <a href="#all-services" className="all-services-btn">
            <div className="arrow-circle"><ArrowRight size={14} /></div>
            <span>See All Services</span>
          </a>
        </motion.div>
      </motion.section>

      {/* 5. TURNING IDEAS INTO LANDMARKS (PROCESS) */}
      <motion.section className="process-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="process-header" variants={revealFromBelow}>
          <span className="section-tag">OUR PROCESS</span>
          <h2>Turning Ideas Into Landmarks</h2>
        </motion.div>
        <motion.div className="process-timeline" variants={staggerReveal}>
          {[
            { step: "01", title: "Consultation", desc: "Listening to your needs and goals." },
            { step: "02", title: "Design Drafting", desc: "Developing creative concepts." },
            { step: "03", title: "Blueprints & Approvals", desc: "Ensuring compliance and clarity." },
            { step: "04", title: "Construction", desc: "Managing every step with precision." }
          ].map((p, idx) => (
            <motion.div className="process-step" key={idx} variants={revealFromBelow}>
              <div className="step-circle-icon"><PenTool size={22} /></div>
              <h4>{p.step}/ {p.title}</h4>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 6. OUR EXCELLENT EFFORTS (PORTFOLIO FILTER) */}
      <motion.section className="portfolio-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.span className="section-tag" variants={revealFromBelow}>FRESH UPDATES</motion.span>
        <motion.h2 variants={revealFromBelow}>Our Excellent Efforts</motion.h2>
        <motion.div className="filter-buttons" variants={revealFromBelow}>
          {['All', 'Interior Architecture', 'Residential Architecture', 'Sustainable Design', 'Urban Planning'].map((cat) => (
            <button 
              key={cat} 
              className={portfolioTab === cat ? 'active' : ''} 
              onClick={() => setPortfolioTab(cat)}
            >
              {cat === 'All' && <span className="dot-bullet"></span>} {cat}
            </button>
          ))}
        </motion.div>
        <motion.div className="portfolio-grid" variants={staggerReveal}>
          <motion.div className="p-item large" variants={imageReveal}></motion.div>
          <motion.div className="p-item tall" variants={imageReveal}></motion.div>
          <motion.div className="p-item" variants={imageReveal}></motion.div>
          <motion.div className="p-item" variants={imageReveal}></motion.div>
        </motion.div>
      </motion.section>

      {/* 7. EXPLORE THE LATEST NEWS */}
      <motion.section className="news-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.span className="section-tag" variants={revealFromBelow}>RECENT UPDATES</motion.span>
        <motion.h2 variants={revealFromBelow}>Explore The Latest News</motion.h2>
        <motion.div className="news-grid-container" variants={staggerReveal}>
          <motion.div className="news-main-card" variants={revealFromBelow}>
            <motion.div className="news-img-box" variants={imageReveal}></motion.div>
            <div className="news-meta">
              <span><Calendar size={14} /> May 24, 2025</span>
              <span><User size={14} /> Developer</span>
            </div>
            <h3>Reviving Traditional Architecture With A Modern Twist</h3>
            <p>Cultural heritage is finding new life in contemporary designs by incorporating traditional patterns...</p>
          </motion.div>
          <motion.div className="news-sub-list" variants={staggerReveal}>
            <motion.div className="news-sm-card" variants={revealFromBelow}>
              <div className="news-meta">
                <span><Calendar size={14} /> June 13, 2025</span>
                <span><User size={14} /> Developer</span>
              </div>
              <h4>Luxury Living Redefined Through Simplicity</h4>
            </motion.div>
            <motion.div className="news-sm-card" variants={revealFromBelow}>
              <div className="news-meta">
                <span><Calendar size={14} /> May 30, 2025</span>
                <span><User size={14} /> Developer</span>
              </div>
              <h4>The Art Of Designing Timeless Spaces</h4>
            </motion.div>
            <motion.div className="news-sm-card" variants={revealFromBelow}>
              <div className="news-meta">
                <span><Calendar size={14} /> May 28, 2025</span>
                <span><User size={14} /> Developer</span>
              </div>
              <h4>Wellness-Centered Homes For Better Living</h4>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}