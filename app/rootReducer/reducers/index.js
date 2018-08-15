import data from '../../dummyData';
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../../constants';

export const visibilityReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const todoReducer = (state = data, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...data, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          const completed = !todo.completed;
          return Object.assign({}, todo, { completed });
        }
        return todo;
      });
    default:
      return state;
  }
};

export const focusReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FOCUS':
      return !state;
    default:
      return state;
  }
};
