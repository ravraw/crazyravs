import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls";
import * as actionTypes from "./Store/actions";

import { connect } from "react-redux";

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

  // addIngredientHandler = (type, name) => {
  //   const oldCount =
  //     this.props.ings[name] === undefined ? 0 : this.props.ings[name];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = { ...this.props.ings };
  //   updatedIngredients[name] = updatedCount;

  //   const oldPrice = this.props.pri;

  //   const itemPrice = BuildControlsData.filter(el => el.label === type).map(
  //     el => el.options.filter(el => el.label === name).map(el => el.price)
  //   );

  //   const newPrice = oldPrice + Number(itemPrice[0]);
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // removeIngredientHandler = (type, name) => {
  //   if (this.props.ings[name] !== undefined) {
  //     const oldCount = this.props.ings[name];
  //     const updatedCount = oldCount === 0 ? 0 : oldCount - 1;
  //     const updatedIngredients = { ...this.props.ings };
  //     updatedIngredients[name] = updatedCount;
  //     const oldPrice = this.props.pri;
  //     const itemPrice = BuildControlsData.filter(el => el.label === type).map(
  //       el => el.options.filter(el => el.label === name).map(el => el.price)
  //     );
  //     let newPrice = oldPrice;
  //     if (oldCount > 0) {
  //       newPrice = oldPrice > 4 ? oldPrice - itemPrice : oldPrice; // need to chage to avoid hard coding
  //     }

  //     console.log(itemPrice, newPrice);
  //     this.setState({
  //       totalPrice: newPrice,
  //       ingredients: updatedIngredients
  //     });
  //     this.updatePurchaseState(updatedIngredients);
  //   }
  // };

  componentDidMount() {
    axios
      .post("/buildYourBurger.json", BuildControlsData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <BuildControls
          purchasable={this.state.purchasable}
          purchasing={this.state.purchasing}
          ingredients={this.props.ings}
          totalPrice={this.props.pri}
          data={BuildControlsData}
          add={this.props.onIngredientAdded}
          remove={this.props.onIngredientRemoved}
          purchasingHandler={this.purchasingHandler}
          cancelPurchasing={this.cancelPurchasingHandler}
          continuePurchasing={this.continuePurchasingHandler}
          loading={this.state.loading}
        />

        <Burger ingredients={this.props.ings} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    pri: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingType, ingName, ingPrice) => {
      dispatch({
        type: actionTypes.ADD_INGREDIENT,
        payload: {
          ingredientType: ingType,
          ingredientName: ingName,
          ingredientPrice: ingPrice
        }
      });
    },
    onIngredientRemoved: (ingType, ingName, ingPrice) => {
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        payload: {
          ingredientType: ingType,
          ingredientName: ingName,
          ingredientPrice: ingPrice
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
