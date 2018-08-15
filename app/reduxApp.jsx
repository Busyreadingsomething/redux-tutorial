import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodosContainer from './containers/Todos/container';

ReactDOM.render(
  <Provider store={store}>
    <TodosContainer />
  </Provider>,
  document.getElementById('app'), // eslint-disable-line no-undef
);
