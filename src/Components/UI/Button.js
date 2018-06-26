import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 45%;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  font-size: 1em;
  background: ${props => (props.red ? "red" : "green")};
  /* color: ${props => (props.primary ? "white" : "palevioletred")}; */
`;

export default props => {
  return <Button {...props}>{props.children}</Button>;
};
