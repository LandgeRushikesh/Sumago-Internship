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
    </div>
  );
}
export default Home;
