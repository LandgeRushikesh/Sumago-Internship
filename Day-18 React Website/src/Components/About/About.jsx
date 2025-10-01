import React from "react";

function About() {
  return (
    <div className="h-[80vh] relative flex justify-between items-center">
      <div className="w-[60vw]">
        <img src="/about-img.png" className="w-full" alt="" />
      </div>
      <div className="text w-[40vw] h-full flex flex-col justify-center items-start text-white mr-8">
        <h2 className="text-4xl font-bold mb-3">About Legends of 22 Yards</h2>
        <p className="text-xl mb-3">
          Legends of 22 Yards is a tribute to Indian cricket, celebrating its
          glorious past, present, and future. From legendary players to
          unforgettable matches, this platform brings fans closer to the game
          they love. Our mission is to highlight stories, achievements, and
          moments that define cricket in India.
        </p>
        <button className="text-lg bg-blue-700 font-bold px-3 py-2 rounded-lg mb-3">
          Explore Players
        </button>
      </div>
    </div>
  );
}

export default About;
