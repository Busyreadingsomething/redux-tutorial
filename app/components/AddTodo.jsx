import React from 'react';
import { func } from 'prop-types';
import Input from './Input';

export const getDate = () => {
  const date = [];
  const today = new Date();
  date.push(today.getMonth() + 1);
  date.push(today.getDate());
  date.push(today.getFullYear());
  return date.join('/');
};

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['text', 'difficulty', 'notes'],
      text: '',
      difficulty: '',
      notes: '',
    };
  }

  handleChange(e) {
    const { value } = e.target;
    const type = e.target.getAttribute('data-type');
    const update = {
      [type]: value,
    };
    this.setState(state => Object.assign({}, state, update), () => console.log(this.state));
  }

  handleClick() {
    const { text, difficulty, notes } = this.state;
    const { add } = this.props;
    const date = getDate();
    const todo = {
      text,
      difficulty,
      notes,
      date,
    };
    const empty = {
      text: '',
      difficulty: '',
      notes: '',
    };
    this.setState(state => Object.assign({}, state, empty), () => add(todo));
  }

  render() {
    const { types } = this.state;

    return (
      <div className="add-todo-container">
        {
          types.map(type => (
            <Input
              key={type}
              type={type}
              change={e => this.handleChange(e)}
              val={this.state[type]}
            />))
        }
        <button type="button" onClick={() => this.handleClick()}>ADD TODO</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  add: func.isRequired,
};

export default AddTodo;
