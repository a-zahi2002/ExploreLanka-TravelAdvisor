import React from "react";
import "../Pages_Sub1.css";
import briefgarden01 from "/src/assets/western_img/brief_garden01.jpeg";
import briefgarden02 from "/src/assets/western_img/brief_garden02.jpg";
import briefgarden03 from "/src/assets/western_img/brief_garden03.jpg";

const Page9Sub12: React.FC = () => {
  const handleClose = () => {
    console.log("Page closed");
    window.history.back();
  };

  return (
    <div className="subpage-container">
      {" "}
      <div className="content-container">
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        {/* Title */}
        <h1>Brief Garden, by Bevis Bawa</h1>

        <div className="image-section">
          <img src={briefgarden01} alt="Brief Garden View 01" />
          <img src={briefgarden02} alt="Brief Garden View 02" />
          <img src={briefgarden03} alt="Brief Garden View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            Brief Garden, located just outside Bentota in Southern Sri Lanka, is a lush, enchanting estate that once served as the private residence of renowned Sri Lankan landscape architect Bevis Bawa. The garden is a masterpiece of design, blending art, nature, and architecture to create a truly unique space. Spread over 5 acres, Brief Garden is a verdant paradise filled with tropical plants, winding paths, charming sculptures, and hidden corners, all carefully designed to evoke a sense of tranquility and artistic expression.
              <br />
              Visitors can explore the beautifully landscaped grounds, admire the mix of tropical and European plants, and appreciate the eclectic collection of sculptures scattered throughout the garden. The house itself, where Bevis Bawa once lived, is an art lover’s dream, adorned with artwork, personal mementos, and vintage furnishings. The overall atmosphere of Brief Garden is one of serene beauty, making it a perfect destination for those seeking relaxation and inspiration.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Beruwala, Kalutara District, Western Province, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Brief+Garden,+by+Bevis+Bawa/@6.4436292,79.4035315,8.8z/data=!4m6!3m5!1s0x3ae22dbe59b3bf0f:0xde956831e0d8d98b!8m2!3d6.45702!4d80.037736!16s%2Fg%2F11gxnvqzx7?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Bentota Beach</li>
              <li>Lunuganga Estate</li>
              <li>Kande Viharaya Temple</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub12;
