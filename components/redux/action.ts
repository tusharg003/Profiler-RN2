//@ts-nocheck
import {ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE} from './constants';

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
