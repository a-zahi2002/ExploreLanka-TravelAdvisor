import React from "react";
import "../Pages_sub1.css";
import kirchhyanBungalow1 from "/src/uva img/kirchhyanBungalow1.png";
import kirchhyanBungalow2 from "/src/uva img/kirchhyanBungalow2.png";
import kirchhyanBungalow3 from "/src/uva img/kirchhyanBungalow3.png";
const Page4Sub2: React.FC = () => {
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
        <h1>Kirchhayn Bungalow</h1>
        <div className="image-section">
          <img src={kirchhyanBungalow1} alt="kirchhyanBungalow View 01" />
          <img src={kirchhyanBungalow2} alt="kirchhyanBungalow View 02" />
          <img src={kirchhyanBungalow3} alt="kirchhyanBungalow View 03" />
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
        Kirchhayn Bungalow, nestled amidst the scenic beauty of Sri Lanka's central highlands, is a charming 
colonial-era retreat that offers visitors a glimpse into the island's rich history and natural splendor. Situated 
in the picturesque town of Bandarawela, this historic bungalow exudes old-world charm and tranquility, 
providing a peaceful oasis for travelers seeking respite from the hustle and bustle of modern life.
Originally built during the British colonial period, Kirchhayn Bungalow was once the residence of a 
European tea planter, serving as a luxurious retreat amidst the lush tea estates of the Uva province. Today, 
the bungalow has been lovingly restored and converted into a boutique hotel, offering guests an authentic 
taste of colonial-era hospitality combined with modern comforts and amenities.
As visitors approach Kirchhayn Bungalow, they are greeted by its elegant colonial architecture, with its 
whitewashed walls, sloping tiled roof, and verandas adorned with quaint wooden furniture. Surrounded 
by manicured gardens and towering trees, the bungalow exudes a sense of serenity and tranquility, inviting 
guests to unwind and relax in its peaceful ambiance.
Inside, the bungalow's interior retains much of its original charm, with high ceilings, polished wooden 
floors, and antique furnishings evoking a sense of old-world grandeur. Each room is tastefully decorated 
with period furniture and luxurious linens, offering guests a comfortable and inviting retreat after a day of 
exploration.
One of the highlights of Kirchhayn Bungalow is its culinary offerings, with a talented team of chefs serving 
up delicious meals made from fresh, locally sourced ingredients. Guests can enjoy traditional Sri Lankan 
cuisine as well as international dishes, all prepared with care and attention to detail.
 From guided hikes through tea plantations and nature trails to leisurely picnics by sparkling streams, there are endless 
 opportunities for outdoor adventure and exploration.
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Bandarawela Sri Lanka</li>
              <li>Best Time to Visit: December to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/hJTiJAaNZyGA2Ti37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Honey Bee Garden</li>
              <li>Ella</li>
              <li>Bambarakanda Falls </li>
              
            </ul>
            </div>
      </div>
    </div>
    </div>
  );
};

export default Page4Sub2;
