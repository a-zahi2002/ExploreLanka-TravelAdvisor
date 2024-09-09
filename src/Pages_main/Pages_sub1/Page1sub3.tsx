import React from "react";

const page1sub3: React.FC = () => {
  return (
    <div className="pages_sub1">
      <h1>Page 13</h1>
      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default page1sub3;
