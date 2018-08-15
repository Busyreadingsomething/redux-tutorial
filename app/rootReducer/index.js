/**
 * Here you will create the root reducer for your store. For reference, be sure to go and review
 * the documentation.
 *
 * HINT:
 * - https://redux.js.org/basics/reducers
 *    (READ YOUR DOCS)
 */
import { combineReducers } from 'redux';
import { visibilityReducer, todoReducer, focusReducer } from './reducers';

const rootReducer = combineReducers({ visibilityReducer, todoReducer, focusReducer });

export default rootReducer;
