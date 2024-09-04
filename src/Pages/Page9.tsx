import React from "react";

const Page9: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 9</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page9;
