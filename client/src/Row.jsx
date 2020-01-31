import React from 'react';
import Cell from './Cell.jsx';
import styles from './Row.module.css';

const Row = () => (
  <div className={styles.row}>
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
  </div>
);

export default Row;
