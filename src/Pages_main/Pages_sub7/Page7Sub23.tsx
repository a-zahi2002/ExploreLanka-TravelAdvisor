import React from "react";
import "../Pages_sub1.css";

const Page7Sub23: React.FC = () => {
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
        <h1>Vavuniya Kulam</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/vk1.jpg" alt="vk View 1" />
          <img src="/src/Pages_main/Northern img/vk2.jpg" alt="vk View 2" />
          <img src="/src/Pages_main/Northern img/vk3.jpg" alt="vk View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Vavuniya Kulam, also known as Vavuniya Tank, is a significant water reservoir located in Vavuniya, Sri Lanka. This tank plays a crucial role in the region's agriculture by providing irrigation for surrounding farmland, particularly in an area where water resources are essential for crop cultivation. The scenic surroundings of Vavuniya Kulam, with its lush greenery and tranquil waters, create a peaceful environment, making it a popular spot for locals to relax and enjoy nature. The area is also frequented by various bird species, attracting birdwatchers and nature enthusiasts. Overall, Vavuniya Kulam is not only an important resource for the community but also a beautiful natural site that contributes to the ecological diversity of the region.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Vavuniya, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/DKtea6y3XzbpNK7s9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Vavuniya archaeological museum</li>
              <li>Pavatkulam</li>
              <li>Kalvari church</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub23;