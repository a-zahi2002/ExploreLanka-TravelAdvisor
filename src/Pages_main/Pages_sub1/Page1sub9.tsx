import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub9: React.FC = () => {
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

        <h1>Kithulgala Water Rafting</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p> Kitulgala's main attraction is White Water Rafting where you can ride the tides of Kelani River.
            Other than that it's popular for sports like confidence jump, Stream Sliding, Waterfall abseiling, Jungle trekking.
             Most of the visitors for the adventure sporting are from Colombo.
           Whoever who goes to Kithulgala never misses to do rafting.</p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Kithulgala+Water+Rafting/@6.9903571,80.4393317,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae3a1046e1c7767:0xa88f353cfde2f6ad!8m2!3d6.9903518!4d80.4419066!16s%2Fg%2F11qt410sn4?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Beira Lake</li>
              <li>Viharamahadevi Park</li>
              <li>Colombo National Museum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1Sub9;
