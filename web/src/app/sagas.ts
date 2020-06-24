import { all, call } from 'redux-saga/effects';
import authSagas from './Authentication/authSagas';

export default function* root() {
  yield all([
    call(authSagas)
  ]);
}