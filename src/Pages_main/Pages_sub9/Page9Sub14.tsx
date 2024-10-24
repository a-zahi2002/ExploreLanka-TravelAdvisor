import React from "react";
import "../Pages_Sub1.css";
import arcade01 from "/src/assets/western_img/arcade01.png";
import arcade02 from "/src/assets/western_img/arcade02.jpeg";
import arcade03 from "/src/assets/western_img/arcade03.jpg";

const Page9Sub14: React.FC = () => {
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
        <h1>Arcade Independence Square</h1>

        <div className="image-section">
          <img src={arcade01} alt="Arcade Independence Square View 01" />
          <img src={arcade02} alt="Arcade Independence Square View 02" />
          <img src={arcade03} alt="Arcade Independence Square View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            Arcade Independence Square is a beautifully restored colonial-era building complex located in the heart of Colombo. Originally built as a mental asylum during the British colonial period, it has been transformed into a chic shopping, dining, and entertainment hub. The architecture blends colonial charm with modern amenities, featuring grand facades, large courtyards, and manicured gardens, making it a popular destination for both locals and tourists.
              <br />
              The Arcade offers a range of high-end boutiques, trendy cafes, restaurants, and a cinema, providing a perfect space for leisure and relaxation. Whether you’re looking to shop for local and international brands, enjoy a meal, or simply take in the history and ambiance, the complex is a versatile place to unwind. The open courtyards and reflecting pools also create a serene environment, perfect for a relaxing evening stroll.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/beira+lake+colombo/data=!4m2!3m1!1s0x3ae2591640b4e0b3:0x14fcac803e83edbd?sa=X&ved=1t:155783&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Independence Memorial Hall</li>
              <li>Viharamahadevi Park</li>
              <li>Colombo National Museum</li>
              <li>Gangaramaya Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub14;
