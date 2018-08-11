import React from 'react';
import { func, shape, string } from 'prop-types';
import Details from '../../components/Details';

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
    const { text, completed, ...newProps } = todo;
    const { focus } = this.state;
    const itemCompleted = completed ? 'item-completed' : null;
    const buttonCompleted = completed ? 'button-completed': null;
    return (
      <div className="item">
        <div className="item-splash" onClick={() => this.handleFocus()}>
          <p className={`item-title ${itemCompleted}`}>
            {text}
          </p>
          { focus && <Details {...newProps} /> }
        </div>
        <button className={`item-toggle ${buttonCompleted}`} onClick={() => toggle(todo.id)}>
          X
        </button>
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
