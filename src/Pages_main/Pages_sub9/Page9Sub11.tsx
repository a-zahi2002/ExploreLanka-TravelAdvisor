import React from "react";
import "../Pages_Sub1.css";
import duchhospital01 from "/src/assets/western_img/duch_hospital01.jpg";
import duchhospital02 from "/src/assets/western_img/duch_hospital02.jpg";
import duchhospital03 from "/src/assets/western_img/duch_hospital03.jpg";

const Page9Sub11: React.FC = () => {
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
        <h1>Dutch Hospital Shopping Precinct</h1>

        <div className="image-section">
          <img src={duchhospital01} alt="Dutch Hospital Shopping Precinct View 01" />
          <img src={duchhospital02} alt="Dutch Hospital Shopping Precinct View 02" />
          <img src={duchhospital03} alt="Dutch Hospital Shopping Precinct View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            The Dutch Hospital Shopping Precinct, located in the heart of Colombo, is one of the city's most iconic colonial-era buildings, transformed into a vibrant hub for shopping, dining, and leisure. Originally built in the 17th century by the Dutch to serve as a hospital, this beautifully restored building showcases Dutch colonial architecture with its wide verandas, high ceilings, and spacious courtyards. Today, it's a favorite spot for both tourists and locals, blending history with modern comforts.
              <br />
              The precinct offers a range of high-end boutiques, local handicraft stores, art galleries, and popular restaurants. It’s a great place to shop for souvenirs, enjoy fine dining, or relax with a drink in the shaded courtyards. With its relaxed atmosphere, live music performances, and cultural events, it.s an ideal place to spend a leisurely afternoon or evening.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo Fort, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Dutch+Hospital+-+Shopping+Precinct/@6.9335201,79.8435129,15z/data=!4m6!3m5!1s0x3ae25925b36f077b:0x4b03dbf8db84c4e7!8m2!3d6.9335201!4d79.8435129!16s%2Fm%2F08078rb?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Colombo Fort</li>
              <li>Galle Face Green</li>
              <li>Colombo Lighthouse</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub11;
