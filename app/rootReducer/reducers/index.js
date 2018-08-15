import { EXAMPLE_TYPE } from '../../constants';
import data from '../../dummyData'; // eslint-disable-line no-unused-vars

/**
 * In this file, you will be putting all your reducers here. The name reducer is very unique and
 * it's best to think about it as you build one. First off, ask yourself what is the dictionary
 * definition of reduce?
 *
 * I'll give you a min to google it...
 *
 * Interestingly, it means to make it smaller or less. They go over this topic in detail, but you
 * just need to get the gist of it right now. You are taking your code state with all the changes,
 * and returning a single state.
 *
 * BE WARY NOT TO MUTATE THE STATE! You are updating, not mutating!
 *
 * HINTS:
 * - READ THE DOCS
 * - There are a lot of ways to copy complex data types (Arrays, and Objects)
 *   Explore the options!
 */


export const exampleReducer = (state = 'initial_state', action) => { // eslint-disable-line import/prefer-default-export
  switch (action.type) {
    case EXAMPLE_TYPE:
      return 'NEW_STATE';
    default:
      return state;
  }
};
