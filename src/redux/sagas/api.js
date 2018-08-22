import { all, call, put, takeLatest } from 'redux-saga/effects';

import apiClient from 'redux/apiClient';

import { api } from '../types';

function* fetchPokemons(action) {
  try {
    const resp = yield call(apiClient.fetchPokemons);
    yield put({
      type: api.fetchPokemons.success,
      response: resp.data,
    });
  } catch (e) {
    yield put({
      type: api.fetchPokemons.failure,
      message: e.message,
    });
  }
}

export default function* apiSaga() {
  const watches = [
    yield takeLatest(api.fetchPokemons.request, fetchPokemons),
  ];

  yield all(watches);
};
