import React from "react";
import "./Page.css";
import TileGrid6 from "./TileGrid6";
import { useNavigate } from "react-router-dom";

const Page6: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 6</h1>
      <TileGrid6 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page6;
