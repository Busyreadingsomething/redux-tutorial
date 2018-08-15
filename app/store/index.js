/**
 * In this file you will create the store to that your redux will use. You can always create the
 * store anywhere, but for now, we're going to create it in its own file. #separationOfConcerns
 *
 * This is a STRONG RECOMMENDATION. If you want to start using redux, you "SHOULD WITH ALL YOUR
 * MIGHT AND AGAINST ANY RESERVATION" install the "chrome redux dev tools". Install it and please
 * note the comment about the createStore being called.
 *
 * HINT:
 * - Read your docs
 * - https://redux.js.org/basics/store
 * - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
 */
import { createStore } from 'redux';

// This second arguement passed here is to connect your app to the Redux DevTools. DON'T REMOVE!
const store = createStore(
  'SOMETHING SHOULD GO HERE', // See Hint #1
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
);

export default store;
