/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './CounterButton.module.css';

const CounterButton = (props) => (
  <button type="button" className={styles.btn}>
    {props.label}
  </button>
);

export default CounterButton;
