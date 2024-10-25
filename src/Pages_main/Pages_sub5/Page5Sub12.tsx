import React from "react";
import "../Pages_Sub1.css";

const Page5Sub12: React.FC = () => {
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
        <h1>Kala Wewa Reservoir</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Kala Wewa Reservoir View 1" />
          <img src="/path-to-image2.jpg" alt="Kala Wewa Reservoir View 2" />
          <img src="/path-to-image3.jpg" alt="Kala Wewa Reservoir View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Explore the majestic Kala Wewa Reservoir, a stunning ancient
              wonder that dates back to the 12th century. This historic site is
              a testament to Sri Lanka's rich cultural heritage, offering
              breathtaking views of the surrounding landscape. The reservoir's
              unique architecture and stunning artwork make it a must-visit
              destination for anyone interested in history, art, and culture. As
              you explore the reservoir's many ruins, you'll discover a treasure
              trove of ancient artifacts and relics, including intricate
              carvings, sculptures, and murals. The reservoir's tranquil
              atmosphere is further enhanced by the surrounding gardens, which
              are home to a variety of flora and fauna. Kala Wewa Reservoir is a
              place of great historical significance, and visitors can feel the
              energy and tranquility of the reservoir as they explore its many
              wonders. Whether you're a history enthusiast, an art lover, or
              simply looking for a peaceful retreat, Kala Wewa Reservoir is a
              must-visit destination in Sri Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kala Wewa, Sri Lanka</li>
              <li>Best Time to Visit: March to October</li>
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
              <li>Ancient Temple Ruins</li>
              <li>Local Flora and Fauna</li>
              <li>Nearby Villages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub12;
