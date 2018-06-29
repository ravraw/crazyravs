import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
// import { Link } from "react-router-dom";

const NavItem = styled.li`
  list-style: none;
  margin: 10px;

  text-align: center;
  cursor: pointer;
  flex: 1;
  /* border: 1px solid red; */
  &:hover,
  &:active,
  .active {
    color: tomato;
    fill: tomato;
    transform: scale(1.1);
  }
`;

export default props => {
  return (
    <NavItem>
      <NavLink
        to={props.to}
        href={props.href}
        svgName={props.svgName}
        name={props.name}
      />
    </NavItem>
  );
};
