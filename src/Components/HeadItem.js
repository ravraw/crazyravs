import React from "react";
import styled from "styled-components";

const HeadItem = styled.li`
list-style: none;
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Architects Daughter", cursive;
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
  padding: 20px;
  cursor: pointer;
  flex: 1;
  /* border: 1px solid red; */

  &:hover,
  &:active{
    color: tomato;
  transform: scale(1.1);

  }
}
`;

const P = styled.p``;

export default props => {
  return (
    <HeadItem>
      <P>{props.name}</P>
    </HeadItem>
  );
};
