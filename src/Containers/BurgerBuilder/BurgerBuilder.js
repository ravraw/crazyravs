import React, { Component } from "react";
import styled from "styled-components";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls";
const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Lato", sans-serif;
  display: flex;

  @media (min-width: 700) {
    flex-direction: column;
  }
`;

const BuildControlsData = [
  {
    label: "bread options",
    options: [
      { label: "option1", price: 1 },
      { label: "option2", price: 1 },
      { label: "option3", price: 1 },
      { label: "option4", price: 1 },
      { label: "option5", price: 1 }
    ],
    type: "bread-bottom"
  },
  {
    label: "patty options",
    options: [
      { label: "option1", price: 1 },
      { label: "option2", price: 1 },
      { label: "option3", price: 1 },
      { label: "option4", price: 1 },
      { label: "option5", price: 1 }
    ],
    type: "meat"
  },
  {
    label: "salad options",
    options: [
      { label: "option1", price: 1 },
      { label: "option2", price: 1 },
      { label: "option3", price: 1 },
      { label: "option4", price: 1 },
      { label: "option5", price: 1 }
    ],
    type: "salad"
  },
  {
    label: "pickle options",
    options: [
      { label: "option1", price: 1 },
      { label: "option2", price: 1 },
      { label: "option3", price: 1 },
      { label: "option4", price: 1 },
      { label: "option5", price: 1 }
    ],
    type: "salad"
  },
  {
    label: "cheese options",
    options: [
      { label: "option1", price: 1 },
      { label: "option2", price: 1 },
      { label: "option3", price: 1 },
      { label: "option4", price: 1 },
      { label: "option5", price: 1 }
    ],
    type: "cheese"
  },
  {
    label: "sauce option",
    options: [
      { label: "option1", price: 1 },
      { label: "option2", price: 1 },
      { label: "option3", price: 1 },
      { label: "option4", price: 1 },
      { label: "option5", price: 1 }
    ],
    type: "bacon"
  }
];

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const oldPrice = this.state.totalPrice;
  };

  render() {
    return (
      <Container>
        <BuildControls data={BuildControlsData} />
        <Burger ingredients={this.state.ingredients} />
      </Container>
    );
  }
}

export default BurgerBuilder;
