import React from "react";

const Page2sub2: React.FC = () => {
  return (
    <div className="page">
      <h1>Page 12</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Page2sub2;
