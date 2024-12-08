//@ts-nocheck

import {
  ADD_PROFILE_TO_STORE,
  DELETE_PROFILE_FROM_STORE,
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

    case DELETE_PROFILE_FROM_STORE:
      console.log('Before Deletion:', state.profiles); // Log profiles before deletion
      const result = state.profiles.filter(
        profile => profile.id !== action.data, // this is the id
      ); // Filter profiles
      console.log('After Deletion:', result); // Log profiles after deletion
      return {
        ...state,
        profiles: result, // Return new state with updated profiles array
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
