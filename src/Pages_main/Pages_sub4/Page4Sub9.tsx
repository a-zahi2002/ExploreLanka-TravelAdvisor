import React from "react";
import "../Pages_sub1.css";
import Viharaya1 from "/src/uva img/viharaya1.png";
import Viharaya2 from "/src/uva img/viharaya2.png";
import Viharaya3 from "/src/uva img/viharaya3.png";

const Page4Sub9: React.FC = () => {
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
        <h1>Kataragama Dewalaya</h1>
        <div className="image-section">
          <img src={Viharaya1} alt="Viharaya View 1" />
          <img src={Viharaya2} alt="Viharaya View 2"/>
          <img src={Viharaya3} alt="Viharaya View 3"/>
        </div>
        <div className="lower-section">
          <div className="description">
        <p>
        Kataragama Dewalaya is a revered spiritual site located in the enchanting town of Kataragama in Sri Lanka. 
        This sacred complex, dedicated to the Hindu god Kataragama and the Buddhist deity Ganesh, attracts pilgrims and 
        visitors from diverse backgrounds. The journey to the Dewalaya often begins with a scenic drive through lush landscapes, 
        leading to the vibrant atmosphere of the temple complex. As you enter, you’re greeted by intricately carved statues and
         colorful murals that showcase the rich cultural heritage of the area. 
         The site is surrounded by serene natural beauty, including the nearby river and dense forests, 
         creating a tranquil backdrop for reflection and prayer. 
         One of the most captivating times to visit Kataragama Dewalaya is during festivals, 
         when the temple comes alive with music, traditional rituals, and the scent of incense, inviting visitors to
          immerse themselves in the spiritual ambiance. Whether you seek a moment of peace or a deeper understanding of Sri Lanka's cultural tapestry, 
          Kataragama Dewalaya offers an unforgettable experience.   
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Monaragala, Sri Lanka</li>
              <li>Best Time to Visit: May to September</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/QvMq39BWVC6zM3bW7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Kiri Vehera</li>
              <li>Weheragala Reservoir</li>
              <li>Yala National Park</li>
            </ul>
          </div>
    </div>
      </div>
    </div>
  );
};

export default Page4Sub9;
