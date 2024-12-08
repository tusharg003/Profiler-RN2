//@ts-nocheck
import {
  ADD_PROFILE,
  DELETE_PROFILE,
  EDIT_PROFILE,
  GET_ALL_PROFILES,
  SET_ALL_PROFILES,
  SET_ALL_PROFILES_START,
} from './constants';

export function gettingProfiles() {
  return {type: SET_ALL_PROFILES_START};
}

export function setProfile(item) {
  console.log('items loading');
  return {
    type: SET_ALL_PROFILES,
    data: item,
  };
}
export function getProfiles() {
  return {
    type: GET_ALL_PROFILES,
  };
}
//@ts-ignore
export function addProfile(item) {
  return {
    type: ADD_PROFILE,
    data: item,
  };
}
//@ts-ignore
export function deleteProfile(item) {
  return {
    type: DELETE_PROFILE,
    data: item,
  };
}

export function editProfile(item) {
  return {
    type: EDIT_PROFILE,
    data: item,
  };
}
