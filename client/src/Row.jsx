/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell.jsx';
import styles from './Row.module.css';

const Row = ({ week }) => (
  <tr className={styles.row}>
    {week.map((date) => <Cell date={date} key={date.dateNum} />)}
  </tr>
);

Row.propTypes = {
  week: PropTypes.array,
};

Row.defaultProps = {
  week: Array(7),
};

export default Row;
