/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.module.css';

const Cell = ({ date, handleCellClick }) => {
  const { dateNum } = date;
  return (
    <td
      className={styles.cell}
      aria-disabled="true"
      tabIndex="-1"
      role="button"
      onClick={handleCellClick}
    >
      {dateNum}
    </td>
  );
};

Cell.propTypes = {
  date: PropTypes.object,
};

Cell.defaultProps = {
  date: {},
};

export default Cell;
