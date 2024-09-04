import React from "react";

const Page6: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 6</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page6;
