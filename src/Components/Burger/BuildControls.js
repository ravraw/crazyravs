import React from "react";
import styled from "styled-components";
import Control from "./Control";
import ControlTypes from "./ControlTypes";

const BuildControls = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: stretch;
  width: 70%;
  height: 100%;
  /* background:lightblue; */
  overflow: scroll;
  grid-auto-rows: 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const OrderTotal = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  border: 1px solid gray;
  border-radius: 15px;
  grid-column: 1 / 3;
  background: pink;
  justify-content: space-around;
  align-items: center;

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
  }
`;

export default props => {
  return (
    <BuildControls>
      <OrderTotal>
        <h3>Total Price : ${props.totalPrice} </h3>
        <button>PLACE ORDER</button>
      </OrderTotal>

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
            />
          ))}
        </ControlTypes>
      ))}
    </BuildControls>
  );
};
