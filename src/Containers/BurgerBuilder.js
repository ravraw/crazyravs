import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls";

import { Connect } from "react-redux";

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
      // salad: 1,
      // bacon: 1,
      // cheese: 1,
      // meat: 1
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.values(ingredients)
      // .map(key => ingredients[key])
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
    console.log(sum);
    this.setState({ purchasable: sum > 0 });
  };

  purchasingHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  cancelPurchasingHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  continuePurchasingHandler = () => {
    this.setState({
      loading: true
    });
    const order = {
      items: {
        buildYourBurger: {
          ingredients: {
            ...this.state.ingredients
          }
        }
      },
      totalPrice: this.state.totalPrice,
      customer: {
        name: "Ravindra",
        address: {
          street: "Teststreet 1",
          zip: "41324",
          country: "Germany"
        },
        email: "r@r.com"
      },
      deliveryMethod: "takeaway"
    };
    axios
      .post("/orders.json", order)
      .then(res =>
        this.setState({
          loading: false,
          purchasing: false
        })
      )
      .catch(err =>
        this.setState({
          loading: false,
          purchasing: false
        })
      );
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
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (controlType, controlName) => {
    if (this.state.ingredients[controlName] !== undefined) {
      const oldCount = this.state.ingredients[controlName];
      const updatedCount = oldCount === 0 ? 0 : oldCount - 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[controlName] = updatedCount;
      const oldPrice = this.state.totalPrice;
      const itemPrice = BuildControlsData.filter(
        el => el.label === controlType
      ).map(el =>
        el.options.filter(el => el.label === controlName).map(el => el.price)
      );
      let newPrice = oldPrice;
      if (oldCount > 0) {
        newPrice = oldPrice > 4 ? oldPrice - itemPrice : oldPrice; // need to chage to avoid hard coding
      }

      console.log(itemPrice, newPrice);
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
      this.updatePurchaseState(updatedIngredients);
    }
  };

  componentDidMount() {
    axios
      .post("/buildYourBurger.json", BuildControlsData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <BuildControls
          purchasable={this.state.purchasable}
          purchasing={this.state.purchasing}
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          data={BuildControlsData}
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          purchasingHandler={this.purchasingHandler}
          cancelPurchasing={this.cancelPurchasingHandler}
          continuePurchasing={this.continuePurchasingHandler}
          loading={this.state.loading}
        />

        <Burger ingredients={this.state.ingredients} />
      </Container>
    );
  }
}

const mapStoreToProps = store => {};

const mapDispatchToProps = (dispatch = {});

export default Connect(mapStoreToProps, mapDispatchToProps)(BurgerBuilder);
