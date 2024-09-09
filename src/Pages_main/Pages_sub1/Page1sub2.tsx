import React from "react";

const page1sub2: React.FC = () => {
  return (
    <div className="pages_sub1">
      <h1>Page 12</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default page1sub2;
