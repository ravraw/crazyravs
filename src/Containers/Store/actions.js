//  BurgerBuilder actions
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

//actionCreaters

// export const func = (ingType, ingName, ingPrice) => {
//   return {
//     type: ADD_INGREDIENT,
//     payload: {
//       ingredientType: ingType,
//       ingredientName: ingName,
//       ingredientPrice: ingPrice
//     }
//   };
// };

export const add_ingredient = (ingType, ingName, ingPrice) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_INGREDIENT,
        payload: {
          ingredientType: ingType,
          ingredientName: ingName,
          ingredientPrice: ingPrice
        }
      });
    }, 2000);
  };
};

export const remove_ingredient = (ingType, ingName, ingPrice) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_INGREDIENT,
        payload: {
          ingredientType: ingType,
          ingredientName: ingName,
          ingredientPrice: ingPrice
        }
      });
    }, 2000);
  };
};
