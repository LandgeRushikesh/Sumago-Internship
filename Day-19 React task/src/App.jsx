import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FFC0CB");
  return (
    <div
      className={`w-screen h-screen text-center text-white relative`}
      style={{ backgroundColor: color }}
    >
      <h1 className="w-full h-full font-bold text-3xl flex justify-center items-center">
        Hello World
      </h1>
      <div className="btns w-[90%] bg-white text-black absolute left-14 bottom-10 px-4 py-2 rounded-2xl shadow-lg shadow-black flex justify-evenly">
        <button
          onClick={() => setColor("#000000")}
          className="px-4 py-2 bg-black text-white rounded-2xl font-bold text-xl"
        >
          Black
        </button>
        <button
          onClick={() => setColor("#FF0000")}
          className="px-4 py-2 bg-red-900 text-white rounded-2xl font-bold text-xl"
        >
          Red
        </button>
        <button
          onClick={() => setColor("#FFA500")}
          className="px-4 py-2 bg-orange-700 text-white rounded-2xl font-bold text-xl"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("#FFFF00")}
          className="px-4 py-2 bg-yellow-600 text-white rounded-2xl font-bold text-xl"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
