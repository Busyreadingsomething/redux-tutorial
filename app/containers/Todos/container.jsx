import React from 'react';
import List from '../../components/List';
import data from '../../dummyData';
import AddTodo from '../AddTodos/container';

/**
  The component below is a copy and paste from the components folder. You're tasked with the job to convert this component into
  a stateless functional component with redux. YOU WILL NOT NEED TO ADJUST THE FILES IN THE COMPONENTS FOLDER TO DO ANYTHING.

  You will be designing the container here, so your mapStateToProps and mapDispatchToProps will be used here.

  HINTS:
  - Read the documentation
  - Follow the tests (they're designed to guide you along the way)
  - Take your time and reflect on your approach before you change anything.

  NOTES:
  - There are a lot of different ways people organize their code, so don't assume this is the only way to write redux code
  - Remember to evaluate the differences between the component and the container once you have completed the tests and made
    everything render properly
*/

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
