/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextButton.module.css';

const TextButton = ({ name, clearDates }) => (
  <button type="button" className={styles.btn} onClick={clearDates}>
    {name}
  </button>
);

TextButton.propTypes = {
  name: PropTypes.string,
};

TextButton.defaultProps = {
  name: '',
};

export default TextButton;
