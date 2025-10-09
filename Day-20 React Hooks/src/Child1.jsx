import React from "react";
import { useContext } from "react";
import { NameContext } from "./Context";

function Child1() {
  const name = useContext(NameContext);
  return <div>{name}</div>;
}

export default Child1;
