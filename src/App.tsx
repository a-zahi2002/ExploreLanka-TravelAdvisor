// App.tsx
import React from "react";
import { SearchProvider } from "./SearchContext";
import "./App.css";
import TileGrid from "./TileGrid";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <SearchProvider>
      <div className="app">
        <Navbar />
        <TileGrid />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
