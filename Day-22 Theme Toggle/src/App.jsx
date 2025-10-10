import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./UserContext";
import Msg from "./Msg";
import Cards from "./Card";

function App() {
  return (
    <>
      <ThemeProvider>
        <Msg />
        <Cards />
      </ThemeProvider>
    </>
  );
}

export default App;
