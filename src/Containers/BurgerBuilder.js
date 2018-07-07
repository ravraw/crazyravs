import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls";
import * as actionTypes from "./Store/actions";
import * as actionCreators from "./Store/actions";

import { connect } from "react-redux";

const Container = styled.div`
  background: #ccc;
  position: relative;
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

const OrderTotal = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  margin: auto;
  /* border: 1px solid gray; */
  /* border-radius: 10px 0px 0px 0px; */
  grid-column: 1 / 3;
  background: #bbb;
  align-items: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;

  > h3 {
    width: 60%;
    text-align: center;
    font-size: 1.5em;
  }
  > button {
    height: auto;
    width: auto;
    margin: 10px;
    padding: 10px;
    font-size: 1em;
    background: tomato;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    &:disabled {
      background: gray;
    }
  }
`;

class BurgerBuilder extends Component {
  state = {
    // purchasable: false,
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
    // this.setState({ purchasable: sum > 0 });
    return sum > 0;
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

  componentDidMount() {
    // axios
    //   .post("/buildYourBurger.json", BuildControlsData)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <OrderTotal>
          <h3>Total Price : ${this.props.pri.toFixed(2)} </h3>
          <button
            onClick={this.purchasingHandler}
            disabled={!this.updatePurchaseState(this.props.ings)}
          >
            PLACE ORDER
          </button>
        </OrderTotal>
        <Container>
          <BuildControls
            // purchasable={this.updatePurchaseState(this.props.ings)}
            purchasing={this.state.purchasing}
            ingredients={this.props.ings}
            totalPrice={this.props.pri}
            data={BuildControlsData}
            add={this.props.onIngredientAdded}
            remove={this.props.onIngredientRemoved}
            purchasingHandler={this.purchasingHandler}
            // checkIfPurchasable={this.updatePurchaseState}
            cancelPurchasing={this.cancelPurchasingHandler}
            continuePurchasing={this.continuePurchasingHandler}
            loading={this.state.loading}
          />

          <Burger ingredients={this.props.ings} />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    pri: state.totalPrice,
    purchasable: state.purchasable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingType, ingName, ingPrice) => {
      dispatch(actionCreators.add_ingredient(ingType, ingName, ingPrice));
    },
    onIngredientRemoved: (ingType, ingName, ingPrice) => {
      dispatch(actionCreators.remove_ingredient(ingType, ingName, ingPrice));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
