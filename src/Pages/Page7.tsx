import React from "react";

const Page7: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 7</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page7;
