import React from "react";
import "../Pages_sub1.css";

const Page7Sub9: React.FC = () => {
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
        <h1>Thiruketheeswaram</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/tt1.jpg" alt="Thiruketheeswaram View 1" />
          <img src="/src/Pages_main/Northern img/tt2.jpg" alt="Thiruketheeswaram View 2" />
          <img src="/src/Pages_main/Northern img/tt3.JPG" alt="Thiruketheeswaram View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Thiruketheeswaram, located near the town of Mannar in Sri Lanka, is a significant Hindu temple dedicated to Lord Shiva, known as Ketheeswaram. This ancient temple is renowned for its spiritual importance and beautiful architecture, attracting devotees and tourists alike. The temple is said to be over a thousand years old and is associated with various legends and mythologies, including the belief that it is one of the five Pancha Ishwara temples dedicated to Shiva. The site features intricate carvings, vibrant sculptures, and a serene ambiance, making it a place of pilgrimage and reflection. Thiruketheeswaram also hosts several religious festivals throughout the year, drawing large crowds and showcasing the rich cultural traditions of the Tamil Hindu community in the region. Its historical significance and spiritual allure make it a must-visit destination for those exploring the spiritual landscape of Sri Lanka.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mannar, Sri Lanka</li>
              <li>Best Time to Visit: Anytime</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/MwFRUsoKTuwwxBW89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Mannar Madu Madha church</li>
              <li>Mannar light house</li>
              <li>Mannar kunchikulam bridge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub9;