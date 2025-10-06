import React from "react";

function Hero(props) {
  return (
    <div className="w-full h-[90vh] bg-[url('/img.jpg')] bg-no-repeat bg-cover bg-center relative">
      <div className="w-full h-full bg-black absolute inset-0 bg-opacity-80"></div>
      <div className="absolute bottom-16 w-full text-center text-white">
        <h2 className="text-6xl py-4">{props.title}</h2>
        <p className="text-2xl">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;
