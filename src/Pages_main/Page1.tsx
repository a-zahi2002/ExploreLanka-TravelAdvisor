import React from "react";
import "./Page.css";
import TileGrid1 from "./TileGrid1";
import { useNavigate } from "react-router-dom";

const Page1: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Sabaragamuwa Province</h1>
      <TileGrid1 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page1;
