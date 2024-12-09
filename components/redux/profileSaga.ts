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

    console.log('Fetched data:', data);

    // Check for null or invalid values in the required fields
    const validData = data.filter(profile => {
      // Ensure the required fields (name, age, mail) are not null, undefined, or empty
      return profile.name && profile.age && profile.mail;
    });

    console.log('Filtered valid data:', validData);

    // Dispatch an action to store the filtered data
    yield put({type: actionType.SET_ALL_PROFILES, data: validData});
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

function* editProfileAPI(action) {
  const request = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(action.data),
  };
  // console.log(`Editing profile with id ${id} `, action);
  const id = action.data.id;
  try {
    let data = yield fetch(
      `https://6751ffc5d1983b9597b5162a.mockapi.io/profiler/profiles/${id}`,
      request,
    );
    data = yield data.json();
    console.log(`Editing profile with id ${id} `, data);
    yield put({type: actionType.EDIT_PROFILE_FROM_STORE, data});
  } catch (error) {
    console.log('Error while editing profile ', error);
  }
}

function* deleteProfileAPI(action) {
  const request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const item = action.data;
  const id = action.data.id;
  console.log(item.id);
  try {
    // DELETE request to the API
    let response = yield fetch(
      `https://6751ffc5d1983b9597b5162a.mockapi.io/profiler/profiles/${id}`,
      request,
    );

    if (response.ok) {
      console.log(`Successfully deleted profile with ID: ${id}`);
      // Dispatch an action to remove the profile from the store
      yield put({type: actionType.DELETE_PROFILE_FROM_STORE, data: id});
    } else {
      console.error(
        `Failed to delete profile with ID: ${id}. Status: ${response.status}`,
      );
    }
  } catch (error) {
    console.error('Error while deleting profile:', error);
  }
}

function* profileSaga() {
  console.log('calling saga');
  yield takeEvery(actionType.SET_ALL_PROFILES_START, getProfilesAPI);
  yield takeEvery(actionType.ADD_PROFILE, addProfileAPI);
  yield takeEvery(actionType.EDIT_PROFILE, editProfileAPI);
  yield takeEvery(actionType.DELETE_PROFILE, deleteProfileAPI);
}

export default profileSaga;
