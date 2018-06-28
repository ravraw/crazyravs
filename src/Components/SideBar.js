import styled from "styled-components";
import React from "react";
import NavItem from "./NavItem";

const SideBar = styled.aside`
  width: 10%;
  min-width: 100px;
  overflow: scroll;
  /* border: 1px solid black; */

  @media (max-width: 375px) {
    display: none;
  }
`;

const Nav = styled.nav`
  height: 100%;
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export default () => {
  return (
    <SideBar>
      <Nav>
        <NavList>
          <NavItem href="/" svgName="home" name="home" />
          <NavItem href="/" svgName="burger" name="burgers" />
          <NavItem href="/" svgName="food" name="sides" />
          <NavItem href="/" svgName="food-and-restaurant" name="shakes" />
          <NavItem href="/" svgName="food-1" name="combos" />
        </NavList>
      </Nav>
    </SideBar>
  );
};
