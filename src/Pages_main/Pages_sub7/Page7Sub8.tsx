import React from "react";
import "../Pages_sub1.css";

const Page7Sub8: React.FC = () => {
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
        <h1>Neduntivu(Island)</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/net1.jpg" alt="Neduntivu View 1" />
          <img src="/src/Pages_main/Northern img/net2.jpg" alt="Neduntivu View 2" />
          <img src="/src/Pages_main/Northern img/net3.jpg" alt="Neduntivu View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Neduntivu, also known as Delft Island, is a captivating island located in the Palk Strait, north of Jaffna, Sri Lanka. Known for its rugged beauty and unique landscape, the island features vast coral reefs, limestone formations, and a rich biodiversity, making it an attractive destination for nature enthusiasts. Neduntivu is home to a small population, primarily engaged in fishing and agriculture, and offers a glimpse into the traditional way of life of its inhabitants. Key attractions include the iconic Delft Fort, remnants of colonial architecture, and the picturesque beaches that invite relaxation and exploration. The island can be reached by ferry, providing visitors with an opportunity to enjoy its serene environment and cultural heritage, making it a hidden gem in the Jaffna Peninsula.

        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Neduntivu, Sri Lanka</li>
              <li>Best Time to Visit: March to October</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Kt6oEzQ7JnzzXkFDA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Nainativu(Island)</li>
              <li>Analativu(another small Island)</li>
              <li>Kankesanthurai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub8;