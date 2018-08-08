import React from 'react';
import { shape, string } from 'prop-types';
import Details from './Details';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  handleClick() {
    this.setState(({ focus }) => Object.assign({}, { focus: !focus }));
  }

  render() {
    const { todo } = this.props;
    const { text, ...newProps } = todo;
    const { focus } = this.state;
    return (
      <div className="item">
        <h2 onClick={() => this.handleClick()}>
          {text}
        </h2>
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
};

export default Item;
