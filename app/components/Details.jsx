import React from 'react';
import { string } from 'prop-types';

const Details = ({ date, difficulty, notes }) => (
  <div className="details">
    <p>
      {date}
    </p>
    <p>
      {difficulty}
    </p>
    <h4>
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
