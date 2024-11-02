import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub1: React.FC = () => {
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

        <h1>Pinnawala Elephant Orphanage</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p>
            Sri Lanka is the hottest and best travel destination and lures
          adventures of all kind. you would love to solitude of nature and
          steady walks through trails. Sometime you love relaxing by the beach
          with sun bathing and cool sea breeze caressing your skin. You would
          like to visit elephant parks and see elephants so close and take
          selfies. Or you love to night life you crave and a little game of
          chances at a casino. What ever make you thrill, with the best tourist
          places to visit in Sri Lanka, this tiny island has it all. Elephant
          Orphanages and Elephants Sanctuary are another interesting activity to
          do in Sri Lanka. Most famous places are Pinnawala Elephant Orphanage,
          Millennium Elephant Foundation, Elephant Freedom Project, Udawalawa
          Elephants Transit Home
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kegalle, Sri Lanka</li>
              <li>Best Time to Visit: April to December</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/%E0%B6%B4%E0%B7%92%E0%B6%B1%E0%B7%8A%E0%B6%B1%E0%B7%80%E0%B6%BD+%E0%B6%85%E0%B6%BD%E0%B7%92+%E0%B6%85%E0%B6%B1%E0%B7%8F%E0%B6%AE%E0%B7%8F%E0%B6%9C%E0%B7%8F%E0%B6%BB%E0%B6%BA/@7.3008598,80.3839841,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae315c83a2c0273:0xa5744b525ada1e6c!8m2!3d7.3008545!4d80.388855!16s%2Fm%2F03c7_wp?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Bibile Rock</li>
              <li>Bopath Ella</li>
              <li>Sri Pada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1Sub1;
