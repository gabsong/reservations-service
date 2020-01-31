/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import CounterButton from './CounterButton.jsx';
import styles from './GuestCounter.module.css';

const GuestCounter = (props) => (
  <div className={styles.wrapper}>
    <div>
      <div>{props.label}</div>
      <div>{props.description}</div>
    </div>
    <div className={styles.item}>
      <CounterButton label="-" />
    </div>
    <div className={styles.item}>
      0
    </div>
    <div className={styles.item}>
      <CounterButton label="+" />
    </div>
  </div>
);

export default GuestCounter;
