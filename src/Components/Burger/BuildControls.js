import React from "react";
import styled from "styled-components";
import Control from "./Control";
import ControlTypes from "./ControlTypes";

import Modal from "../UI//Modal";
import OrderSummary from "./OrderSummary";
import Spinner from "../UI/Spinner";

const BuildControls = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* align-items: stretch; */
  width: 70%;
  height: 100%;
  /* background: lightblue; */
  overflow: scroll;

  /* border-radius: 10px 0px 0px 10px;
  border: 1px solid lightgray; */
  /* box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.3); */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default props => {
  let orderSummary = <Spinner />;

  if (!props.loading) {
    orderSummary = (
      <OrderSummary
        totalPrice={props.totalPrice.toFixed(2)}
        ingredients={props.ingredients}
        cancelPurchasing={props.cancelPurchasing}
        continuePurchasing={props.continuePurchasing}
        loading={props.loading}
      />
    );
  }

  return (
    <BuildControls>
      {props.purchasing ? (
        <Modal
          purchasing={props.purchasing}
          cancelPurchasing={props.cancelPurchasing}
        >
          {orderSummary}
        </Modal>
      ) : null}
      {props.data.map(type => (
        <ControlTypes key={type.label} label={type.label}>
          {type.options.map((el, index) => (
            <Control
              controlType={type.label}
              add={props.add}
              remove={props.remove}
              key={index}
              label={el.label}
              count={props.ingredients[el.label]}
              price={el.price}
              purchasable={props.purchasable}
              checkIfPurchasable={props.checkIfPurchasable}
            />
          ))}
        </ControlTypes>
      ))}
    </BuildControls>
  );
};
