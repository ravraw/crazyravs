import React, { Component } from "react";
import styled from "styled-components";

import Burger from "../../Components/Burger/Burger";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class BurgerBuilder extends Component {
  render() {
    return (
      <Container>
        <Burger />
      </Container>
    );
  }
}

export default BurgerBuilder;
