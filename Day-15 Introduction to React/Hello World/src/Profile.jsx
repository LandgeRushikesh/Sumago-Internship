import React from "react";
import "./Profile.css";

function Profile({ student }) {
  return (
    <div className="card">
      <div className="image">
        <img src={student.Img} alt="..." />
      </div>
      <h3 className="name">{student.Name}</h3>
      <div className="Address">
        <strong>Address:</strong>
        {student.Address}
      </div>
      <p>
        <strong>Class:</strong>
        {student.Class}
      </p>
      <p>
        <strong>Age:</strong>
        {student.Age} years
      </p>
      <p>
        <strong>Blood Group:</strong>
        {student.Bg}
      </p>
    </div>
  );
}

export default Profile;
