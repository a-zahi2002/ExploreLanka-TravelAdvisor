import React from "react";
import "../Pages_sub1.css";

const Page7Sub17: React.FC = () => {
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
        <h1>Kilinochchi war memorial</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/kwm1.jpg" alt="kwm View 1" />
          <img src="/src/Pages_main/Northern img/kwm2.jpg" alt="kwm View 2" />
          <img src="/src/Pages_main/Northern img/kwm3.jpg" alt="kwm View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>The Kilinochchi War Memorial, located in Kilinochchi, Sri Lanka, is a poignant site dedicated to honoring the sacrifices made during the Sri Lankan Civil War. Inaugurated in 2010, the memorial features a series of monuments, plaques, and sculptures that pay tribute to the lives lost and the resilience of the local community. The site is surrounded by lush greenery and serves as a place for reflection and remembrance, drawing visitors who wish to pay their respects. The memorial also symbolizes the hope for peace and reconciliation in a region deeply affected by conflict. It stands as a significant landmark in Kilinochchi, emphasizing the importance of remembering the past while looking towards a more harmonious future.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kilinochchi, Sri Lanka</li>
              <li>Best Time to Visit: March to October</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/ARLnY72wvm6pgquv7"
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
              <li>Iranaimadu tank</li>
              <li>Elephant pass</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub17;