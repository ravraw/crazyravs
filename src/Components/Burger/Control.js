import React from "react";
import styled from "styled-components";
const Control = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  margin: 5px 0;
  > h4 {
    margin: 0 15px;

    width: 30%;
    text-align: left;
    text-transform: capitalize;
  }
  > p {
    width: 20%;
    color: blue;
    text-align: center;
    display: inline-block;
  }
  > button {
    margin: 0 5px;
    width: 25%;
    display: block;
    background: gray;
    color: white;
  }
  .less {
    background: red;
    &:disabled {
      background: gray;
    }
  }
  .more {
    background: green;
  }
`;

export default props => {
  return (
    <Control>
      <h4>{props.label}</h4>
      <p>{props.count === 0 ? null : props.count}</p>
      <p>${props.price.toFixed(2)}</p>
      <button
        className="less"
        disabled={props.count < 1 || props.count === undefined}
        onClick={event => {
          props.remove(props.controlType, props.label);
          console.log(props);
        }}
      >
        LESS
      </button>
      <button
        className="more"
        onClick={() => props.add(props.controlType, props.label)}
      >
        MORE
      </button>
    </Control>
  );
};
