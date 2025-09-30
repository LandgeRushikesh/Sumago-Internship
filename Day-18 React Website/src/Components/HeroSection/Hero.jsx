import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90%] bg-[url('/img.jpg')] bg-no-repeat bg-cover bg-center relative">
      <div className="w-full h-full bg-black absolute inset-0 bg-opacity-70"></div>
      <div className="absolute bottom-16 w-full text-center text-white">
        <h2 className="text-6xl py-4">Legends of 22 Yards</h2>
        <p className="text-2xl">
          A Journey of Passion, Glory, and Cricketing Greatness
        </p>
      </div>
    </div>
  );
}

export default Hero;
