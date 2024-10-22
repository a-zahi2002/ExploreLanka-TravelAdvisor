import React from "react";
import "../Pages_Sub1.css";

const Page5Sub6: React.FC = () => {
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
        <h1>Royal Palace of King Vijayabahu I</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Royal Palace View 1" />
          <img src="/path-to-image2.jpg" alt="Royal Palace View 2" />
          <img src="/path-to-image3.jpg" alt="Royal Palace View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Step into the majestic Royal Palace of King Vijayabahu I, a
              stunning ancient wonder that dates back to the 11th century. This
              historic site is a testament to Sri Lanka's rich cultural
              heritage, offering breathtaking views of the surrounding
              landscape. The palace's unique architecture and stunning artwork
              make it a must-visit destination for anyone interested in history,
              art, and culture. As you explore the palace's many ruins, you'll
              discover a treasure trove of ancient artifacts and relics,
              including intricate carvings, sculptures, and murals. The palace's
              tranquil atmosphere is further enhanced by the surrounding
              gardens, which are home to a variety of flora and fauna. The Royal
              Palace of King Vijayabahu I is a place of great historical
              significance, and visitors can feel the energy and tranquility of
              the palace as they explore its many wonders. Whether you're a
              history enthusiast, an art lover, or simply looking for a peaceful
              retreat, the Royal Palace of King Vijayabahu I is a must-visit
              destination in Sri Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Polonnaruwa, Sri Lanka</li>
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
              <li>Parakrama Samudraya</li>
              <li>Nissanka Latha Mandapaya</li>
              <li>Polonnaruwa Archaeological Museum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub6;
