import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub10: React.FC = () => {
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

        <h1>Samanalawewa Resorvior</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p>Samanalawewa Reservoir is situated close to Belihuloya and it can be accessed via the road that runs from Pambahinna junction.
          It is a reservoir built to generate hydro power. Due to its depth, it is not advisable to bath or swim here.
          It is one of the landmarks you will see when you travel uphill from Belihuloya.</p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Samanalawewa+Reservoir/@6.6640847,80.7342525,13z/data=!3m1!4b1!4m6!3m5!1s0x3ae3f52f629b778b:0xc32d73885770e176!8m2!3d6.675005!4d80.7865558!16s%2Fg%2F11b6jgngql?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
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

export default Page1Sub10;
