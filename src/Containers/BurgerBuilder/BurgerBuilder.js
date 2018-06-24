import React, { Component } from "react";
import styled from "styled-components";

import Burger from "../../Components/Burger/Burger";
const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Lato", sans-serif;
`;

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Container>
        <Burger ingredients={this.state.ingredients} />
      </Container>
    );
  }
}

export default BurgerBuilder;
