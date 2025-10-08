import React, { useEffect, useState } from "react";

function Weather() {
  const Temperature = {
    Nashik: 24,
    Mumbai: 35,
    Pune: 28,
    Chennai: 30,
    Kolkata: 26,
  };
  const [city, setCity] = useState("Nashik");
  const [temp, setTemp] = useState(Temperature[city]);

  useEffect(() => {
    setTemp(Temperature[city]);
  }, [city]);

  return (
    <div className="w-[400px] h-1/2 bg-green-600 my-5 rounded-lg flex flex-col items-center ">
      <select
        name="City"
        id="city"
        className="w-[98%] mx-1 my-4 px-4 py-3 bg-slate-800 text-white bg-opacity-50 rounded-lg text-2xl focus:outline-none"
        onChange={(e) => setCity(e.target.value)}
      >
        {["Nashik", "Mumbai", "Pune", "Chennai", "Kolkata"].map((city) => (
          <option name="City" value={city}>
            {city}
          </option>
        ))}
      </select>

      <div className="text-center mt-20">
        <h3 className="text-3xl text-slate-600 font-bold">{city}</h3>
        <h2 className="text-6xl">
          {temp}
          &deg;C
        </h2>
      </div>
    </div>
  );
}

export default Weather;
