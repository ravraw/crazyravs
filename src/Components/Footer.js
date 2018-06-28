import styled from "styled-components";
import React from "react";

const Footer = styled.footer`
  height: 5%;
  color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Architects Daughter", cursive;
  font-size: 1.3em;
  /* background: tomato; */
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.5);
`;

export default () => {
  return (
    <Footer>
      <p>&copy;2018 CRAZY RAV'S ALL RIGHTS RESERVED</p>
    </Footer>
  );
};
