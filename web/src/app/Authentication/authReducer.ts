import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../../utils/initialState';
import { ICurrentUser } from '../../typings';

const slice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signInRequested: (state, _: PayloadAction<{email: string, password: string}>) => {},
    signOutRequested: () => {},
    authStateChange: (state, { payload }: PayloadAction<ICurrentUser | undefined>) => {
      state.currentUser = payload;
    }
  }
});

export const {
  signInRequested,
  signOutRequested,
  authStateChange
} = slice.actions;

export default slice.reducer;