import React from 'react';
import { func } from 'prop-types';

const Filter = ({ select }) => (
  <div className="filter-container">
    <button
      className="filter-button"
      data-filter="SHOW_ALL"
      onClick={e => select(e)}
      type="button"
    >
      ALL
    </button>
    <button
      className="filter-button"
      data-filter="SHOW_COMPLETED"
      onClick={e => select(e)}
      type="button"
    >
      COMPLETED
    </button>
    <button
      className="filter-button"
      data-filter="SHOW_ACTIVE"
      onClick={e => select(e)}
      type="button"
    >
      ACTIVE
    </button>
  </div>
);

Filter.propTypes = {
  select: func.isRequired,
};

export default Filter;
