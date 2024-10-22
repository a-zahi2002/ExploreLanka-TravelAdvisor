import React from "react";
import "../Pages_Sub1.css";

const Page5Sub9: React.FC = () => {
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
        <h1>Ranmasu Uyana</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Ranmasu Uyana View 1" />
          <img src="/path-to-image2.jpg" alt="Ranmasu Uyana View 2" />
          <img src="/path-to-image3.jpg" alt="Ranmasu Uyana View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Discover the ancient Ranmasu Uyana, a stunning historic site that
              dates back to the 8th century. This sacred site is a must-visit
              destination for anyone interested in history, art, and culture. As
              you explore the site's many ruins, you'll discover a treasure
              trove of ancient artifacts and relics, including intricate
              carvings, sculptures, and murals. The site's tranquil atmosphere
              is further enhanced by the surrounding gardens, which are home to
              a variety of flora and fauna. Ranmasu Uyana is a place of great
              historical significance, and visitors can feel the energy and
              tranquility of the site as they explore its many wonders. Whether
              you're a history enthusiast, an art lover, or simply looking for a
              peaceful retreat, Ranmasu Uyana is a must-visit destination in Sri
              Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Anuradhapura, Sri Lanka</li>
              <li>Best Time to Visit: April to August</li>
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
              <li>Jaya Sri Maha Bodhi</li>
              <li>Ruwanwelisaya Stupa</li>
              <li>Abhayagiri Dagaba</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub9;
