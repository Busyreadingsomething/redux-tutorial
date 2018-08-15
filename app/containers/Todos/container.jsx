import React from 'react';
import {
  arrayOf,
  object,
  string,
  func,
} from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../../components/Filter';
import List from '../../components/List';
import AddTodo from '../../components/AddTodo';
import { addTodo, toggleDodo, setVisibilityFilter } from '../../actions';

/**
 * The component below is a copy and paste from the components folder. You're tasked with the job to
 * convert this component into a stateless functional component with redux. YOU WILL NOT NEED TO
 * ADJUST THE FILES IN THE COMPONENTS FOLDER TO DO ANYTHING.
 *
 * You will be designing the container here, so your mapStateToProps and
 * mapDispatchToProps will be used here.

 * HINTS:
 * - Read the documentation
 * - Follow the tests (they're designed to guide you along the way)
 * - Take your time and reflect on your approach before you change anything.
 *
 * NOTES:
 * - There are a lot of different ways people organize their code, so don't assume this
 *   is the only way to write redux code
 * - Remember to evaluate the differences between the component and the container once you have
 *   completed the tests and made everything render properly
 */

// Make the necessary changes to this component
export class Todos extends React.PureComponent {
  render() {
    const {
      addNewTodo,
      todos,
      visibilityFilter,
      toggle,
      changeFilter,
    } = this.props;
    return (
      <div className="todos">
        <h1 className="app-title">
          TODO MACHINE
        </h1>
        <Filter select={e => changeFilter(e)} />
        <AddTodo add={todo => addNewTodo(todo)} />
        <List todos={todos} toggle={id => toggle(id)} filter={visibilityFilter} />
      </div>
    );
  }
}

Todos.propTypes = {
  todos: arrayOf(object).isRequired,
  visibilityFilter: string.isRequired,
  toggle: func.isRequired,
  changeFilter: func.isRequired,
  addNewTodo: func.isRequired,
};

// FILL THESE METHODS OUT - Don't forget to read your documentation
export const mapStateToProps = state => ({
  todos: state.todoReducer,
  visibilityFilter: state.visibilityReducer,
});

export const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleDodo(id)),
  changeFilter: e => dispatch(setVisibilityFilter(e)),
  addNewTodo: todo => dispatch(addTodo(todo)),
});

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);

export default TodosContainer;
