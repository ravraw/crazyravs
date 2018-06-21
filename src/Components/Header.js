import styled from "styled-components";
import React from "react";
import HeaderRight from "./HeaderRight";

const Header = styled.header`
  height: 15%;
  width: 100%;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

const HeaderLeft = styled.div`
  width: 15%;
  position: relative;

  &:hover {
    fill: tomato;
    cursor: pointer;
    transform: scale(1.1);
  }
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Svg = styled.svg`
  width: 50px;
  height: 50px;
`;

export default props => {
  return (
    <Header>
      <HeaderLeft>
        <div>
          <Svg>
            <use xlinkHref={"svg/sprite.svg#menu"} />
          </Svg>
        </div>
      </HeaderLeft>
      <HeaderRight />
    </Header>
  );
};
