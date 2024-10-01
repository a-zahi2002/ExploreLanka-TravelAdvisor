import React from "react";
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
    description: "Tile 6",
    page: "/page6",
  },
  {
    image: "https://picsum.photos/200/300",
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

const TileGrid: React.FC = () => {
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
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              {tileData.map((tile, index) => (
                <Tile
                  key={index}
                  image={tile.image}
                  description={tile.description}
                  page={tile.page}
                />
              ))}
            </div>
          }
        />
        {/* Use * to allow nested routing */}
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

export default TileGrid;
