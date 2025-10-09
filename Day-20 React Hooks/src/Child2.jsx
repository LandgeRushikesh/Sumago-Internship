import React from "react";
import { useContext } from "react";
import { NameContext } from "./Context";

function Child2() {
  const name = useContext(NameContext);
  return <div>{name}</div>;
}

export default Child2;
