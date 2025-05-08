import React, { useState } from 'react'; 
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryPreview from '../components/GalleryPreview';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 
import image01 from '../assets/01.jpeg';
import image02 from '../assets/02.jpg';
import image03 from '../assets/03.jpeg';
import image04 from '../assets/04.jpg';
import image05 from '../assets/05.jpeg';
import image06 from '../assets/06.jpeg';
import image07 from '../assets/07.jpeg';
import image08 from '../assets/08.jpeg';

const Home = () => {
  const navigate = useNavigate();  
  const packages = [
    {
      title: "PUNJAB STUDIO FULL HD",
      price: "₹49,999",
      features: [
        "Traditional Photography",
        "Videography",
        "Cinematic Videography",
        "Candid Photography (HD)",
        "Drone Coverage",
        "Same Day Edit",
        "200 Photo Premium Album",
        "2 Photo Frames (8x12)",
        "Wedding Highlight Film (3-5 min)",
        "Wedding Teaser (1 min)",
        "Full Wedding Photo+Video (FULL HD)",
        "USB Storage Device",
        "2 Month Delivery"
      ],
      popular: false
    },
    {
      title: "PUNJAB MAX ASLI 4K",
      price: "₹89,999",
      features: [
        "Cinematic Videography (4K)",
        "Candid Photography (8K Ultra HD)",
        "Traditional Photography",
        "Videography with Multiple Angles",
        "Reel-graphy (Social Media Content)",
        "DJI Drones (4K Aerial Shots)",
        "Same Day Edit+ (Extended Version)",
        "300 Photo Luxury Suitcase Album",
        "5 Premium Photo Frames + Sky Light Frame",
        "Wedding Highlight (ASLI 4K, 5-7 min)",
        "Wedding Teaser + Save the Date Video",
        "Full Wedding Photo + Video Coverage",
        "Custom Theme Song Composition",
        "2 Special Wedding Reels",
        "Type-C High-Speed Storage Device",
        "Online Gallery with Password Protection",
        "1 Month Fast Delivery Guarantee"
      ],
      popular: true
    },
    {
      title: "PUNJAB ROYAL 8K",
      price: "₹1,49,999",
      features: [
        "8K Ultra HD Cinematic Coverage",
        "Dual Camera Candid Photography",
        "Traditional & Contemporary Shoots",
        "3-Camera Videography Setup",
        "Daily Reel-graphy Updates",
        "DJI Inspire 3 Drone (8K)",
        "Live Same Day Edit Screening",
        "500 Photo Royal Leather Album",
        "10 Premium Frames + Digital Frame",
        "Wedding Highlight (8K, 10-15 min)",
        "3 Teaser Videos + Save the Date",
        "Complete Wedding Documentation",
        "Original Music Composition",
        "5 Special Wedding Reels",
        "SSD Storage with Backup",
        "Private Online Gallery + Mobile App",
        "15 Days Express Delivery",
        "Dedicated Project Manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rahul & Priya",
      date: "December 2023",
      text: "Punjab Studio captured our wedding so beautifully! The 4K package was worth every penny. The highlight film made us relive our special day.",
      rating: 5
    },
    {
      name: "Harpreet Singh",
      date: "October 2023",
      text: "The team's professionalism and creativity exceeded our expectations. The same-day edit had all our guests talking for weeks!",
      rating: 5
    },
    {
      name: "Neha Kapoor",
      date: "August 2023",
      text: "From pre-wedding to reception, every moment was captured perfectly. The photo album quality is exceptional.",
      rating: 4
    }
  ];

  const [showFullGallery, setShowFullGallery] = useState(false);

  const galleryItems = [
    {
      type: "image",
      src: image01,
      category: "Wedding"
    },
    {
      type: "image",
      src: image02,
      category: "Cinematic"
    },
    {
      type: "image",
      src: image03,
      category: "Pre-Wedding"
    },
    {
      type: "image",
      src: image04,
      category: "Traditional"
    },
    // Additional gallery items for full view
    {
      type: "image",
      src: image05,
      category: "Reception"
    },
    {
      type: "image",
      src: image06,
      category: "Candid"
    },
    {
      type: "image",
      src: image07,
      category: "Traditional"
    },
    {
      type: "image",
      src: image08,
      category: "Pre-Wedding"
    }
  ];

  const toggleGallery = () => {
    setShowFullGallery(!showFullGallery);
  };

  const handleViewPackages = () => {
    // Scroll to packages section
    const packagesSection = document.querySelector('.packages-section');
    packagesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    // Navigate to contact page
    navigate('/contact');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Preserve Your <span>Timeless Memories</span></h1>
          <p className="subtitle">Professional photography & videography for weddings, pre-weddings, and all your special moments</p>
          <div className="hero-buttons">
            <button className="cta-primary" onClick={handleViewPackages}>View Packages</button>
            <button className="cta-secondary" onClick={handleContactClick}>Book Consultation</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>850+</h3>
          <p>Events Captured</p>
        </div>
        <div className="stat-item">
          <h3>12+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3>4K/8K</h3>
          <p>Premium Quality</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="section-header">
          <h2>Our Premium Packages</h2>
          <p className="section-subtitle">Tailored solutions for every budget and requirement</p>
        </div>
        <div className="packages-container">
          {packages.map((pkg, index) => (
            <ServiceCard 
              key={index} 
              title={pkg.title} 
              features={pkg.features} 
              price={pkg.price}
              popular={pkg.popular}
            />
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <div className="section-header">
          <h2>Our Recent Work</h2>
          <p className="section-subtitle">A glimpse of our photography & videography style</p>
        </div>
        
        {/* Show first 4 items initially, all items when expanded */}
        <GalleryPreview items={showFullGallery ? galleryItems : galleryItems.slice(0, 3)} />
        
        <button 
          className="view-more" 
          onClick={toggleGallery}
        >
          {showFullGallery ? 'Show Less' : 'View Full Gallery'}
        </button>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Client Love</h2>
          <p className="section-subtitle">What our couples say about us</p>
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              date={testimonial.date}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="section-header">
          <h2>Our Seamless Process</h2>
          <p className="section-subtitle">How we create magic for your special day</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>We understand your vision and requirements</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Planning</h3>
            <p>Customized shot list and schedule</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Shooting</h3>
            <p>Professional coverage of your event</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Delivery</h3>
            <p>High-quality edited photos and videos</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to Capture Your Story?</h2>
          <p>Limited dates available for 2024-2025. Book your session today!</p>
          <div className="cta-buttons">
          <button className="cta-primary" onClick={handleContactClick}>Get in Touch</button>
            <button className="cta-secondary">Call: 98152-48123</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;