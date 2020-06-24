import { createSlice } from '@reduxjs/toolkit';
import initialState from '../../utils/initialState';

const slice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    appStarted: () => {}
  }
});

export const {
  appStarted
} = slice.actions;

export default slice.reducer;
