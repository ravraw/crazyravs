import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import SideBar from "../Components/SideBar";
import MainDisplay from "../Components/MainDisplay";
import Footer from "../Components/Footer";

import BurgerBuilder from "../Containers/BurgerBuilder";
import BurgerMenu from "../Containers/BurgerMenu";
import ShakeMenu from "../Containers/ShakeMenu";
import Auth from "../Containers/Auth";

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
            <Switch>
              <Route path="/burgerBuilder" component={BurgerBuilder} />
              <Route path="/burgerMenu" component={BurgerMenu} />
              <Route path="/shakeMenu" component={ShakeMenu} />
              <Route path="/login" component={Auth} />
            </Switch>
          </MainDisplay>
        </MainContent>
        <Footer />
      </Wrapper>
    );
  }
}

export default Layout;
