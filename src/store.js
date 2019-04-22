import { createStore } from 'redux';

let initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CAREGORY';
export const AUTHOR_FIRST = 'AUTHOR_FIRST';
export const AUTHOR_LAST = 'AUTHOR_LAST';
export const ADD_INGREDIENT = 'ADD_INGREDIENTS';

function reducer(state = initialState, action) {
  
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload};
    case UPDATE_CATEGORY:
      return { ...state, category: payload};
    case AUTHOR_FIRST:
      return { ...state, authorFirst: payload};
    case AUTHOR_LAST:
      return { ...state, authorLast: payload};
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return {...state, ingredients: newIngredients};
    default: 
      return state;
  }
};

export default createStore(reducer);