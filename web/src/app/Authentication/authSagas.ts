import { channel } from 'redux-saga';
import { takeEvery, all, call, put } from 'redux-saga/effects';
import firebaseInstance from '../../utils/firebase';
import { PayloadAction } from '@reduxjs/toolkit';
import { signInRequested, signOutRequested, authStateChange } from './authReducer';
import { ICurrentUser } from '../../typings';
import { appStarted } from '../Root/rootReducer';

const onAuthStateChangedChannel = channel();

function listenToAuthChangesSaga() {
  firebaseInstance.auth.onAuthStateChanged(authUser => {
    let user: ICurrentUser | undefined = undefined;

    if (authUser !== null) {
      const { uid, email, emailVerified, displayName } = authUser;

      user = {
        uid,
        email: email || '',
        emailVerified,
        displayName: displayName || ''
      };
    }

    onAuthStateChangedChannel.put({ user });
  });
}

function* onAuthStateChangedSaga({ user }: { user: ICurrentUser | undefined }) {
  yield put(authStateChange(user));
}

function* signInRequestedSaga({ payload }: PayloadAction<{ email: string, password: string }>) {
  const { email, password } = payload;

  yield call(firebaseInstance.doSignInWithEmailAndPassword, email, password);
}

function* signOutRequestedSaga() {
  yield call(firebaseInstance.doSignOut);
}

export default function* authSagas() {
  yield all([
    takeEvery(signInRequested.type, signInRequestedSaga),
    takeEvery(signOutRequested.type, signOutRequestedSaga),
    takeEvery(onAuthStateChangedChannel, onAuthStateChangedSaga),
    takeEvery(appStarted.type, listenToAuthChangesSaga)
  ]);
};
