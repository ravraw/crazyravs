import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const NavItem = styled.li`
  list-style: none;
  margin: 5px 0;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  flex: 1;
  /* border: 1px solid red; */
`;

export default props => {
  return (
    <NavItem>
      <NavLink href={props.href} svgName={props.svgName} name={props.name} />
    </NavItem>
  );
};
