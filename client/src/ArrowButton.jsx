/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArrowButton.module.css';

const ArrowButton = ({ label }) => (
  <div role="button" className={styles.btn}>
    {(label === 'prev')
      ? (
        <svg focusable="false" viewBox="0 0 1000 1000">
          <path d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z" />
        </svg>
      )
      : (
        <svg focusable="false" viewBox="0 0 1000 1000">
          <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z" />
        </svg>
      )}
  </div>
);

ArrowButton.propTypes = {
  label: PropTypes.string,
};

ArrowButton.defaultProps = {
  label: '',
};

export default ArrowButton;
