/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import Cell from './Cell.jsx';
import styles from './Row.module.css';

const Row = () => (
  <div className={styles.wrapper}>
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
