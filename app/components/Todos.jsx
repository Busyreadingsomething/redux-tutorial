import React from 'react';
import List from './List';
import data from '../dummyData';
import AddTodo from './AddTodo';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityFilter: 'SHOW_ALL',
      todos: data,
    };
  }

  handleToggle(id) {
    const { todos } = this.state;
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        const completed = !todo.completed;
        return Object.assign({}, todo, { completed });
      }
      return todo;
    });

    this.setState(state => Object.assign({}, state, { todos: updated }), () => console.log(this.state));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todos">
        <h1>
          TODO MACHINE
        </h1>
        <AddTodo />
        <List todos={todos} toggle={id => this.handleToggle(id)} />
      </div>
    );
  }
}

export default Todos;
