import React from "react";
import "./Page.css"; // Main Page CSS
import TileGrid9 from "./TileGrid9";
import { useNavigate } from "react-router-dom";

const Page9: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <p className="topic">Western Province-Sri Lanka</p>
      <br></br> <br></br>
      <p className="paragraph">
        Have you visited the Beautiful Western Province?
      </p>
      <p>
        The province has an area of 3,694.20 km2 and a population of 5,648,000.
        Major towns include Colombo,Kluthara and Gampaha. Colombo is the capital
        of the province. It is the province with the highest population density
        in Sri Lanka. It is home to the country's capital, Sri Jayawardenepura
        Kotte, as well as the largest city and commercial center, Colombo.
      </p>
      <TileGrid9 />
      <button onClick={() => navigate(-1)}>Back</button> {/* Navigate Back */}
    </div>
  );
};

export default Page9;
