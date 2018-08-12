import TYPES from './constants'; // eslint-disable-line

/**
 * The reducer is designed to handle the actions that are dispatched to the store, and process
 * the appropriate changes accordingly. In other words, this is where all the store logic should be
 * present. You will import that appropriate constants and use them here.
 *
 * HINTS:
 * - DO NOT MUTATE THE STATE. Make use of the built in methods that javascript has to avoid that
 * - Don't forget about the constants you made. The reducer is expecting certain actions
 */

const todosReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todosReducer;
