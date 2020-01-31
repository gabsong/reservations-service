/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './GuestPicker.module.css';

const GuestPicker = (props) => (
  <div>
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        This is the GuestPicker dropdown
      </button>
    </div>
    <input type="hidden" />
    <input type="hidden" />
    <input type="hidden" />
  </div>
);

export default GuestPicker;
