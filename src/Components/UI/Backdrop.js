import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default props => {
  return (
    <Backdrop
      style={{
        display: props.purchasing ? "block" : "none"
      }}
      onClick={props.cancelPurchasing}
    >
      {props.children}
    </Backdrop>
  );
};
