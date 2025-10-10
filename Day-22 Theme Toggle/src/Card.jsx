import React, { useContext } from "react";
import { ThemeContext } from "./UserContext";

function Cards() {
  const { profiles } = useContext(ThemeContext);
  return (
    <div className="flex justify-around items-center">
      {profiles.map((profile, index) => (
        <div
          className="card w-[300px] shadow-lg shadow-black mb-4 py-3 px-4 rounded-lg"
          key={index}
        >
          <div className="image flex justify-center items-center my-1">
            <img src={profile.Img} alt="..." className="rounded-full w-[80%]" />
          </div>
          <h3 className="name text-center font-bold text-2xl my-1">
            {profile.Name}
          </h3>
          <div className="Address my-1">
            <strong>Address:</strong>
            {profile.Address}
          </div>
          <p className="my-1">
            <strong>Class:</strong>
            {profile.Class}
          </p>
          <p className="my-1">
            <strong>Age:</strong>
            {profile.Age} years
          </p>
          <p className="my-1">
            <strong>Blood Group:</strong>
            {profile.Bg}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
