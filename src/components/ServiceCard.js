import React from 'react';
import { FaCheck, FaCrown } from 'react-icons/fa';

const ServiceCard = ({ title, features, price, popular }) => {
  return (
    <div className={`service-card ${popular ? 'popular' : ''}`}>
      {popular && (
        <div className="popular-badge">
          <FaCrown /> MOST POPULAR
        </div>
      )}
      <div className="card-header">
        <h3>{title}</h3>
        <div className="price">{price}</div>
      </div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheck className="feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="inquiry-button">
        Send Inquiry
      </button>
    </div>
  );
};

export default ServiceCard;