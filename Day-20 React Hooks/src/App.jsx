import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, [count]);

  useEffect(() => {
    setLikeCount((prevCount) =>
      isLiked ? prevCount + 1 : prevCount > 0 ? prevCount - 1 : prevCount
    );
  }, [isLiked]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } text-4xl font-bold transition-all duration-300 ease-in-out`}
      >
        Welcome to React!!!
      </h1>
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className="px-8 py-2 bg-green-500 font-bold my-4 rounded-lg text-2xl"
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      <p className="text-4xl font-bold">Count:{count}</p>
      <div className="flex justify-center items-center my-5">
        <button
          className="mr-4 px-4 py-2 bg-black text-white font-bold rounded-lg"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="mr-4 px-4 py-2 bg-black text-white font-bold rounded-lg"
          onClick={() => count >= 0 && setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
      </div>

      <div className="flex items-center">
        <button
          className={`${isLiked ? "text-red-800" : "text-black"} text-5xl mr-2`}
          onClick={() => setIsLiked((prev) => !prev)}
        >
          {isLiked ? "❤️" : "🩶"}
        </button>
        <p className="text-2xl">{likeCount}</p>
      </div>
    </div>
  );
}

export default App;
