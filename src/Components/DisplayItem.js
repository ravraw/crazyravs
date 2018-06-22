import React from "react";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  border: 1px solid gray;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  list-style: none;
  background: white;
  flex: 1;

  > img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  > h3 {
    margin: 5px 0;
    padding: 0;
    text-transform: uppercase;
    text-align: center;
  }
  > p {
    margin: 0;
    padding: 0;
  }
  > button {
    width: 100%;
    background: #ff6347;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px 0;
    padding: 5px;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: white;
      background: rgba(238, 130, 7, 0.9);
      cursor: pointer;
    }
  }
`;
export default props => {
  return (
    <Li>
      <img src={`./image/${props.imageName}.jpg`} alt={props.imageName} />
      <h3 class="menu-item__name">{props.burgerName}</h3>
      <h3>$12</h3>
      <p>{props.burgerDescription}</p>
      <button>order</button>
    </Li>
  );
};
