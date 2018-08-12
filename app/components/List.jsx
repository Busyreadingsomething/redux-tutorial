import React from 'react';
import {
  arrayOf,
  func,
  object,
  string,
} from 'prop-types';
import Item from './Item';

const filtering = (todos, visibilityFilter) => {
  let filtered = todos;
  if (visibilityFilter === 'SHOW_COMPLETED') {
    filtered = todos.filter(todo => todo.completed === true);
  } else if (visibilityFilter === 'SHOW_ACTIVE') {
    filtered = todos.filter(todo => todo.completed === false);
  }
  return filtered;
};

const List = ({ todos, toggle, filter }) => {
  const filtered = filtering(todos, filter);
  return (
    <div className="list">
      <p className="list-title">
        Current Todos
      </p>
      <div className="list-content">
        {
          filtered.map(todo => <Item key={todo.id} todo={todo} toggle={toggle} />)
        }
      </div>
    </div>
  );
};

List.propTypes = {
  todos: arrayOf(object).isRequired,
  toggle: func.isRequired,
  filter: string.isRequired,
};

export default List;
