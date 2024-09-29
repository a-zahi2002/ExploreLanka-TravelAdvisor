import React from "react";
import "./Page.css";
import TileGrid5 from "./TileGrid5";
import { useNavigate } from "react-router-dom";

const Page5: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 5</h1>
      <TileGrid5 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page5;
