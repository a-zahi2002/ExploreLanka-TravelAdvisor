import React from "react";
import "../Pages_Sub1.css";
import bopagamaella01 from "/src/assets/western_img/ella_falls01.jpg";
import bopagamaella02 from "/src/assets/western_img/ella_falls02.jpeg";
import bopagamaella03 from "/src/assets/western_img/ella_falls03.webp";

const Page9Sub13: React.FC = () => {
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
        <h1>Alagiyawanna Ella Falls</h1>

        <div className="image-section">
          <img src={bopagamaella01} alt="Bopagama Ella Falls View 01" />
          <img src={bopagamaella02} alt="Bopagama Ella Falls View 02" />
          <img src={bopagamaella03} alt="Bopagama Ella Falls View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            Alagiyawanna Ella Falls is a picturesque waterfall nestled in the lush greenery of the Gampaha District in Sri Lanka. This lesser-known natural gem is about 30 meters high and cascades over rocky steps, creating a series of beautiful tiers. Surrounded by dense forest and a tranquil environment, Bopagama Ella offers visitors a peaceful escape from the urban hustle, making it ideal for nature lovers and those seeking a quiet retreat.
              <br />
              The waterfall is not heavily commercialized, which adds to its charm as an off-the-beaten-path destination. Visitors can enjoy a short hike through verdant surroundings to reach the falls, where they can relax by the cool waters and take in the pristine beauty of the natural setting. The area around the waterfall is also a great spot for birdwatching and photography.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Gampaha District, Sri Lanka</li>
              <li>Best Time to Visit: May to September</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Bopagama+Ella/@7.0713069,80.163696,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae30160f2964401:0x4720871b499aebd1!8m2!3d7.0713069!4d80.163696!16s%2Fg%2F11f04q2g6t?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Henarathgoda Botanical Garden</li>
              <li>Attanagalla Raja Maha Vihara</li>
              <li>Seethawaka Wet Zone Botanic Gardens</li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub13;
