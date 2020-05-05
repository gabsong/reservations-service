/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './ReserveButton.module.css';

const ReserveButton = ({ label }) => (
<button type="submit" className={styles.btn}>{label}</button>
);

export default ReserveButton;
