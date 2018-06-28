import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const OrderSummary = styled.div`
  width: 100%;
  height: 100%;
  background: pink;
  > * {
    text-align: center;
    list-style: none;
    margin: 10px;
    padding: 10px;
  }
  > ul {
    text-transform: capitalize;
  }
`;

export default props => {
  const ingredients = Object.keys(props.ingredients).map(el => (
    <li key={el}>
      {el} : {props.ingredients[el]}
    </li>
  ));
  return (
    <OrderSummary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients...</p>
      <ul>{ingredients}</ul>

      <h3>Total Price: {props.totalPrice}</h3>
      <p>Continue to checkout ?</p>
      <Button red onClick={props.cancelPurchasing}>
        Cancel
      </Button>
      <Button onClick={props.continuePurchasing}>Continue</Button>
    </OrderSummary>
  );
};
