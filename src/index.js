import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configure-store';

const store = configureStore({
  vrProperties: {
    isInVRMode: false
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
