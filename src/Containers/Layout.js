import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import SideBar from "../Components/SideBar";
import MainDisplay from "../Components/MainDisplay";
import Footer from "../Components/Footer";

import BurgerBuilder from "../Containers/BurgerBuilder";
import BurgerMenu from "../Containers/BurgerMenu";
import ShakeMenu from "../Containers/ShakeMenu";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  /* border: 1px solid red; */
  display: flex;
  flex-flow: column;
  > h1{
    width:100%,
    height:100%
  }
`;

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <MainContent>
          <SideBar />
          <MainDisplay>
            <Route path="/burgerBuilder" component={BurgerBuilder} />
            <Route path="/burgerMenu" component={BurgerMenu} />
            <Route path="/shakeMenu" component={ShakeMenu} />
          </MainDisplay>
        </MainContent>
        <Footer />
      </Wrapper>
    );
  }
}

export default Layout;
