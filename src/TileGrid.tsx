import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./TileGrid.css";
import Tile from "./Tile";
import Page1 from "./Pages_main/Page1";
import Page2 from "./Pages_main/Page2";
import Page3 from "./Pages_main/Page3";
import Page4 from "./Pages_main/Page4";
import Page5 from "./Pages_main/Page5";
import Page6 from "./Pages_main/Page6";
import Page7 from "./Pages_main/Page7";
import Page8 from "./Pages_main/Page8";
import Page9 from "./Pages_main/Page9";
import SearchBar from "./SearchBar";

// Import tile data from other TileGrid components
import { tileData1 } from "./Pages_main/TileGrid1";
import { tileData2 } from "./Pages_main/TileGrid2";
import { tileData3 } from "./Pages_main/TileGrid3";
import { tileData4 } from "./Pages_main/TileGrid4";
import { tileData5 } from "./Pages_main/TileGrid5";
import { tileData6 } from "./Pages_main/TileGrid6";
import { tileData7 } from "./Pages_main/TileGrid7";
import { tileData8 } from "./Pages_main/TileGrid8";
import { tileData9 } from "./Pages_main/TileGrid9";

// Main tile data for this TileGrid
const tileData = [
  {
    image: "src/Pages_main/sabaragamuwa img/img111.jpg",
    description: "Sabaragamuwa Province",
    page: "/page1",
  },
  {
    image: "src/Pages_main/NWP img/nwp.jpg",
    description: "North Western Province",
    page: "/page2",
  },
  {
    image: "src/southern img/SP_Cover.jpg",
    description: "Southern Province",
    page: "/page3",
  },
  {
    image: "src/uva img/UVA_Cover.jpg",
    description: "Uva Province",
    page: "/page4",
  },
  {
    image: "src/NCP_Images/NorthCentral.jpg",
    description: "North Central Province",
    page: "/page5",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Eastern Province",
    page: "/page6",
  },
  {
    image: "src/Pages_main/Northern img/Northern-tile-cover-page-new.jpg",
    description: "Northern Province",
    page: "/page7",
  },
  {
    image: "/src/assets/central img/cover.jpg",
    description: "Central Province",
    page: "/page8",
  },
  {
    image: "src/assets/WP_Cover.jpg",
    description: "Western Province",
    page: "/page9",
  },
];

// Combine the tile data from the imported grids
const combinedTileData = [
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

const TileGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract all descriptions for the search bar suggestions
  const allDescriptions = [...tileData, ...combinedTileData].map(
    (tile) => tile.description
  );

  // Function to handle search input from the SearchBar component
  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  // Determine which tiles to display
  const displayedTiles =
    searchQuery.length > 0
      ? combinedTileData.filter((tile) =>
          tile.description.toLowerCase().includes(searchQuery)
        )
      : tileData; // Show only main tile data when there's no search query

  return (
    <BrowserRouter>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="src/Background_video.mp4" type="video/mp4" />
        </video>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p className="intro-paragraph">
                Welcome to ExploreLanka! Discover the beauty and diversity of
                Sri Lanka through our curated selection of destinations. Click
                on any tile to get more details about each province.
              </p>

              <div className="search-bar-container">
                <SearchBar
                  onSearch={handleSearch}
                  suggestions={allDescriptions}
                />
              </div>

              <div className="tile-grid-container">
                <div className="tile-grid">
                  {displayedTiles.length > 0 ? (
                    displayedTiles.map((tile, index) => (
                      <Tile
                        key={index}
                        image={tile.image}
                        description={tile.description}
                        page={tile.page} // Ensure the page prop is passed
                      />
                    ))
                  ) : (
                    <p className="no-results">No results found.</p>
                  )}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/page3/*" element={<Page3 />} />
        <Route path="/page4/*" element={<Page4 />} />
        <Route path="/page5/*" element={<Page5 />} />
        <Route path="/page6/*" element={<Page6 />} />
        <Route path="/page7/*" element={<Page7 />} />
        <Route path="/page8/*" element={<Page8 />} />
        <Route path="/page9/*" element={<Page9 />} />
      </Routes>
    </BrowserRouter>
  );
};

export { tileData };
export default TileGrid;
