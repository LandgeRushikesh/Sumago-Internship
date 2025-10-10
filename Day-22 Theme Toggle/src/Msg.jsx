import React, { useContext } from "react";
import { ThemeContext } from "./UserContext";

function Msg() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-screen h-screen flex flex-col justify-center items-center ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <h1
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } text-4xl font-bold mb-5`}
      >
        Hello World
      </h1>
      <button
        onClick={() => setTheme(theme === "light" ? "black" : "light")}
        className="bg-red-700 text-white px-4 py-2 font-bold text-2xl"
      >
        Change Theme
      </button>
    </div>
  );
}

export default Msg;
