//@ts-nocheck 

import {ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE} from './constants';
import db from '../../backend/db.json';
const initialState = db.users;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return [...state, action.data];
    case DELETE_PROFILE:
      console.log('DELETED ', action.data);
      let result = state.filter(item => {
        return item.id !== action.data.id;
      });
      console.log('Result after deletion', result);
      return result;
    case EDIT_PROFILE:
      console.log('To Edit ', action.data);
      let resultt = state.map(
        profile =>
          profile.id === action.data.id
            ? {...profile, ...action.data} // Spread the original profile and update with new data
            : profile, // Return the profile unchanged if the ID doesn't match
      );
      console.log('After editing ', resultt);
      return resultt; // Return the updated state
    default:
      return state;
  }
};
