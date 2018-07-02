import * as actionTypes from "./actions";

const initialState = {
  ingredients: {},
  totalPrice: 4,
  purchasable: false
};

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] === undefined
              ? 1
              : state.ingredients[action.payload.ingredientName] + 1
        },

        totalPrice: state.totalPrice + action.payload.ingredientPrice
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] - 1
        },
        totalPrice: state.totalPrice - action.payload.ingredientPrice
      };
    default:
      return state;
  }
};

export default burgerBuilderReducer;
