import React from "react";
import "../Pages_sub1.css";

const Page7Sub10: React.FC = () => {
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
        <h1>Mannar Madu Madha Church</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/mm1.jpg" alt="MMM View 1" />
          <img src="/src/Pages_main/Northern img/mm2.jpg" alt="MMM View 2" />
          <img src="/src/Pages_main/Northern img/mm3.jpg" alt="MMM View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Mannar Madu Madha Church, located in Mannar, Sri Lanka, is a revered shrine dedicated to Our Lady of Madhu, also known as Madu Madha. This historic church holds significant spiritual importance and attracts both Hindu and Christian pilgrims. The church is known for its serene atmosphere and beautiful surroundings, nestled among lush greenery. It features a stunning blend of architectural styles, with intricate carvings and vibrant decorations that reflect the rich cultural heritage of the region. Madu Madha Church is particularly famous for its annual festivals, which draw large crowds and showcase traditional rituals and celebrations. The church stands as a symbol of peace and harmony, making it a captivating destination for visitors seeking spiritual solace and cultural insight in Sri Lanka.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mannar, Sri Lanka</li>
              <li>Best Time to Visit: April to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/h9iCi1bjX9H7eMSk8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Thiruketheeswaram shivan temple</li>
              <li>Mannar light house</li>
              <li>Mannar kunchikulam bridge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub10;