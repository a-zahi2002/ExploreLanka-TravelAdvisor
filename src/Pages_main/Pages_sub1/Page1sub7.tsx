import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub7: React.FC = () => {
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

        <h1>Millennium Elephant Foundation</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p>MEF identifies mistreated elephants and subsequently works to relocate them onto the sanctuary grounds, 
          a process that involves paying the elephant owners a monthly wage. The organization then covers all medical, food bills, 
          and a salary for the mahout. The elephant owners are not obligated to cover any of the costs, 
          as many of them turn to MEF when they are no longer capable of coping with the immense expenses required by keeping an elephant.
           The average daily expenditure on an elephant amounts to around 7000 rupees, over $50.
            Many of the elephants are recovered from the logging industry, within which poor living and working conditions can cause tusk injuries, potentially resulting in breakages, nerve damage, and gum disease. The other elephants MEF rescues come from the different ways in which elephants are kept in captivity in Sri Lanka: elephants that individual people keep in their home gardens, temple-owned elephants which are often neglected when not used for religious purposes.     
            
</p>
</div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Millenium+Elephant+Foindation/@7.2751114,80.3810523,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae3143ebe9f66e9:0x51d428851f9df151!8m2!3d7.2751061!4d80.3836272!16s%2Fm%2F0105syk_?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
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

export default Page1Sub7;
