import React from "react";
import "../Pages_Sub1.css";

const Page5Sub15: React.FC = () => {
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
        <h1>Royal Palace of King Parakramabahu</h1>
        <div className="image-section">
          <img
            src="/path-to-image1.jpg"
            alt="Royal Palace of King Parakramabahu View 1"
          />
          <img
            src="/path-to-image2.jpg"
            alt="Royal Palace of King Parakramabahu View 2"
          />
          <img
            src="/path-to-image3.jpg"
            alt="Royal Palace of King Parakramabahu View 3"
          />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Explore the majestic Royal Palace of King Parakramabahu, a
              testament to the grandeur and splendor of Sri Lanka's ancient
              kingdoms. This ancient wonder is a must-visit destination for
              anyone interested in history, art, and culture. As you wander
              through the palace's many chambers and halls, you'll discover a
              treasure trove of ancient artifacts and relics, including
              intricate carvings, sculptures, and murals. The palace's stunning
              architecture and unique design make it a must-visit destination
              for anyone interested in history and architecture. The Royal
              Palace of King Parakramabahu is a place of great historical
              significance, and visitors can feel the energy and tranquility of
              the palace as they explore its many wonders. Whether you're a
              history enthusiast, an art lover, or simply looking for a unique
              experience, the Royal Palace of King Parakramabahu is a must-visit
              destination in Sri Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Polonnaruwa, Sri Lanka</li>
              <li>Best Time to Visit: April to September</li>
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
              <li>Gal Vihara</li>
              <li>Polonnaruwa Vatadage</li>
              <li>Lankathilaka Image House</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub15;
