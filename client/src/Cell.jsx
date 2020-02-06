/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from 'date-fns';
import styles from './Cell.module.css';

const Cell = ({ date }) => {
  const { dateNum } = date;
  return (
    <td
      className={styles.cell}
      aria-disabled="true"
      tabIndex="-1"
      role="button"
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
