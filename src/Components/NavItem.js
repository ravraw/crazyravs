import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

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
      <NavLink href={props.href} svgName={props.svgName} name={props.name} />
    </NavItem>
  );
};
