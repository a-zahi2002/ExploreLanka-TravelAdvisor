import React from "react";
import { SearchProvider } from "./SearchContext";
import "./App.css";
import TileGrid from "./TileGrid";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
// Import initial tile data from multiple sources
import { tileData } from "./TileGrid";
import { tileData1 } from "./Pages_main/TileGrid1";
import { tileData2 } from "./Pages_main/TileGrid2";
import { tileData3 } from "./Pages_main/TileGrid3";
import { tileData4 } from "./Pages_main/TileGrid4";
import { tileData5 } from "./Pages_main/TileGrid5";
import { tileData6 } from "./Pages_main/TileGrid6";
import { tileData7 } from "./Pages_main/TileGrid7";
import { tileData8 } from "./Pages_main/TileGrid8";
import { tileData9 } from "./Pages_main/TileGrid9";

function App() {
  // Combine or manage the tile data as needed
  const initialTileData = [
    ...tileData,
    ...tileData1,
    ...tileData2,
    ...tileData3,
    ...tileData4,
    ...tileData5,
    ...tileData6,
    ...tileData7,
    ...tileData8,
    ...tileData9,
  ];

  return (
    <SearchProvider initialTileData={initialTileData}>
      <div className="app">
        <Navbar />
        <TileGrid />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
