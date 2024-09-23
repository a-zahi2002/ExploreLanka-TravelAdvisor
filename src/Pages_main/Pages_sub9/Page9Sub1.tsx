import React from "react";
import "../Pages_sub1.css"; // Sub Page CSS

const Page9Sub1: React.FC = () => {
  return (
    <div className="pages_sub1">
      <div className="content-container">
        <h1>Gangaramaya Temple</h1>
        {/* Add a close button to navigate back to the main page */}
        <button onClick={() => window.history.back()}>Close</button>
      </div>
    </div>
  );
};

export default Page9Sub1;
