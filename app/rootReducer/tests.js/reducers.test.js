import {
  visibilityFilter,
  todosReducer,
  focusReducer,
  addReducer
} from '../reducers';
import { setVisibilityFilter } from '../../actions';
import rootReducer from '../index';

describe('### REDUCERS ###', () => {
  describe('___ VISIBILITY FILTER ___', () => {
    const defaultState = 'SHOW_ALL';
    const event = {
      target: {
        getAttribute() {
          return 'SHOW_ACTIVE';
        },
      },
    };

    it('should be a function', () => {
      expect(visibilityFilter).toBeInstanceOf(Function);
    });

    it('should return the initial state of "SHOW_ALL" if nothing was passed in', () => {
      const state = visibilityFilter();
      expect(state).toBe('SHOW_ALL');
    });

    it('should return the new state according to the filter passed in the action', () => {
      const action = setVisibilityFilter(event);
      const newState = visibilityFilter(defaultState, action);
      expect(newState).toBe('SHOW_ACTIVE');
    });

    it('should return the initalState if the incorrect type is passed in', () => {
      
    });
  });

  describe('___ TODOS ___', () => {
    it('should be a function', () => {

    });
  });
  describe('___ FOCUS ___', () => {

  });
  describe('___ ADD ___', () => {

  });
  describe('___ ROOT REDUCER ___', () => {

  });
});
