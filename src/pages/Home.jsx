import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowRight, Compass, Layers, Home as HomeIcon, Award, 
  CheckCircle, Briefcase, Building, PenTool, Palette,
  ChevronLeft, ChevronRight
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

const projects = [
  { id: 1, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', title: 'Architectural Visions', category: 'Interior Architecture', layout: 'small' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85', title: 'Modern Residence', category: 'Residential Architecture', layout: 'tall' },
  { id: 3, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', title: 'Sustainable Living', category: 'Sustainable Design', layout: 'wide' },
  { id: 4, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85', title: 'Urban Development', category: 'Urban Planning', layout: 'small' },
  { id: 5, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85', title: 'Quiet Interiors', category: 'Interior Architecture', layout: 'small' },
  { id: 6, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85', title: 'Garden House', category: 'Residential Architecture', layout: 'tall' },
  { id: 7, image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85', title: 'Adaptive Workspace', category: 'Urban Planning', layout: 'small' },
  { id: 8, image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85', title: 'Living Landscape', category: 'Sustainable Design', layout: 'wide' }
];
const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    avatar:
      "https://i.pravatar.cc/100?img=12",
    name: "Ramesh Gupta",
    role: "Home Owner",
    text:
      "Kelender transformed our vision into a beautiful home that truly reflects who we are. Every detail was handled with care and professionalism."
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    avatar:
      "https://i.pravatar.cc/100?img=32",
    name: "Arun Menon",
    role: "Property Owner",
    text:
      "From planning to completion, the entire team maintained excellent communication and delivered a space that exceeded our expectations."
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    avatar:
      "https://i.pravatar.cc/100?img=47",
    name: "Nisha Thomas",
    role: "Client",
    text:
      "The quality, attention to detail and commitment shown throughout the project made the entire construction experience smooth and stress-free."
  }
];
export default function Home() {
  const [activeTab, setActiveTab] = useState('objective');
  const [portfolioTab, setPortfolioTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const filteredProjects = portfolioTab === 'All'
    ? projects
    : projects.filter((project) => project.category === portfolioTab);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) return;
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key === 'ArrowLeft') {
        const currentIndex = filteredProjects.findIndex((project) => project.id === selectedProject.id);
        setSelectedProject(filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length]);
      }
      if (event.key === 'ArrowRight') {
        const currentIndex = filteredProjects.findIndex((project) => project.id === selectedProject.id);
        setSelectedProject(filteredProjects[(currentIndex + 1) % filteredProjects.length]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, filteredProjects]);

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
        <div className="services-showcase">
          <button className="services-arrow services-arrow-left" type="button" aria-label="Previous services">
            <ChevronLeft size={18} />
          </button>
          <motion.div className="services-cards-grid" variants={staggerReveal}>
          {[
            { title: "Strategic Design", icon: <Compass size={24} />, desc: "From the first idea to the master plan, we shape layouts that balance innovation." },
            { title: "Space Styling", icon: <Building size={24} />, desc: "Interiors designed to reflect personality and purpose – combining comfort and elegance." },
            { title: "Business Environments", icon: <Briefcase size={24} />, desc: "Dynamic offices, retail spaces, and commercial hubs built to boost productivity." }
          ].map((srv, idx) => (
            <motion.div className="service-card" key={idx} variants={revealFromBelow}>
              <div className={`service-card-image service-card-image-${idx + 1}`}>
                <div className="service-card-top-icon">{srv.icon}</div>
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a href="#details" className="view-details-link">View Details <div className="mini-arrow">↗</div></a>
            </motion.div>
            ))}
          </motion.div>
          <button className="services-arrow services-arrow-right" type="button" aria-label="Next services">
            <ChevronRight size={18} />
          </button>
        </div>
        <motion.div className="center-action" variants={revealFromBelow}>
          <a href="#all-services" className="all-services-btn">
            <div className="arrow-circle"><ArrowRight size={14} /></div>
            <span>See All Services</span>
          </a>
        </motion.div>
      </motion.section>

      {/* 5. TURNING IDEAS INTO LANDMARKS (PROCESS) */}
      {/* <motion.section className="process-section" variants={revealFromBelow} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
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
      </motion.section> */}
  {/* 5. OUR EXCELLENT EFFORTS */}
<motion.section
  className="portfolio-section"
  variants={revealFromBelow}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {/* SECTION HEADER */}
  <motion.div
    className="portfolio-header"
    variants={revealFromBelow}
  >
    <span className="section-tag">
      FRESH UPDATES
    </span>

    <h2>
      Our Excellent Efforts
    </h2>
  </motion.div>

  {/* CATEGORY FILTER */}
  <motion.div
    className="filter-buttons"
    variants={revealFromBelow}
  >
    {[
      "All",
      "Interior Architecture",
      "Residential Architecture",
      "Sustainable Design",
      "Urban Planning"
    ].map((cat) => (
      <button
        key={cat}
        type="button"
        className={
          portfolioTab === cat ? "active" : ""
        }
        onClick={() => setPortfolioTab(cat)}
      >
        {cat === "All" && (
          <span className="dot-bullet"></span>
        )}

        {cat}
      </button>
    ))}
  </motion.div>

  {/* GALLERY */}
  <motion.div
    className="portfolio-grid"
    variants={staggerReveal}
  >
    <AnimatePresence mode="popLayout">
      {filteredProjects.map((project) => (
        <motion.button
          key={project.id}
          type="button"
          className={`p-item ${project.layout}`}
          style={{
            backgroundImage: `url(${project.image})`
          }}
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          exit={{
            opacity: 0,
            scale: 0.92
          }}
          transition={{
            duration: 0.45
          }}
          onClick={() => setSelectedProject(project)}
        >
          <span>
            {project.title}
          </span>
        </motion.button>
      ))}
    </AnimatePresence>
  </motion.div>
</motion.section>
    

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="portfolio-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <button className="lightbox-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close preview">X</button>
            <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => {
              event.stopPropagation();
              const currentIndex = filteredProjects.findIndex((project) => project.id === selectedProject.id);
              setSelectedProject(filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length]);
            }} aria-label="Previous project">{`<`}</button>
            <motion.figure
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedProject.image} alt={selectedProject.title} />
              <figcaption>{selectedProject.title}</figcaption>
            </motion.figure>
            <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => {
              event.stopPropagation();
              const currentIndex = filteredProjects.findIndex((project) => project.id === selectedProject.id);
              setSelectedProject(filteredProjects[(currentIndex + 1) % filteredProjects.length]);
            }} aria-label="Next project">{`>`}</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. CLIENT TESTIMONIALS */}
      <motion.section
        className="testimonials-section"
        variants={revealFromBelow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="testimonials-container">
          <motion.div
            className="testimonial-image"
            variants={imageReveal}
            key={testimonials[currentTestimonial].image}
            initial="hidden"
            animate="visible"
          >
            <img src={testimonials[currentTestimonial].image} alt="Client project" />
          </motion.div>

          <motion.div
            className="testimonial-content"
            key={testimonials[currentTestimonial].id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="testimonial-tag">PARTNER&nbsp;&nbsp;&nbsp; TRUSTED</span>
            <h2>What Our Clients<br />Say</h2>
            <div className="testimonial-stars">★★★★☆</div>
            <p className="testimonial-text">“{testimonials[currentTestimonial].text}”</p>
            <div className="testimonial-client">
              <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
              <div>
                <h4>{testimonials[currentTestimonial].name}</h4>
                <span>{testimonials[currentTestimonial].role}</span>
              </div>
            </div>
            <div className="testimonial-controls">
              <button type="button" onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)} aria-label="Next testimonial">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}