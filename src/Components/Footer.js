import styled from "styled-components";
import React from "react";

const Footer = styled.footer`
  height: 5%;
  color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Architects Daughter", cursive;
`;

export default () => {
  return (
    <Footer>
      <p>&copy;2018 CRAZY RAV'S ALL RIGHTS RESERVED</p>
    </Footer>
  );
};
