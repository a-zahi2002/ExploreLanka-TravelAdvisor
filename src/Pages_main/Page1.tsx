import React from "react";
import "./Page.css";
import TileGrid1 from "./TileGrid1";

const Page1: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 1</h1>
      <TileGrid1 />
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page1;
