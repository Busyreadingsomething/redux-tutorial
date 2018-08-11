import React from 'react';
import Input from './Input';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['text', 'difficulty', 'notes'],
      text: '',
      difficulty: '',
      date: '',
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
      </div>
    );
  }
}

export default AddTodo;
