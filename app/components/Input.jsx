import React from 'react';
import { func, string } from 'prop-types';

const Input = ({ type, change, val }) => (
  <div className="input-container">
    <label className="label-name">
      {type.toUpperCase()}
    </label>
    <input
      className="input"
      data-type={type}
      onChange={e => change(e)}
      type="text"
      value={val}
    />
  </div>
);

Input.propTypes = {
  change: func.isRequired,
  type: string.isRequired,
  val: string.isRequired,
};

export default Input;
