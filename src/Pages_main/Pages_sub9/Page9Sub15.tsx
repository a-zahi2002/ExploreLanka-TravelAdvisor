import React from "react";
import "../Pages_Sub1.css";
import bendiyamulla01 from "/src/assets/western_img/bendiyamulla01.jpg";
import bendiyamulla02 from "/src/assets/western_img/bendiyamulla02.jpg";
import bendiyamulla03 from "/src/assets/western_img/bendiyamulla03.jpg";

const Page9Sub15: React.FC = () => {
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
        <h1>Bandiyamulla Tombstone</h1>

        <div className="image-section">
          <img src={bendiyamulla01} alt="Bandiyamulla Tombstone View 01" />
          <img src={bendiyamulla02} alt="Bandiyamulla Tombstone View 02" />
          <img src={bendiyamulla03} alt="Bandiyamulla Tombstone View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            The Bandiyamulla Tombstone, located in Gampaha, Sri Lanka, is a lesser-known historical site, rich in local significance and intrigue. It is believed to be a monument marking the grave of a prominent figure from the region's past, possibly dating back to colonial times. The tombstone, surrounded by a serene rural setting, reflects the simple yet poignant memorial practices of the era, and its exact historical background often piques the curiosity of visitors and historians alike.
              <br />
              The site itself is relatively quiet and not heavily frequented by tourists, making it an interesting spot for those keen on exploring Sri Lanka’s hidden historical landmarks. Though there is limited information available on the exact origins of the tombstone, its presence speaks to the long-standing history and the cultural tapestry of the Gampaha district.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Gampaha, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Bandiyamulla+Cemetery/@7.0804166,80.0121604,15z/data=!4m6!3m5!1s0x3ae2fc0648e4334f:0xb518d7a95e02ab08!8m2!3d7.0804166!4d80.0121604!16s%2Fg%2F1tglxdnr?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
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
              <li>Bopagama Ella</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub15;
