import React from "react";

const Page4: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 4</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page4;
