import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 98152-48123</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Kaller Bhaini Near Bus Stand, Dakala Road, Punjab</span>
          </div>
          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <span>anilsharma81376@gmail.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube className="social-icon" />
            </a>
          </div>
          
          {/* Newsletter Signup */}
          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Punjab Studio Photography. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
