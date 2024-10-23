import React from "react";
import "../Pages_Sub1.css";
import beiralake01 from "/src/assets/western_img/beira_lake01.jpeg";
import beiralake02 from "/src/assets/western_img/beira_lake02.jpg";
import beiralake03 from "/src/assets/western_img/beira_lake03.jpg";

const Page9Sub6: React.FC = () => {
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
        <h1>Beira Lake</h1>

        <div className="image-section">
          <img src={beiralake01} alt="Beira Lake View 01" />
          <img src={beiralake02} alt="Beira Lake View 02" />
          <img src={beiralake03} alt="Beira Lake View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
              Beira Lake is a tranquil body of water located in the heart of
              Colombo, offering a peaceful escape amidst the bustling city. This
              scenic lake has a long history dating back to the Portuguese and
              British colonial periods, when it was used for both defensive and
              commercial purposes. Today, it is a popular recreational spot,
              where visitors can enjoy leisurely boat rides, stroll along the
              lakeside paths, or simply take in the serene views.
              <br />
              The most iconic feature of Beira Lake is the small island in the
              center, home to the picturesque Seema Malakaya, a Buddhist temple
              that was designed by renowned architect Geoffrey Bawa. The temple,
              with its stunning reflection on the lake, is a serene place for
              meditation and contemplation. The surrounding greenery and
              birdlife, such as cormorants and pelicans, add to the lake’s
              peaceful charm.
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
              <li>Gangaramaya Temple</li>
              <li>Viharamahadevi Park</li>
              <li>Galle Face Green</li>
              <li>Arcade Independence Square</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub6;
