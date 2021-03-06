import React from 'react';
import ReactDOM from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import Routing from './app/Root/Routing';

import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
