import React from 'react';
import { string } from 'prop-types';

const Details = ({ date, difficulty, notes }) => (
  <div className="details">
    <p className="date">
      {date}
    </p>
    <p className="difficulty">
      {difficulty}
    </p>
    <h4 className="notes">
      {notes}
    </h4>
  </div>
);

Details.propTypes = {
  date: string.isRequired,
  difficulty: string.isRequired,
  notes: string.isRequired,
};

export default Details;
