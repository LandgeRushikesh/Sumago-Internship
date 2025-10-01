import React from "react";
import Hero from "../HeroSection/Hero";
import About from "../About/About";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <section className="About-sec my-4">
        <About />
      </section>
      <section className="players-sec mx-6 my-4">
        <h2 className="text-4xl font-bold text-white">Know the Champions</h2>
      </section>
    </div>
  );
}
export default Home;
