import React from "react";
import "../Pages_sub1.css";

const Page7Sub15: React.FC = () => {
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
        <h1>Iranaimadu tank</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/it1.jpg" alt="it View 1" />
          <img src="/src/Pages_main/Northern img/it2.jpg" alt="it View 2" />
          <img src="/src/Pages_main/Northern img/it3.jpg" alt="it View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Iranaimadu Tank, located near the town of Iranaimadu in the Jaffna Peninsula of Sri Lanka, is an important reservoir and a key water source for the surrounding agricultural communities. Constructed during the ancient times, this tank plays a vital role in irrigation, supporting the cultivation of crops in an otherwise arid landscape. The tank is surrounded by lush greenery and offers a tranquil environment, making it a popular spot for both locals and visitors seeking relaxation and natural beauty. Birdwatchers often visit the area, as the tank attracts various migratory bird species. Iranaimadu Tank not only serves as an essential resource for farming but also stands as a testament to the engineering skills of ancient Sri Lankan civilization, making it a significant cultural and historical site in the region.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kilinochchi, Sri Lanka</li>
              <li>Best Time to Visit: March to September</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/L6FbK1NzFhmAsga58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Muripukulam</li>
              <li>Chundikulam beach</li>
              <li>Kilinochchi war memorial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub15;