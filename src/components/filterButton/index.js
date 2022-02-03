import React from "react";
import { Container } from "../filterButton/styles";

function Button({ filter, button }) {
  return (
    <Container>
      {button.map((but, i) => {
        return (
          <button type="button" key={i} onClick={() => filter(but)}>
            {but}
          </button>
        );
      })}
    </Container>
  );
}

export default Button;
