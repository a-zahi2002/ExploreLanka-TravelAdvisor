import React from "react";
import "../Pages_Sub1.css";
import kelani01 from "/src/assets/western_img/kelanitemple01.jpeg";
import kelani02 from "/src/assets/western_img/kelanitemple02.jpeg";
import kelani03 from "/src/assets/western_img/kelanitemple03.jpeg";

const Page9Sub9: React.FC = () => {
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
        <h1>Kelaniya Raja Maha Vihara</h1>

        <div className="image-section">
          <img src={kelani01} alt="Kelani Temple View 01" />
          <img src={kelani02} alt="Kelani Temple View 02" />
          <img src={kelani03} alt="Kelani Temple View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            Kelaniya Raja Maha Vihara is one of Sri Lanka’s most revered Buddhist temples, located just 7 kilometers from Colombo. According to legend, this sacred site was visited by Lord Buddha during his third and final visit to the island, around 500 BCE, making it a place of deep historical and spiritual significance. The temple has been a pilgrimage site for centuries and is known for its rich cultural heritage, stunning artwork, and grand religious festivals.
              <br />
              The temple is famed for its exquisite paintings, sculptures, and a massive reclining Buddha statue, all depicting important events in Buddhist history. The most notable feature is the series of murals by Solias Mendis, a renowned 20th-century artist whose work captures the essence of Sri Lankan Buddhist traditions. Kelaniya is also the focal point of the annual Duruthu Perahera, a vibrant procession held in January that draws thousands of devotees and tourists alike.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kelaniya, Sri Lanka</li>
              <li>Best Time to Visit: January or November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Kelaniya+Raja+Maha+Viharaya/@6.951826,79.9184698,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae258281edd1365:0xa6dfa23ff2e37d44!8m2!3d6.951826!4d79.9184698!16zL20vMGY0ODA2?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Kelani River</li>
              <li>Biyagama Wetland Park</li>
              <li>Colombo Dutch Museum</li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub9;
