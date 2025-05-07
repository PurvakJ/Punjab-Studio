import React from 'react';
import { FaCamera, FaVideo, FaMagic, FaHeart, FaAward, FaRocket, FaFilm } from 'react-icons/fa';
import './About.css';

const About = () => {
  const approaches = [
    { icon: <FaMagic />, title: "Storytelling", description: "We craft visual narratives that tell the unique story of your special day." },
    { icon: <FaCamera />, title: "Authenticity", description: "We capture genuine emotions that reflect the true essence of your celebration." },
    { icon: <FaFilm />, title: "Cinematic Quality", description: "Our videography brings Hollywood-level production values to your wedding films." },
    { icon: <FaRocket />, title: "Innovative Perspectives", description: "From aerial shots to creative angles, we deliver unique visual experiences." }
  ];

  const reasons = [
    { 
      title: "Cutting-Edge Technology",
      items: [
        "8K Red Cinema Cameras for unmatched clarity",
        "DJI Inspire 3 drones for aerial footage",
        "Professional lighting equipment",
        "High-speed storage for reliable backup"
      ]
    },
    { 
      title: "Unmatched Experience",
      items: [
        "Over a decade in wedding photography",
        "850+ weddings successfully captured",
        "Specialists in Punjabi wedding traditions",
        "Fluent in all wedding styles"
      ]
    },
    { 
      title: "Premium Deliverables",
      items: [
        "Handcrafted luxury albums",
        "Cinematic wedding films with original scores",
        "Same-day edits for instant memories",
        "Online galleries with password protection"
      ]
    }
  ];

  const stats = [
    { number: "850+", label: "Weddings Captured", icon: <FaCamera /> },
    { number: "12+", label: "Years Experience", icon: <FaAward /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaHeart /> },
    { number: "4K/8K", label: "Premium Quality", icon: <FaVideo /> }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__hero-overlay"></div>
        <div className="about__hero-content">
          <h1 className="about__hero-title">PUNJAB STUDIO</h1>
          <p className="about__hero-subtitle">CAPTURING YOUR SPECIAL MOMENTS</p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="about__section about__section--approach">
        <div className="about__container">
          <div className="about__section-header">
            <h2 className="about__section-title">Our Creative Approach</h2>
            <p className="about__section-subtitle">How we transform moments into timeless memories</p>
          </div>
          
          <div className="about__grid about__approach-grid">
            {approaches.map((approach, index) => (
              <div className="about__card about__approach-card" key={index}>
                <div className="about__card-icon about__approach-icon">
                  {approach.icon}
                </div>
                <h3 className="about__card-title">{approach.title}</h3>
                <p className="about__card-text">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about__section about__section--reasons">
        <div className="about__container">
          <div className="about__section-header">
            <h2 className="about__section-title">Why Choose Punjab Studio</h2>
            <p className="about__section-subtitle">What sets us apart from the rest</p>
          </div>
          
          <div className="about__grid about__reasons-grid">
            {reasons.map((reason, index) => (
              <div className="about__card about__reason-card" key={index}>
                <h3 className="about__card-title">{reason.title}</h3>
                <ul className="about__card-list">
                  {reason.items.map((item, i) => (
                    <li className="about__card-list-item" key={i}>
                      <span className="about__bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about__section about__section--stats">
        <div className="about__container">
          <div className="about__grid about__stats-grid">
            {stats.map((stat, index) => (
              <div className="about__card about__stat-card" key={index}>
                <div className="about__card-icon about__stat-icon">
                  {stat.icon}
                </div>
                <h3 className="about__stat-number">{stat.number}</h3>
                <p className="about__card-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;