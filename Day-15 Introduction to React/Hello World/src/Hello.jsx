import React from "react";

function Hello(props) {
  return (
    <>
      <button onClick={props.sayHello}>Click Me</button>
      <button onClick={props.sayBye}>Click Me</button>
    </>
  );
}

export default Hello;
