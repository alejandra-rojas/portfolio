import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import Projects from "./components/Projects";

function App() {
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
