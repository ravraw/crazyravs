import React from "react";
import styled from "styled-components";
import BurgerIngredient from "./BurgerIngredient";

const Wrapper = styled.div`
  margin: auto;
  height: 100%;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 50%;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  /*
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  } */
`;

// Converts ingredients object recieved as props into individual BurgerIngredient component.
// 1) Generates an arrays of ingredient names(Keys).
// 2) Uses Map on the keys array to crete Array with .length equal to quantity of the ingredient .
// 3) Uses Map on the new empty array, and return <BurgerIngredient /> component with keyand type as props

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients.....</p>;
  }

  return (
    <Wrapper>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Wrapper>
  );
};

export default burger;
