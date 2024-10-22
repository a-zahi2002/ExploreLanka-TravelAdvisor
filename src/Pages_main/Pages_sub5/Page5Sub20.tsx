import React from "react";
import "../Pages_Sub1.css";

const Page5Sub20: React.FC = () => {
  const handleClose = () => {
    console.log("Page closed");
    window.history.back();
  };

  return (
    <div className="subpage-container">
      <div className="content-container">
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>
        <h1>Mirisawetiya Dagaba</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Mirisawetiya Dagaba View 1" />
          <img src="/path-to-image2.jpg" alt="Mirisawetiya Dagaba View 2" />
          <img src="/path-to-image3.jpg" alt="Mirisawetiya Dagaba View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Discover the ancient Mirisawetiya Dagaba, a historic stupa that
              dates back to the 2nd century BC. This sacred site is a must-visit
              destination for anyone interested in history, art, and culture. As
              you explore the stupa's many levels and ruins, you'll discover a
              treasure trove of ancient artifacts and relics, including
              intricate carvings, sculptures, and murals. The stupa's stunning
              architecture and unique design make it a must-visit destination
              for anyone interested in history and architecture. Mirisawetiya
              Dagaba is a place of great historical significance, and visitors
              can feel the energy and tranquility of the stupa as they explore
              its many wonders. Whether you're a history enthusiast, an art
              lover, or simply looking for a unique experience, Mirisawetiya
              Dagaba is a must-visit destination in Sri Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Anuradhapura, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Ruwanwelisaya</li>
              <li>Thuparama Dagaba</li>
              <li>Abhayagiri Monastery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub20;
