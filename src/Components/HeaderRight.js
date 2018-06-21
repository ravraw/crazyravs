import React from "react";
import styled from "styled-components";

import logo from "../image/logo.png";

const HeaderRight = styled.div`
  width: 90%;
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
`;
const HeadLogo = styled.div`
  width: 80%;
  /* border: red 1px solid; */
  text-align: center;
  & > img {
    width: 225px;
  }
`;

export default () => {
  return (
    <HeaderRight>
      <HeadLogo>
        <img src={logo} alt="logo - Crazy Rav's" />
      </HeadLogo>
    </HeaderRight>
  );
};
