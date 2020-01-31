/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import GuestCounter from './GuestCounter.jsx';
import styles from './GuestPicker.module.css';

const GuestPicker = (props) => (
  <div>
    <div className={styles.container}>
      <button type="button" className={styles.btn}>
        GuestPicker dropdown
      </button>
    </div>
    <div className={styles.dropdown}>
      <GuestCounter label="Adults" />
      <GuestCounter label="Children" description="Ages 2–12" />
      <GuestCounter label="Infants" description="Under 2" />
    </div>
  </div>
);

export default GuestPicker;
