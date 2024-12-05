import {ADD_PROFILE, DELETE_PROFILE} from './constants';
import db from '../../backend/db.json';
const initialState = db.users;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return [...state, action.data];
    case DELETE_PROFILE:
    default:
      return state;
  }
};
