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
  .less {
    background: red;
  }
  .more {
    background: green;
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
`;

export default props => {
  return (
    <Control>
      <h4>{props.label}</h4>
      <p>${props.price}</p>
      <button class="less">LESS</button>
      <button class="more">MORE</button>
    </Control>
  );
};
