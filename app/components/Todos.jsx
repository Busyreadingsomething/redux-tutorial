import React from 'react';
import List from './List';
import data from '../dummyData';
import AddTodo from './AddTodo';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data,
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todos">
        <h1>
          TODO MACHINE
        </h1>
        <AddTodo />
        <List todos={todos} />
      </div>
    );
  }
}

export default Todos;
