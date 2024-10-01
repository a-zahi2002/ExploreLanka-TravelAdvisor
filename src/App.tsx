import React from "react";
import "./App.css";
import TileGrid from "./TileGrid";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>

      <TileGrid />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
