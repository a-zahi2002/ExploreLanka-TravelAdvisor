import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page3Sub1 from "./Pages_sub3/Page3Sub1";
import Page3Sub2 from "./Pages_sub3/Page3Sub2";
import Page3Sub3 from "./Pages_sub3/Page3Sub3";
import Page3Sub4 from "./Pages_sub3/Page3Sub4";
import Page3Sub5 from "./Pages_sub3/Page3Sub5";
import Page3Sub6 from "./Pages_sub3/Page3Sub6";
import Page3Sub7 from "./Pages_sub3/Page3Sub7";
import Page3Sub8 from "./Pages_sub3/Page3Sub8";
import Page3Sub9 from "./Pages_sub3/Page3Sub9";
import Page3Sub10 from "./Pages_sub3/Page3Sub10";
import Page3Sub11 from "./Pages_sub3/Page3Sub11";
import Page3Sub12 from "./Pages_sub3/Page3Sub12";
import Page3Sub13 from "./Pages_sub3/Page3Sub13";
import Page3Sub14 from "./Pages_sub3/Page3Sub14";
import Page3Sub15 from "./Pages_sub3/Page3Sub15";



interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "src/southern img/img1.jpg",
    description: "Galle Fort",
    page: "Page3Sub1", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img2.jpg",
    description: "Mirissa ",
    page: "Page3Sub2", // Note: Removed the leading '/'
  },
  
  {
    image: "src/southern img/img3.jpg",
    description: "Bundala National Park",
    page: "Page3Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img4.jpg",
    description: "Unawatuna Beach",
    page: "Page3Sub4", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img5.jpg",
    description: "Yala National Park",
    page: "Page3Sub5", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img6.jpg",
    description: "Hikkaduwa",
    page: "Page3Sub6", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img7.jpg",
    description: " Sea Turtle Farm",
    page: "Page3Sub7", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img8.jpg",
    description: "Dondara Head Lighthouse",
    page: "Page3Sub8", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img9.jpg",
    description: "Rumassala",
    page: "Page3Sub9", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img10.jpg",
    description: "Mulgirigala Raja Maha Vihara",
    page: "Page3Sub10", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img11.jpg",
    description: "Coconut Tree Hill",
    page: "Page3Sub11", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img12.jpg",
    description: "Kalametiya Bird Sanctuary",
    page: "Page3Sub12", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img13.jpg",
    description: "Bentota River Safari",
    page: "Page3Sub13", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img14.jpg",
    description: "Ridiyagama Safari Park",
    page: "Page3Sub14", // Note: Removed the leading '/'
  },
  {
    image: "src/southern img/img15.jpg",
    description: "Handunugoda Tea Estate",
    page: "Page3Sub15", // Note: Removed the leading '/'
  },// Add more tile data as needed
];

const TileGrid3: React.FC = () => {
  return (
    <div>
      {/* Main tile grid for subpages */}
      <div className="tile-grid">
        {tileData.map((tile, index) => (
          <Tile
            key={index}
            image={tile.image}
            description={tile.description}
            page={tile.page}
          />
        ))}
      </div>

      {/* Routes for the subpages */}
      <Routes>
        <Route path="Page3Sub1" element={<Page3Sub1 />} />
        <Route path="Page3Sub2" element={<Page3Sub2 />} />
        <Route path="Page3Sub3" element={<Page3Sub3 />} />
        <Route path="Page3Sub4" element={<Page3Sub4 />} />
        <Route path="Page3Sub5" element={<Page3Sub5 />} />
        <Route path="Page3Sub6" element={<Page3Sub6 />} />
        <Route path="Page3Sub7" element={<Page3Sub7 />} />
        <Route path="Page3Sub8" element={<Page3Sub8 />} />
        <Route path="Page3Sub9" element={<Page3Sub9 />} />
        <Route path="Page3Sub10" element={<Page3Sub10 />} />
        <Route path="Page3Sub11" element={<Page3Sub11 />} />
        <Route path="Page3Sub12" element={<Page3Sub12 />} />
        <Route path="Page3Sub13" element={<Page3Sub13 />} />
        <Route path="Page3Sub14" element={<Page3Sub14 />} />
        <Route path="Page3Sub15" element={<Page3Sub15 />} />
      </Routes>
    </div>
  );
};

export default TileGrid3;
