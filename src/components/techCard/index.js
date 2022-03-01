import React from "react";
import { Item } from "./styles";

function index({ icon, tech }) {
  return (
    <Item>
      {icon}
      <span>{tech}</span>
    </Item>
  );
}

export default index;
