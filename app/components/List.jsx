import React from 'react';
import { arrayOf, object } from 'prop-types';
import Item from './Item';

const List = ({ todos }) => (
  <div className="list">
    <h1>
      Current Todos
    </h1>
    {
      todos.map(todo => <Item key={todo.id} todo={todo} />)
    }
  </div>
);

List.propTypes = {
  todos: arrayOf(object).isRequired,
};

export default List;
