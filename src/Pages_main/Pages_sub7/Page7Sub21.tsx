import React from "react";
import "../Pages_sub1.css";

const Page7Sub21: React.FC = () => {
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
        <h1>Naayaru Lagoon</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/nl1.jpg" alt="nl View 1" />
          <img src="/src/Pages_main/Northern img/nl2.jpg" alt="nl View 2" />
          <img src="/src/Pages_main/Northern img/nl3.jpg" alt="nl View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Naayaru Lagoon, located near the coastal town of Naayaru in Sri Lanka, is a stunning natural feature known for its picturesque landscapes and rich biodiversity. The lagoon is characterized by its serene waters, surrounded by lush vegetation and wildlife, making it a popular destination for birdwatchers and nature enthusiasts. It serves as an important ecosystem, providing habitat for various species of birds, fish, and other wildlife. The area is also a vital resource for local communities, supporting fishing and agriculture. Visitors to Naayaru Lagoon can enjoy tranquil boat rides, photography opportunities, and peaceful strolls along its banks, making it a perfect spot for relaxation and appreciating the beauty of Sri Lanka's natural environment.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mullativu, Sri Lanka</li>
              <li>Best Time to Visit: March to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/fRydXEFxrAsYfnur7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Chundikulam beach</li>
              <li>Puthukudiyirupu war museum</li>
              <li>Submarine yard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub21;