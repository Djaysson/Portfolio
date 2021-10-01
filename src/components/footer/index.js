import React from "react";
import { Container } from "./styles";
import Logoimg from "../../assets/images/logo.png";

function Footer() {
  return (
    <Container>
      <span>All Rights Reserved - Djayson Rodrigues</span>
      <img src={Logoimg} alt="logo" />
    </Container>
  );
}

export default Footer;
