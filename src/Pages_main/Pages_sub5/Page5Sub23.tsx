import React from "react";
import "../Pages_Sub1.css";

const Page5Sub23: React.FC = () => {
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
        <h1>Polonnaruwa Museum</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Polonnaruwa Museum View 1" />
          <img src="/path-to-image2.jpg" alt="Polonnaruwa Museum View 2" />
          <img src="/path-to-image3.jpg" alt="Polonnaruwa Museum View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Explore the fascinating Polonnaruwa Museum, a treasure trove of
              ancient artifacts and relics that showcase Sri Lanka's rich
              cultural heritage. This museum is a must-visit destination for
              anyone interested in history, art, and culture. As you wander
              through the museum's many exhibits, you'll discover a stunning
              collection of artifacts, including intricate carvings, sculptures,
              and murals. The museum's tranquil atmosphere is further enhanced
              by the surrounding gardens, which are home to a variety of flora
              and fauna. Polonnaruwa Museum is a place of great historical
              significance, and visitors can feel the energy and tranquility of
              the museum as they explore its many wonders. Whether you're a
              history enthusiast, an art lover, or simply looking for a unique
              experience, Polonnaruwa Museum is a must-visit destination in Sri
              Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Polonnaruwa, Sri Lanka</li>
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
              <li>Polonnaruwa Vatadage</li>
              <li>Royal Palace of King Parakramabahu</li>
              <li>Gal Vihara</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub23;
