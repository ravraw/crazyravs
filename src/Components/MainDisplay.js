import styled from "styled-components";
import React from "react";

const MainDisplay = styled.section`
  width: 90%;
  min-width: 240px;
  overflow: scroll;
  background: #ccc;
`;

export default () => {
  return <MainDisplay />;
};
