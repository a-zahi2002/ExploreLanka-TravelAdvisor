import React from "react";
import "../Pages_Sub1.css"; 
import wolvendaal01 from "/src/assets/western_img/Wolvendaal-1.webp";
import wolvendaal02 from  "/src/assets/western_img/Wolvendaal-2.webp";
import wolvendaal03 from "/src/assets/western_img/Wolvendaal-3.jpg";



const Page9Sub8: React.FC = () => {
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
        <h1>Wolvendaal Church</h1>

        
        <div className="image-section">
         <img src={wolvendaal01} alt="Wolvendaal Church View 01"/>
         <img src={wolvendaal02} alt="Wolvendaal Church View 02"/>
         <img src={wolvendaal03} alt="Wolvendaal Church View 03"/>
          
        </div>

        
        <div className="lower-section">
          
          <div className="description">
            <p>
            Wolvendaal Church, one of the oldest and most significant colonial-era buildings in Colombo, is a testament to the Dutch presence in Sri Lanka during the 18th century. Built in 1757, this Protestant church sits atop a small hill in the Pettah area and features a distinctive cross-shaped design. The church’s name, "Wolvendaal," meaning "Dale of Wolves," reflects the early Dutch settlers' belief that the surrounding area was inhabited by jackals they mistook for wolves.<br />The church’s architecture is a blend of European and local styles, with thick walls and high ceilings designed to keep the interior cool in Colombo’s tropical climate. The church is still in use today, with beautifully preserved wooden pews, an intricately carved pulpit, and gravestones that tell the story of the early Dutch settlers. The serene, historical atmosphere makes Wolvendaal Church a fascinating place to visit for those interested in Colombo's colonial past.
            </p>
          </div>

          
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Pettah, Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Christian+Reformed+Church+of+Sri+Lanka/@6.9420848,79.859072,15z/data=!4m6!3m5!1s0x3ae258e215587c57:0x441c440b5bbf80d5!8m2!3d6.9420848!4d79.859072!16s%2Fm%2F011153xq?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Jami Ul-Alfar Mosque</li>
              <li>Colombo Dutch Museum</li>
              <li>Pettah Market</li>
              <li>Galle Face Green</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub8;
