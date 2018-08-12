import constants from './constants';

/**
 * You are going to design your actions in this folder. Keeping your code organized is far more important in the long run
 * thank trying to make something that workds immediately. Coding is a team sport so always remember that other people
 * adopt your code at some point to work on it.
 * 
 * Below is an example of an action. Only this file will have an example for you to use.
 * 
 * Add the necessary actions in this file and be sure to export them.
 * 
 * Be sure to remove the example when you are done.
 * 
 * HINTS:
 * - Actions always return an object with a type property
 * - Additional properties are not always requried
 * 
 * NOTES:
 * - Be naming is important, so be sure to check the tests for the expected names
 * 
 */

const ACTION = data => ({
  type: constants.ACTION_TYPE,
  data,
});

export default {
  ACTION,
};
