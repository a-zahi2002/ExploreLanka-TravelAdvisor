import React from "react";
import "../Pages_sub1.css";

const Page7Sub25: React.FC = () => {
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
        <h1>Pavatkulam</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/pk1.jpg" alt="pk View 1" />
          <img src="/src/Pages_main/Northern img/pk2.jpg" alt="pk View 2" />
          <img src="/src/Pages_main/Northern img/pk3.jpg" alt="pk View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>Pavatkulam, located in the Vavuniya District of Sri Lanka, is a small village known for its picturesque landscapes and agricultural significance. The area is characterized by its lush greenery and serene environment, making it a peaceful place for residents and visitors alike. Pavatkulam is primarily an agricultural community, with many inhabitants engaged in farming and related activities. The village's proximity to important roadways enhances its connectivity, contributing to local trade and commerce. Additionally, Pavatkulam reflects the rich cultural heritage of the Vavuniya region, with traditional practices and community events that showcase the local way of life. Its tranquil setting and community spirit make Pavatkulam a charming destination for those interested in experiencing rural life in northern Sri Lanka.

            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Vavuniya, Sri Lanka</li>
              <li>Best Time to Visit: March to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/49UgvZCLokSXLfAz6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Vavuniyakulam</li>
              <li>Archaeological museum</li>
              <li>Kalvari church</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default Page7Sub25;