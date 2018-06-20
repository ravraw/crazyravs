import styled from "styled-components";
import React, { Component } from "react";

import Header from "./Header";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background: pink;
`;

class LayoutContainer extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <MainContent>
          <SideBar />
          <MainDisplay />
        </MainContent>
        <Footer />
      </Layout>
    );
  }
}

export default LayoutContainer;
