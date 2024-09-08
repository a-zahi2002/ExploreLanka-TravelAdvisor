import React from "react";

const Page3: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 3</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page3;
