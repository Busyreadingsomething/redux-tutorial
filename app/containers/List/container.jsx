import React from 'react';
import {
  arrayOf,
  func,
  object,
  string,
} from 'prop-types';
import Item from '../../components/Item';

/**
 * The component below is a copy and paste from the components folder. You're tasked with the job
 * to convert this component into a stateless functional component with redux. YOU WILL NOT NEED
 * TO ADJUST THE FILES IN THE COMPONENTS FOLDER TO DO ANYTHING.
 *
 * You will be designing the container here, so your mapStateToProps and mapDispatchToProps will
 * be used here.
 *
 * HINTS:
 * - Read the documentation
 * - Follow the tests (they're designed to guide you along the way)
 * - Take your time and reflect on your approach before you change anything.
 * - Make it so that the filtered array is within the main store (KEEP THE LOGIC OUT OF THIS FILE)
 *
 * NOTES:
 * - There are a lot of different ways people organize their code, so don't assume this is the
 *   only way to write redux code
 * - Remember to evaluate the differences between the component and the container once you have
 *   completed the tests and made everything render properly
 */

export const filtering = (todos, filter) => {
  let filtered = todos;
  if (filter === 'SHOW_COMPLETED') {
    filtered = todos.filter(todo => todo.completed === true);
  } else if (filter === 'SHOW_ACTIVE') {
    filtered = todos.filter(todo => todo.completed === false);
  }
  return filtered;
};

class List extends React.PureComponent {
  render() {
    const { todos, toggle, filter } = this.props;
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
  }
}

List.propTypes = {
  todos: arrayOf(object).isRequired,
  toggle: func.isRequired,
  filter: string.isRequired,
};

export default List;
