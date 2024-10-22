import React from "react";
import "../Pages_Sub1.css";

const Page5Sub24: React.FC = () => {
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
        <h1>Menik Vihara</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Menik Vihara View 1" />
          <img src="/path-to-image2.jpg" alt="Menik Vihara View 2" />
          <img src="/path-to-image3.jpg" alt="Menik Vihara View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Discover the ancient Menik Vihara, a historic temple that dates
              back to the 12th century. This sacred site is a must-visit
              destination for anyone interested in history, art, and culture. As
              you explore the temple's many buildings and ruins, you'll discover
              a treasure trove of ancient artifacts and relics, including
              intricate carvings, sculptures, and murals. The temple's stunning
              architecture and unique design make it a must-visit destination
              for anyone interested in history and architecture. Menik Vihara is
              a place of great historical significance, and visitors can feel
              the energy and tranquility of the temple as they explore its many
              wonders. Whether you're a history enthusiast, an art lover, or
              simply looking for a unique experience, Menik Vihara is a
              must-visit destination in Sri Lanka.
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

export default Page5Sub24;
