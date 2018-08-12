import React from 'react';
import List from './List';
import data from '../dummyData';
import AddTodo from './AddTodo';
import Filter from './Filter';

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

    this.setState(state => Object.assign({}, state, { todos: updated }));
  }

  changeFilter(e) {
    const visibilityFilter = e.target.getAttribute('data-filter');
    this.setState(state => Object.assign({}, state, { visibilityFilter }));
  }

  render() {
    const { todos, visibilityFilter } = this.state;
    return (
      <div className="todos">
        <h1>
          TODO MACHINE
        </h1>
        <Filter select={e => this.changeFilter(e)} />
        <AddTodo />
        <List todos={todos} toggle={id => this.handleToggle(id)} filter={visibilityFilter} />
      </div>
    );
  }
}

export default Todos;
