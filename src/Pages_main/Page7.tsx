import React from "react";
import "./Page.css";
import TileGrid7 from "./TileGrid7";
import { useNavigate } from "react-router-dom";

const Page7: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <p className="topic">Northern Province-Sri Lanka</p>
      <br></br> <br></br>
      <p className="paragraph">
      ✨ Discover the Hidden Treasures of Northern Sri Lanka! ✨<br></br>
      "Unveil a world of enchanting landscapes, vibrant culture, and unforgettable experiences!"  
      </p>
      <p>
      Northern Province, located in the northernmost part of Sri Lanka, encompasses an area of 8,884 km², 
      making it the third largest province by area, despite having a population of 1,061,315, which makes it the least populated province.
      It is bordered by the Gulf of Mannar and Palk Bay and comprises five administrative districts:
      Jaffna, Kilinochchi, Mulaitivu, Vavuniya, and Mannar, with Jaffna serving as the provincial capital.
      Rich in history, Jaffna has been a vital cultural and commercial hub since antiquity,
      serving as the capital of the medieval Jaffna Kingdom and experiencing various colonial influences. 
      The population is predominantly Sri Lankan Tamils, with a mix of other ethnic groups, 
      and the region has faced significant challenges due to civil conflict, particularly during the Sri Lankan civil war. 
      Since the war's end in 2009, efforts for reconstruction and resettlement have been ongoing. 
      Notable historical sites include the Jaffna Fort and the renowned Jaffna Library, 
      while the landscape features limestone formations and palmyrah groves, adding to its unique charm.
      </p>
      <TileGrid7 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page7;
