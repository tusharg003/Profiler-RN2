//@ts-nocheck

import {
  ADD_PROFILE_TO_STORE,
  DELETE_PROFILE,
  EDIT_PROFILE,
  SET_ALL_PROFILES,
  SET_ALL_PROFILES_START,
} from './constants';
// import db from '../../backend/db.json';
const initialState = {
  profiles: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE_TO_STORE:
      return {...state, profiles: [...state.profiles, action.data]};

    case DELETE_PROFILE:
      console.log('DELETED ', action.data);
      let result = state.filter(item => {
        return item.id !== action.data.id;
      });
      console.log('Result after deletion', result);
      return {
        ...state,
        profiles: result,
      };

    case EDIT_PROFILE:
      console.log('To Edit ', action.data);
      let resultt = state.map(
        profile =>
          profile.id === action.data.id
            ? {...profile, ...action.data} // Spread the original profile and update with new data
            : profile, // Return the profile unchanged if the ID doesn't match
      );
      console.log('After editing ', resultt);
      return {
        ...state,
        profiles: resultt,
      }; // Return the updated state
    case SET_ALL_PROFILES_START:
      console.log('Loading profiles');
      return {...state, loading: true};

    case SET_ALL_PROFILES:
      console.log('Bringing in all the data from DB', action.data);
      return {
        ...state,
        profiles: action.data,
        loading: false,
      };
    default:
      return state;
  }
};
