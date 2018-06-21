import React from "react";
import styled from "styled-components";

import HeadItem from "./HeadItem";

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

const HeadNav = styled.nav`
  width: 20%;
`;
const HeadList = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  justify-content: flex-end;
  align-items: center;
`;

export default () => {
  return (
    <HeaderRight>
      <HeadLogo>
        <img src={logo} alt="logo - Crazy Rav's" />
      </HeadLogo>
      <HeadNav>
        <HeadList>
          <HeadItem name="login" />
          <HeadItem name="order" />
        </HeadList>
      </HeadNav>
    </HeaderRight>
  );
};
