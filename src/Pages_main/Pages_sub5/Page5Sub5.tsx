import React from "react";
import "../Pages_Sub1.css";
import Lovamahapaya1 from "../../NCP_Images/Lovamahapaya1.jpg";
import Lovamahapaya2 from "../../NCP_Images/Lovamahapaya2.jpg";
import Lovamahapaya3 from "../../NCP_Images/Lovamahapaya3.jpg";

const Page5Sub5: React.FC = () => {
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
        <h1>Lovamahapaya (Brazen Palace)</h1>
        <div className="image-section">
          <img src={Lovamahapaya1} alt="Lovamahapaya View 1" />
          <img src={Lovamahapaya2} alt="Lovamahapaya View 2" />
          <img src={Lovamahapaya3} alt="Lovamahapaya View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Explore the ancient Lovamahapaya, also known as the Brazen Palace,
              a majestic structure that once housed a stunning bronze roof. This
              historic site is a testament to Sri Lanka's rich cultural
              heritage, offering breathtaking views of the surrounding
              landscape. The palace's unique architecture and stunning artwork
              make it a must-visit destination for anyone interested in history,
              art, and culture. As you explore the palace's many ruins, you'll
              discover a treasure trove of ancient artifacts and relics,
              including intricate carvings, sculptures, and murals. The palace's
              tranquil atmosphere is further enhanced by the surrounding
              gardens, which are home to a variety of flora and fauna.
              Lovamahapaya is a place of great historical significance, and
              visitors can feel the energy and tranquility of the palace as they
              explore its many wonders. Whether you're a history enthusiast, an
              art lover, or simply looking for a peaceful retreat, Lovamahapaya
              is a must-visit destination in Sri Lanka.
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

export default Page5Sub5;
