/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import CounterButton from './CounterButton.jsx';
import styles from './GuestCounter.module.css';

const GuestCounter = ({ label, description, guestCount, addCount, subCount }) => (
  <div className={styles.wrapper}>
    <div className={styles.description}>
      <div>{label}</div>
      <div>{description}</div>
    </div>
    <div className={styles.item}>
      <CounterButton label="-" guestType={label.toLowerCase()} handleOnClick={subCount} />
    </div>
    <div className={styles.item}>
      {guestCount}
    </div>
    <div className={styles.item}>
      <CounterButton label="+" guestType={label.toLowerCase()} handleOnClick={addCount} />
    </div>
  </div>
);

export default GuestCounter;
