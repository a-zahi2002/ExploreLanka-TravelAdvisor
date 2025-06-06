import React from "react";
import "../Pages_Sub1.css";

const Page5Sub13: React.FC = () => {
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
        <h1>Polonnaruwa Vatadage</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Polonnaruwa Vatadage View 1" />
          <img src="/path-to-image2.jpg" alt="Polonnaruwa Vatadage View 2" />
          <img src="/path-to-image3.jpg" alt="Polonnaruwa Vatadage View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Marvel at the stunning Polonnaruwa Vatadage, a majestic ancient
              wonder that dates back to the 12th century. This sacred site is a
              must-visit destination for anyone interested in history, art, and
              culture. As you explore the vatadage's many ruins, you'll discover
              a treasure trove of ancient artifacts and relics, including
              intricate carvings, sculptures, and murals. The vatadage's
              tranquil atmosphere is further enhanced by the surrounding
              gardens, which are home to a variety of flora and fauna.
              Polonnaruwa Vatadage is a place of great historical significance,
              and visitors can feel the energy and tranquility of the vatadage
              as they explore its many wonders. Whether you're a history
              enthusiast, an art lover, or simply looking for a peaceful
              retreat, Polonnaruwa Vatadage is a must-visit destination in Sri
              Lanka.
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
              <li>Royal Palace of King Parakramabahu</li>
              <li>Parakrama Samudraya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub13;
