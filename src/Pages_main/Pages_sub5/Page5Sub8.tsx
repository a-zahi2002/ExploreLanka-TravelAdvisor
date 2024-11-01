import React from "react";
import "../Pages_Sub1.css";
import AnuradhapuraMuseum1 from "../../NCP_Images/AnuradhapuraMuseum1.jpg";
import AnuradhapuraMuseum2 from "../../NCP_Images/AnuradhapuraMuseum2.jpg";
import AnuradhapuraMuseum3 from "../../NCP_Images/AnuradhapuraMuseum3.jpg";

const Page5Sub8: React.FC = () => {
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
        <h1>Anuradhapura Archaeological Museum</h1>
        <div className="image-section">
          <img src={AnuradhapuraMuseum1} alt="Museum View 1" />
          <img src={AnuradhapuraMuseum2} alt="Museum View 2" />
          <img src={AnuradhapuraMuseum3} alt="Museum View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Explore the fascinating Anuradhapura Archaeological Museum, a
              treasure trove of ancient artifacts and relics that showcase Sri
              Lanka's rich cultural heritage. This museum is a must-visit
              destination for anyone interested in history, art, and culture. As
              you wander through the museum's many exhibits, you'll discover a
              stunning collection of artifacts, including intricate carvings,
              sculptures, and murals. The museum's tranquil atmosphere is
              further enhanced by the surrounding gardens, which are home to a
              variety of flora and fauna. Anuradhapura Archaeological Museum is
              a place of great historical significance, and visitors can feel
              the energy and tranquility of the museum as they explore its many
              wonders. Whether you're a history enthusiast, an art lover, or
              simply looking for a unique experience, Anuradhapura
              Archaeological Museum is a must-visit destination in Sri Lanka.
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
              <li>Ruwanwelisaya Stupa</li>
              <li>Jaya Sri Maha Bodhi</li>
              <li>Isurumuniya Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub8;
