import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Nav_Link = styled.div`
  width: 100%;
  height: 100%;
  /* color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  /* border: 1px solid red; */
`;

const Svg = styled.svg`
  width: 50px;
  height: 50px;
`;

const P = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Architects Daughter", cursive;
  text-transform: uppercase;
  /* border: 1px solid red; */
  margin-top: 10px;
`;

export default props => {
  return (
    <Nav_Link>
      <NavLink to={props.to}>
        <Svg>
          <use xlinkHref={`svg/sprite.svg#${props.svgName}`} />
        </Svg>
        <P>{props.name}</P>
      </NavLink>
    </Nav_Link>
  );
};
