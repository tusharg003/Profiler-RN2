import {ADD_PROFILE} from './constants';

//@ts-ignore
export function addProfile(item) {
  return {
    type: ADD_PROFILE,
    data: item,
  };
}
