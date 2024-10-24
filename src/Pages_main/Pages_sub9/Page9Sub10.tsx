import React from "react";
import "../Pages_Sub1.css";
import dewasthanam01 from "/src/assets/western_img/dewasthanamkovil01.jpeg";
import dewasthanam02 from "/src/assets/western_img/dewasthanamkovil02.jpg";
import dewasthanam03 from "/src/assets/western_img/dewasthanamkovil03.jpg";

const Page9Sub10: React.FC = () => {
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
        <h1>Temple of Sri Kailawasanathan Swami Devasthanam Kovil</h1>

        <div className="image-section">
          <img src={dewasthanam01} alt="Swami Devasthanam Kovi View 01" />
          <img src={dewasthanam02} alt="Swami Devasthanam Kovi View 02" />
          <img src={dewasthanam03} alt="Swami Devasthanam Kovi View 03" />
        </div>

        <div className="lower-section">
          <div className="description">
            <p>
            The Temple of Sri Kailawasanathan Swami Devasthanam Kovil, located in Colombo, is one of the oldest and most revered Hindu temples in Sri Lanka. This stunning Dravidian-style temple is dedicated to Lord Shiva and his consort, Parvati, and has served as a center of spiritual devotion for the Hindu community since the 18th century. The temple’s architecture is a sight to behold, with its intricate carvings, colorful deities, and towering gopuram (entrance tower) that dominate the skyline.
              <br />
              Inside, the temple’s shrines are adorned with beautiful statues of various Hindu gods and goddesses, surrounded by richly decorated pillars and ceilings. The temple is a peaceful place of worship, and visitors are welcome to observe rituals, explore the sacred grounds, and immerse themselves in the vibrant atmosphere during festivals like Maha Shivaratri, celebrated in honor of Lord Shiva.
            </p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: February or November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Sri+Kailawasanatan+Swami+Temple/@6.9425793,79.8544339,15z/data=!4m6!3m5!1s0x3ae259666dabb7a3:0xcc0eb061f204a2a3!8m2!3d6.9425793!4d79.8544339!16s%2Fg%2F11f710x1bq?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
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
              <li>Gangaramaya Temple</li>
              <li>Colombo Dutch Museum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub10;
