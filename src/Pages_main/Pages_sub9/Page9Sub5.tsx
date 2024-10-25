import React from "react";
import "../Pages_Sub1.css"; 
import memorialhall01 from "/src/assets/western_img/memorial_hall01.jpg";
import memorialhall02 from  "/src/assets/western_img/memorial_hall02.jpg";
import memorialhall03 from "/src/assets/western_img/memorial_hall03.jpg";



const Page9Sub5: React.FC = () => {
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

        
        <h1>Independence Memorial Hall</h1>

        
        <div className="image-section">
         <img src={memorialhall01} alt="Independence Memorial Hall View 01"/>
         <img src={memorialhall02} alt="Independence Memorial Hall View 02"/>
         <img src={memorialhall03} alt="Independence Memorial Hall View 03"/>
          
        </div>

        
        <div className="lower-section">
          
          <div className="description">
            <p>
            Independence Memorial Hall, located in the serene surroundings of Independence Square in Colombo, stands as a proud symbol of Sri Lanka's freedom from British colonial rule. The hall was built to commemorate the country's independence on February 4, 1948, and is designed to reflect traditional Kandyan architecture. It features intricate stone carvings and a grand open-pillared structure, offering visitors a glimpse into the artistic heritage of Sri Lanka.<br />The hall is often used for official ceremonies and cultural events, and its grounds are a popular spot for locals and tourists to relax or take a leisurely stroll. The central monument is flanked by statues of lions, a traditional symbol of the island’s sovereignty, while a statue of the first Prime Minister, D.S. Senanayake, proudly stands at the entrance.<br />Inside, there’s a small museum dedicated to Sri Lanka’s journey to independence, featuring photographs and documents from the colonial era to modern times.
            </p>
          </div>

        
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Independence+Square/@6.9047626,79.8672183,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2597b88958e0b:0xc1c5089f26bc260b!8m2!3d6.9047626!4d79.8672183!16s%2Fm%2F04f34xk?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Colombo National Museum</li>
              <li>Viharamahadevi Park</li>
              <li>Gangaramaya Temple</li>
              <li>Arcade Independence Square</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub5;
