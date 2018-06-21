import React from "react";
import styled from "styled-components";

const NavLink = styled.a`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  /* border: 1px solid red; */
  &:hover,
  &:active {
    color: tomato;
    fill: tomato;
    transform: scale(1.1);
  }
`;

const Svg = styled.svg`
  width: 50px;
  height: 50px;
`;
// const Use = styled.use``;
const P = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Architects Daughter", cursive;
  text-transform: uppercase;
  /* border: 1px solid red; */
  margin-top: 10px;
`;

export default props => {
  return (
    <NavLink>
      <Svg>
        <use xlinkHref={`svg/sprite.svg#${props.svgName}`} />
      </Svg>
      <P>{props.name}</P>
    </NavLink>
  );
};
