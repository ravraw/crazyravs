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
      { label: "salad", price: 1 },
      { label: "salad", price: 1 },
      { label: "salad", price: 1 },
      { label: "salad", price: 1 },
      { label: "salad", price: 1 },
      { label: "salad", price: 1 }
    ],
    type: "bacon"
  }
];

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      // salad: 1,
      // bacon: 1,
      // cheese: 1,
      // meat: 1
    },
    totalPrice: 4
  };

  addIngredientHandler = (type, name) => {
    const oldCount =
      this.state.ingredients[name] === undefined
        ? 0
        : this.state.ingredients[name];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[name] = updatedCount;

    const oldPrice = this.state.totalPrice;

    const itemPrice = BuildControlsData.filter(el => el.label === type).map(
      el => el.options.filter(el => el.label === name).map(el => el.price)
    );

    const newPrice = oldPrice + Number(itemPrice[0]);

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredientHandler = (controlType, controlName) => {
    const oldCount =
      this.state.ingredients[controlName] === undefined
        ? 0
        : this.state.ingredients[controlName];
    const updatedCount = oldCount === 0 ? 0 : oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[controlName] = updatedCount;

    const oldPrice = this.state.totalPrice;

    const itemPrice = BuildControlsData.filter(
      el => el.label === controlType
    ).map(el =>
      el.options.filter(el => el.label === controlName).map(el => el.price)
    );

    const newPrice = oldPrice === 4 ? 4 : oldPrice - Number(itemPrice[0]);

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  };

  render() {
    return (
      <Container>
        <BuildControls
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          data={BuildControlsData}
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
        />
        <Burger ingredients={this.state.ingredients} />
      </Container>
    );
  }
}

export default BurgerBuilder;
