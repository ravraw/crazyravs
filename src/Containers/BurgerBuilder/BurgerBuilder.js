import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: green;
`;

class BurgerBuilder extends Component {
  render() {
    return (
      <Container>{/* <div>
          <h1>Hello</h1>
        </div> */}</Container>
    );
  }
}

export default BurgerBuilder;
