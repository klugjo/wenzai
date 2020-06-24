import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from '../app/reducer';
import sagas from '../app/sagas';

const isDevelopment = process.env.NODE_ENV === 'development';

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

if (isDevelopment) {
  middleware.push(logger);
}

const store = configureStore({
  reducer,
  devTools: isDevelopment,
  middleware
});

sagaMiddleware.run(sagas);

export default store;
