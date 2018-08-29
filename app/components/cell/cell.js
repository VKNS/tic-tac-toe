import React from 'react';
import PropTypes from 'prop-types';
import './cell.css';

const Cell = ({ label, num, moveHandler }) => {
  return (
    <button className="cell" onClick={() => moveHandler(num)}>
      {label}
    </button>
  );
};

Cell.propTypes = {
  label: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  moveHandler: PropTypes.func.isRequired,
};

export default Cell;
