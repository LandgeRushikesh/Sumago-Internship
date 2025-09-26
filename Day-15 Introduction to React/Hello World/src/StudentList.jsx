import React from "react";

function StudentList(props) {
  return (
    <div>
      <ol>
        {props.names.map((name, index) => (
          <li key={index}>
            Name: {name} | Roll No.: {props.rollNumbers[index]}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StudentList;
