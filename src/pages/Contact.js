import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import ReviewForm from '../components/ReviewForm';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let's Connect</h1>
          <p className="subtitle">We'd love to hear about your photography needs</p>
        </div>
      </section>

      <div className="contact-container">
        {/* Contact Form Section */}
        <section className="contact-form">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          
          {isSubmitted ? (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We'll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="pre-wedding">Pre-Wedding Shoot</option>
                  <option value="cinematic">Cinematic Videography</option>
                  <option value="traditional">Traditional Photography</option>
                  <option value="drone">Drone Videography</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event and any special requests..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <FaPaperPlane className="button-icon" />
                Send Message
              </button>
            </form>
          )}
        </section>

        {/* Contact Information Section */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p className="info-subtitle">Reach out to us through any of these channels</p>
          
          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+91 98152-48123</p>
              <p>+91 98765-43210 (Alternate)</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h3>Studio Address</h3>
              <p>Kaller Bhaini Near Bus Stand</p>
              <p>Dakala Road, Punjab 148021</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-content">
              <h3>Working Hours</h3>
              <p>Monday - Sunday: 9:00 AM - 8:00 PM</p>
              <p>Emergency shoots: 24/7 available</p>
            </div>
          </div>
        </section>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="section-header">
          <h2>Share Your Experience</h2>
          <p className="section-subtitle">We value your feedback about our services</p>
        </div>
        <ReviewForm />
      </section>
    </div>
  );
};

export default Contact;