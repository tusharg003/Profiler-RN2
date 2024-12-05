import {ADD_PROFILE} from './constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return [...state, action.data];
    default:
      return state;
  }
};
