import React from "react";

function Greeting(props) {
  return (
    <div>
      Hello ,{props.name} , Welcome to {props.city}
    </div>
  );
}

export default Greeting;
