/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './CounterButton.module.css';

const CounterButton = ({ label, guestType, handleOnClick }) => (
  <button type="button" className={styles.btn} onClick={() => handleOnClick(guestType)} >
    {label}
  </button>
);

export default CounterButton;
