import React from "react";
import { ItemCard } from "./styles";

function index({ date, course, entity, link, image, description }) {
  return (
    <ItemCard>
      <span>{date}</span>
      <p>{course}</p>
      <p>{entity}</p>
      <a href={link} target="blank">
        <img src={image} alt={description} />
      </a>
    </ItemCard>
  );
}

export default index;
