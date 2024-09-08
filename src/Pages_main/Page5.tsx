import React from "react";

const Page5: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 5</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page5;
