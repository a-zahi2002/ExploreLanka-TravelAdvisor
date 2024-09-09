import React from "react";
import "./Pages_sub1.css";

const page1sub1: React.FC = () => {
  return (
    <div className="pages_sub1">
      <div className="content-container">
        <h1>Page1 Sub1</h1>
        <button onClick={() => window.history.back()}>Close</button>
      </div>
    </div>
  );
};

export default page1sub1;
