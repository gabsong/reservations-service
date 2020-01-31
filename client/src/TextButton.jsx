/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './TextButton.module.css';

const TextButton = (props) => (
<button type="button" className={styles.btn}>{props.label}</button>
);

export default TextButton;
