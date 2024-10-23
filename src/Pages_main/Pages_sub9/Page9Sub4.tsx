import React from "react";
import "../Pages_Sub1.css";
import colombomuseum01 from "/src/assets/western_img/Colombo-National-Museum-1.jpg";
import colombomuseum02 from  "/src/assets/western_img/Colombo-National-Museum-2.jpg";
import colombomuseum03 from "/src/assets/western_img/Colombo-National-Museum-3.jpg";



const Page9Sub4: React.FC = () => {
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

       
        <h1>Colombo National Museum</h1>

        
        <div className="image-section">
         <img src={colombomuseum01} alt="Colombo National Museum View 01"/>
         <img src={colombomuseum02} alt="Colombo National Museum View 02"/>
         <img src={colombomuseum03} alt="Colombo National Museum View 03"/>
          
        </div>

        
        <div className="lower-section">
        
          <div className="description">
            <p>
            The Colombo National Museum, also known as the Sri Lanka National Museum, is the largest and most significant museum in the country. Established in 1877 by Sir William Henry Gregory, the then British Governor of Ceylon, this grand building is a treasure trove of Sri Lankan history, culture, and heritage. The museum's colonial-era architecture is as impressive as the artifacts housed within, including ancient statues, royal regalia, weapons, traditional artwork, and historical documents.<br />The Colombo National Museum, also known as the Sri Lanka National Museum, is the largest and most significant museum in the country. Established in 1877 by Sir William Henry Gregory, the then British Governor of Ceylon, this grand building is a treasure trove of Sri Lankan history, culture, and heritage. The museum's colonial-era architecture is as impressive as the artifacts housed within, including ancient statues, royal regalia, weapons, traditional artwork, and historical documents.
            </p>
          </div>

          
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Colombo+National+Museum/@6.9099991,79.8609032,15z/data=!4m6!3m5!1s0x3ae2596fa1f4b2af:0xd90a283d68f9a48d!8m2!3d6.9099991!4d79.8609032!16s%2Fg%2F11bv302yhv?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Viharamahadevi Park</li>
              <li>Independence Memorial Hall</li>
              <li>Gangaramaya Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub4;
