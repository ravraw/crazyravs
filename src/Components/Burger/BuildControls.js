import React from "react";
import styled from "styled-components";
import Control from "./Control";
import ControlTypes from "./ControlTypes";

const BuildControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr ;
  align-items: stretch;
  width: 70%;
  height: 100%;
  background:lightblue;
  overflow:scroll;
  grid-auto-rows:1fr;

  @media(max-width:900px){
      grid-template-columns: 1fr;
  }
  }
`;

export default props => {
  return (
    <BuildControls>
      {props.data.map(type => (
        <ControlTypes key={type.label} label={type.label}>
          {type.options.map((el, index) => (
            <Control key={index} label={el.label} price={el.price} />
          ))}
        </ControlTypes>
      ))}
    </BuildControls>
  );
};
