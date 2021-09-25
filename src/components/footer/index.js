import React from "react";
import { Container } from "./styles";
import Logoimg from "../../assets/images/logo.png";

function Footer() {
  return (
    <Container>
      <span>
        All Rights Reserved - Djayson Rodrigues <img src={Logoimg} alt="logo" />
      </span>
    </Container>
  );
}

export default Footer;
