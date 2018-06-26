import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const Modal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    /* left: calc(50% - 250px); */
  }
`;

export default props => {
  return (
    <React-Fragment>
      <Backdrop
        purchasing={props.purchasing}
        cancelPurchasing={props.cancelPurchasing}
      />
      <Modal
        style={{
          transform: props.purchasing
            ? "translateY(-25vh) translateX(-50vh)"
            : "translateY(-100vh) translateX(-50vh)",
          opacity: props.purchasing ? "1" : "0"
        }}
      >
        {props.children}
      </Modal>
    </React-Fragment>
  );
};
