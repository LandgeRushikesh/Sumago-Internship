import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400">
      <h1 className="text-4xl font-bold ">Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
