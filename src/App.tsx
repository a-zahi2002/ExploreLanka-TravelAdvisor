import React from "react";
import "./App.css";
import TileGrid from "./TileGrid";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div>
        <h1 className="heading">
          <img
            src="public\favicon.ico"
            className="logo1"
            alt="Explorelanka_logo"
          />
          ExploreLanka
        </h1>
      </div>

      <TileGrid />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
