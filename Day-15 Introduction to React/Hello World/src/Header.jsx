import React from "react";
import "./Header.css";

function Header() {
  const test = {
    color: "pink",
    backgroundColor: "slateGray ",
    borderRadius: "40px",
  };
  return (
    <>
      <div style={{ color: "red", backgroundColor: "aqua" }}>
        Hey,Rushikesh here...
      </div>
      <div style={test}>Heyyyyyyyyyyyyy</div>
      <div className="test1">Hello</div>
    </>
  );
}

export default Header;
