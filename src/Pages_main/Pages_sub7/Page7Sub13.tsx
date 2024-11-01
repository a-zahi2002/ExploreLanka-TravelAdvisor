import React from "react";
import "../Pages_sub1.css";

const Page7Sub13: React.FC = () => {
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
        <h1>Adam's bridge's edge(Ram Setu)</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/rs1.jpg" alt="ab View 1" />
          <img src="/src/Pages_main/Northern img/rs2.jpg" alt="ab View 2" />
          <img src="/src/Pages_main/Northern img/rs3.jpg" alt="ab View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Mannar Adam's Bridge, also known as Ram Setu, is a natural limestone shoal that connects Mannar Island in Sri Lanka to Dhanushkodi in India. This geological formation is renowned for its stunning landscapes and rich mythology, believed by many to be the bridge mentioned in the ancient Indian epic, the Ramayana. The edge of Adam's Bridge offers breathtaking views of the turquoise waters and is a popular spot for photography and exploration. Visitors can witness the unique flora and fauna of the area, as well as the fascinating marine life in the surrounding waters. The site holds significant cultural and historical importance, making it a captivating destination for those interested in both natural beauty and legendary lore. The serene environment and picturesque surroundings make it an ideal place for contemplation and appreciating the natural wonders of the region.

        </p>
        
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mannar, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/pbVNco5dv22KB2Qv8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Mannar Madu Madha church</li>
              <li>Mannar kunchikulam bridge</li>
              <li>Mannar light house</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub13;