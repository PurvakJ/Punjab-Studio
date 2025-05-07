import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, date, text, rating }) => {
  return (
    <div className="testimonial-card">
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? 'star-filled' : 'star-empty'} 
          />
        ))}
      </div>
      <p className="testimonial-text">"{text}"</p>
      <div className="client-info">
        <span className="client-name">{name}</span>
        <span className="client-date">{date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;