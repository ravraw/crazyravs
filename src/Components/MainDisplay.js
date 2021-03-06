import styled from "styled-components";
import React from "react";

const MainDisplay = styled.section`
  width: 90%;
  min-width: 240px;
  overflow: scroll;
  /* background: #ccc; */
  /* border: 1px solid black;
  border-radius: 10px; */
  /* box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3); */
  flex: 1;
  & > ul {
    margin: 1.7em;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(3, minmax(min-content, 300px));
    grid-template-columns: repeat(auto-fit, minmax(min-content, 250px));

    grid-auto-rows: minmax(min-content, 300px);
    justify-content: space-around;
    align-content: center;
    grid-gap: 20px;
  }
`;

export default props => {
  return <MainDisplay>{props.children}</MainDisplay>;
};
