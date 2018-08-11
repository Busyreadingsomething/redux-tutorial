import React from 'react';
import { func, shape, string } from 'prop-types';
import Details from '../../components/Details';

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
