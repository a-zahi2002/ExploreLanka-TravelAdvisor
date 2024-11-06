import React from "react";
import "../Pages_sub1.css";
import Pilkington1 from "/src/uva img/pilkington1.png";
import Pilkington2 from "/src/uva img/pilkington2.png";
import Pilkington3 from "/src/uva img/pilkington3.png";

const Page4Sub5: React.FC = () => {
  const handleClose = () => {
    console.log("Page closed");
    window.history.back();
  };
  return (
    <div className="subpage-container">
      <div className="content-container">
      <button className="close-button" onClick={handleClose}>
          ✕
        </button>
        <h1>Pilkington Point</h1>
        <div className="image-section">
          <img src={Pilkington1} alt="Pilkington Point  View 01" />
          <img src={Pilkington2} alt="Pilkington Point  View 02" />
          <img src={Pilkington3} alt="Pilkington Point  View 03" />
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
        Pilkington Point is situated near Poonagala, which is a small town located in the central highlands of Sri 
Lanka, near Haputale in the Badulla District. Pilkington Point offers stunning panoramic views of the 
surrounding tea estates, valleys, and mist-covered mountains. The viewpoint provides an excellent vantage 
point to admire the natural beauty of the Sri Lankan hill country. The point is named after Pilkington, a 
British engineer who played a significant role in the development of the area during the colonial era. The 
British established tea plantations in the region, and today, the area is known for its picturesque tea 
estates. Pilkington Point can be reached by road from Poonagala town. Visitors can enjoy a scenic drive or 
hike to the viewpoint, which is surrounded by lush greenery and tea plantations. Pilkington Point is a 
popular spot for watching the sunrise and sunset. The changing colors of the sky against the backdrop of 
the mountains create a breathtaking sight that attracts tourists and photographers alike.
Apart from enjoying the scenic views, visitors to Pilkington Point can engage in activities such as nature 
walks, birdwatching, and picnics amidst the serene surroundings. The tranquil ambiance of the viewpoint 
makes it an ideal spot for relaxation and rejuvenation.        
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Bandarawela, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/6TEBSixmgjxwzLmz8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Thangamale Bird Sanctuary </li>
              <li>Adisham Bungalow </li>
              <li>Dambatenne Tea Factory   </li>
              
            </ul>
          </div>
    </div>
      </div>
    </div>
  );
};

export default Page4Sub5;
