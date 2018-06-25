import React from "react";
import styled from "styled-components";

const ControlTypes = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid #ccc; */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: 10px 5px;
  padding: 20px;
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
