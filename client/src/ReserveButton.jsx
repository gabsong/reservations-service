/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './ReserveButton.module.css';

const ReserveButton = (props) => (
<button type="submit" className={styles.btn}>{props.label}</button>
);

export default ReserveButton;
