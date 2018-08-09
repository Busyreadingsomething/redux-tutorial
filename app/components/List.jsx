import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import Item from './Item';

const List = ({ todos, toggle }) => (
  <div className="list">
    <h1>
      Current Todos
    </h1>
    {
      todos.map(todo => <Item key={todo.id} todo={todo} toggle={toggle} />)
    }
  </div>
);

List.propTypes = {
  todos: arrayOf(object).isRequired,
  toggle: func.isRequired,
};

export default List;
