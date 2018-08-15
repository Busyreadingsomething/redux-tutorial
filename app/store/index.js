/**
 * In this file you will create the store to that your redux will use. You can always create the
 * store anywhere, but for now, we're going to create it in its own file. #separationOfConcerns
 *
 * HINT:
 * - Read your docs
 * - https://redux.js.org/basics/store
 */
import { createStore } from 'redux';
import reducer from '../rootReducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
