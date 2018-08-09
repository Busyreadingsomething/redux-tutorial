import React from 'react';
import { func, shape, string } from 'prop-types';
import Details from './Details';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  handleFocus() {
    this.setState(({ focus }) => Object.assign({}, { focus: !focus }));
  }

  render() {
    const { todo, toggle } = this.props;
    const { text, ...newProps } = todo;
    const { focus } = this.state;
    return (
      <div className="item">
        <div className="item-splash">
          <h2 onClick={() => this.handleFocus()}>
            {text}
          </h2>
          <button onClick={() => toggle(todo.id)}>X</button>
        </div>
        { focus && <Details {...newProps} /> }
      </div>
    )
  }
}

Item.propTypes = {
  todo: shape({
    text: string,
    date: string,
    difficulty: string,
    notes: string,
  }).isRequired,
  toggle: func.isRequired,
};

export default Item;
