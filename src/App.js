import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
//import { useFavicon } from "@uidotdev/usehooks";
import { useState } from "react";

function App() {
  // const [favicon, setFavicon] = useState(
  //   "https://github.com/alejandra-rojas/portfolio/blob/aa749dc3fdf8180380c8dac054c2066ef78d5a1d/public/favicon.ico"
  // );

  // useFavicon(favicon);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/theplanetisyourcanvas" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
