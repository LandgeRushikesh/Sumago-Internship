import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Players from "./Components/Players/Players";
import Teams from "./Components/Teams/Teams";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Players" element={<Players />} />
            <Route path="Teams" element={<Teams />} />
            <Route path="Stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
