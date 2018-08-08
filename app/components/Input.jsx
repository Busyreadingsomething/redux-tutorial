import React from 'react';
import { func, string } from 'prop-types';

const Input = ({ type, change, val }) => {
  const format = type === 'date' ? 'date' : 'text';
  return (
    <div className="input-container">
      <label className="label-name">
        {type.toUpperCase()}
      </label>
      <input
        data-type={type}
        onChange={e => change(e)}
        type={format}
        value={val}
      />
    </div>
  );
};

Input.propTypes = {
  change: func.isRequired,
  type: string.isRequired,
  val: string.isRequired,
};

export default Input;
