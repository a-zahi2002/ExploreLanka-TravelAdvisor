import React from "react";
import "./Page.css";
import TileGrid1 from "./TileGrid1";
import { useNavigate } from "react-router-dom";

const Page1: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">

      <p className="topic">Sabaragamuwa Province-Sri Lanka</p>
      <br></br> <br></br>
      <p className='paragraph'>Have you visit the Beautiful Sabaragamuwa?</p>
      <p>The province has an area of 4,968 km2 and a population of 1,918,880. Major towns include Ratnapura and Kegalle. Ratnapura is the capital of the province.
      The Sabaragamuwa University of Sri Lanka is located in the town of Belihuloya, and was founded in 1991.</p>
      
      <TileGrid1 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
      
    </div>
  );
};

export default Page1;
