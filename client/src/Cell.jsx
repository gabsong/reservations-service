/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { isPast } from 'date-fns';
import PropTypes from 'prop-types';
import styles from './Cell.module.css';

const Cell = ({ date, handleCellClick }) => {
  const { currDate, dateNum, weekNum, render, booked, selected } = date;

  // if not in month
  if (render === false) {
    return (
      <td></td>
    );
  } else if (booked === true || isPast(currDate)) {
    return (
      <td className={styles.disabled}>
        {dateNum}
      </td>
    );
  } else {
    return (
      <td
        className={styles.cell}
        aria-disabled="true"
        tabIndex="-1"
        role="button"
        onClick={() => handleCellClick(currDate)}
      >
        {dateNum}
      </td>
    );
  }
};

Cell.propTypes = {
  date: PropTypes.object,
};

Cell.defaultProps = {
  date: {},
};

export default Cell;
