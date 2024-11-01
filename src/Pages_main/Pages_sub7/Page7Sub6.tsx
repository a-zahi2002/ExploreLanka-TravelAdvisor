import React from "react";
import "../Pages_sub1.css";

const Page7Sub6: React.FC = () => {
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
        <h1>Sakkotai cape</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/sc1.jpg" alt="Sakotai cape View 1" />
          <img src="/src/Pages_main/Northern img/sc2.jpg" alt="Sakotai cape View 2" />
          <img src="/src/Pages_main/Northern img/sc3.jpg" alt="Sakotai cape View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Sakkotai Cape, located at the northernmost tip of the Jaffna Peninsula in Sri Lanka, is a breathtaking coastal destination renowned for its natural beauty and serene atmosphere. This picturesque cape features dramatic cliffs and stunning views of the Indian Ocean, making it a popular spot for photography and relaxation. The area is relatively untouched, offering visitors a chance to experience pristine beaches and clear waters, ideal for swimming and enjoying the tranquil surroundings. Sakkotai Cape is also rich in biodiversity, providing opportunities for birdwatching and observing marine life. Its remote location and scenic landscapes make it a perfect escape for those looking to connect with nature and explore the less-traveled parts of Jaffna.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: PointPedro, Jaffna, Sri Lanka</li>
              <li>Best Time to Visit: January to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/2GF6tCyi5ivBiAUY9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>thondaimanaru beach</li>
              <li>Valvettithurai oorani spring</li>
              <li>Moorkam beach</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Page7Sub6;

