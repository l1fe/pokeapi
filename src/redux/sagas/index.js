import { all } from 'redux-saga/effects';

import apiSaga from './api';

export default function* rootSaga() {
  yield all([
    apiSaga(),
  ]);
}
