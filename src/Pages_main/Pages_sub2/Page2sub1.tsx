import React from "react";
import "./Page.css";

const Page2sub1: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 11</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page2sub1;
