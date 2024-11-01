import React from "react";
import "../Pages_Sub1.css";
import Avukana1 from "../../NCP_Images/Avukana1.jpg";
import Avukana2 from "../../NCP_Images/Avukana2.jpg";
import Avukana3 from "../../NCP_Images/Avukana3.jpg";

const Page5Sub4: React.FC = () => {
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
        <h1>Avukana Buddha Statue</h1>
        <div className="image-section">
          <img src={Avukana1} alt="Avukana Buddha Statue View 1" />
          <img src={Avukana2} alt="Avukana Buddha Statue View 2" />
          <img src={Avukana3} alt="Avukana Buddha Statue View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Marvel at the majestic Avukana Buddha Statue, a 12-meter-tall
              masterpiece of ancient Sri Lankan artistry. This serene giant is
              nestled in a tranquil setting, inviting visitors to pause and
              reflect on the beauty of Buddhist philosophy. The statue's
              intricate carvings and stunning architecture make it a must-visit
              destination for anyone interested in history, art, and culture. As
              you explore the surrounding area, you'll discover a treasure trove
              of ancient artifacts and relics, including intricate carvings,
              sculptures, and murals. The statue's tranquil atmosphere is
              further enhanced by the surrounding gardens, which are home to a
              variety of flora and fauna. Avukana Buddha Statue is a place of
              great historical significance, and visitors can feel the energy
              and tranquility of the statue as they explore its many wonders.
              Whether you're a history enthusiast, an art lover, or simply
              looking for a peaceful retreat, Avukana Buddha Statue is a
              must-visit destination in Sri Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Avukana, Sri Lanka</li>
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
              <li>Gal Vihara</li>
              <li>Jetavanaramaya</li>
              <li>Ruwanwelisaya Stupa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub4;
