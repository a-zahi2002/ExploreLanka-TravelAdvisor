import React from "react";
import "./Page.css"; // Main Page CSS
import TileGrid9 from "./TileGrid9";
import { useNavigate } from "react-router-dom";

const Page9: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1 className="topic">Western Province-Sri Lanka</h1>
      <p className='paragraph'>Have you visit the Beautiful Western Province?</p>
      <p>The province has an area of 3,694.20 km2 and a population of 5,648,000. Major towns include Colombo,Kluthara and Gampaha. Colombo is the capital of the province.
      </p>
      

      <TileGrid9 />
      <button onClick={() => navigate(-1)}>Close</button> {/* Navigate Back */}
    </div>
  );
};

export default Page9;
