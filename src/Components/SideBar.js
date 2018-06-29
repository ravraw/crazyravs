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
          <NavItem to="/burgerBuilder" svgName="home" name="home" />
          <NavItem to="/burgerMenu" svgName="burger" name="burgers" />
          <NavItem to="/sidesMenu" svgName="food" name="sides" />
          <NavItem
            to="/shakeMenu"
            svgName="food-and-restaurant"
            name="shakes"
          />
          <NavItem to="/comboMenu" svgName="food-1" name="combos" />
        </NavList>
      </Nav>
    </SideBar>
  );
};
