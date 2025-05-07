import React from 'react';
import { FaPlay, FaImages } from 'react-icons/fa';

const GalleryPreview = ({ items }) => {
  return (
    <div className="gallery-preview-container">
      {items.map((item, index) => (
        <div key={index} className="gallery-item">
          {item.type === 'video' ? (
            <div className="video-thumbnail">
              <iframe 
                src={item.src} 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Video"
              ></iframe>
              <div className="play-icon"><FaPlay /></div>
            </div>
          ) : (
            <div className="image-thumbnail">
              <img src={item.src} alt={item.category} />
              <div className="image-overlay">
                <FaImages />
                <span>{item.category}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryPreview;