//@ts-nocheck

import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from './constants';

function* getProfilesAPI() {
  try {
    // Fetch data from the API
    let response = yield fetch(
      'https://6751ffc5d1983b9597b5162a.mockapi.io/profiler/profiles',
    );
    let data = yield response.json();

    console.log('data');

    // Dispatch an action to store the fetched data
    yield put({type: actionType.SET_ALL_PROFILES, data});
  } catch (error) {
    console.error('Error fetching profiles:', error);
  }
}

function* addProfileAPI(action) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.data),
  };
  try {
    let data = yield fetch(
      'https://6751ffc5d1983b9597b5162a.mockapi.io/profiler/profiles',
      request,
    );
    data = yield data.json();
    console.log('Adding profile ', data);
    yield put({type: actionType.ADD_PROFILE_TO_STORE, data});
  } catch (error) {
    console.log('Error while adding profile ', error);
  }
}

function* profileSaga() {
  console.log('calling saga');
  yield takeEvery(actionType.SET_ALL_PROFILES_START, getProfilesAPI);
  yield takeEvery(actionType.ADD_PROFILE, addProfileAPI);
}

export default profileSaga;
