import React from "react";

const Page1sub2: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 12</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page1sub2;
