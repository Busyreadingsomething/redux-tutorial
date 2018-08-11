import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import Item from './Item';

const List = ({ todos, toggle }) => (
  <div className="list">
    <p className="list-title">
      Current Todos
    </p>
    <div className="list-content">
      {
        todos.map(todo => <Item key={todo.id} todo={todo} toggle={toggle} />)
      }
    </div>
  </div>
);

List.propTypes = {
  todos: arrayOf(object).isRequired,
  toggle: func.isRequired,
};

export default List;
