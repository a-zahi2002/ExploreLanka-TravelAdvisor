import React from "react";
import "./App.css";
import TileGrid from "./TileGrid";
import Footer from "./Footer";

function App() {
  return (
   
    <div className="app">
       <div>
    <h1 className="heading">ExploreLanka</h1>
    </div>

    
      <TileGrid />

      

      <div>
      <Footer />
      </div>
    </div>
    
  );
}

export default App;
