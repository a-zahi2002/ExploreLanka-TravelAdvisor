import React from "react";
import "../Pages_sub1.css";
import nk1 from "/src/Pages_main/Northern img/nk1.jpg";
import nk2 from "/src/Pages_main/Northern img/nk2.jpg";
import nk3 from "/src/Pages_main/Northern img/nk3.jpg";

const Page7Sub4: React.FC = () => {
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
        <h1>Nilavaraikinaru</h1>
        <div className="image-section">
          <img src={nk1} alt="Nilavarikinaru View 1" />
          <img src={nk2} alt="Nilavarikinaru View 2" />
          <img src={nk3} alt="Nilavarikinaru View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Nilavari Kinaru, located near Jaffna, Sri Lanka, is a renowned sacred site famous for its natural spring believed to have healing properties. The name translates to "the water that gives light," reflecting the area's significance in local mythology and spirituality. Surrounded by lush greenery, this tranquil spot is often visited by both locals and tourists seeking solace and rejuvenation. The spring is associated with several Hindu rituals and is particularly popular during religious festivals, attracting devotees who come to purify themselves in its waters. The serene environment and spiritual ambiance make Nilavari Kinaru a captivating destination for those interested in experiencing the cultural and natural heritage of Jaffna.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Jaffna, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/3jz2xdCbzP4HSXds6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Nainativu(Island)</li>
              <li>Neduntivu(Island)</li>
              <li>Keerimalai pond</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub4;
