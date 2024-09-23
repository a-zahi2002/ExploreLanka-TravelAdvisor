import React from "react";
import "./Page.css"; // Main Page CSS
import TileGrid9 from "./TileGrid9";
import { useNavigate } from "react-router-dom";

const Page9: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>WESTERN PROVINCE</h1>
      <TileGrid9 />
      <button onClick={() => navigate(-1)}>Close</button> {/* Navigate Back */}
    </div>
  );
};

export default Page9;
