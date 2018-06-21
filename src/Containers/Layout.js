import React, { Component } from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import SideBar from "../Components/SideBar";
import MainDisplay from "../Components/MainDisplay";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  /* border: 1px solid red; */
  display: flex;
  flex-flow: column;
`;

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <MainContent>
          <SideBar />
          <MainDisplay />
        </MainContent>
        <Footer />
      </Wrapper>
    );
  }
}

export default Layout;
