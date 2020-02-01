/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './Month.module.css';

const Month = (props) => (
  <div className={styles.text}>
    {props.label}
  </div>
);

export default Month;
