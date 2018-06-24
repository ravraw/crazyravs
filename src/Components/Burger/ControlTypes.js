import React from "react";
import styled from "styled-components";

const ControlTypes = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  margin: 10px 5px;
  > h3 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;

export default props => {
  return (
    <ControlTypes>
      <h3>{props.label}</h3>
      {props.children}
    </ControlTypes>
  );
};
