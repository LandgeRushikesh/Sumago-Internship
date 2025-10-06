import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Players from "./Components/Players/Players";
import Stats from "./Components/Stats/Stats";
import Gallery from "./Components/Gallery/Gallery";
import Batting from "./Components/Stats/Batting";
import Bowling from "./Components/Stats/Bowling";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Players" element={<Players />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Stats" element={<Stats />} />
            <Route path="Batting" element={<Batting />} />
            <Route path="Bowling" element={<Bowling />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
