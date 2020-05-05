/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Month.module.css';

const Month = ({ month }) => (
  <div className={styles.text}>
    {month}
  </div>
);

Month.propTypes = {
  month: PropTypes.string,
};

Month.defaultProps = {
  month: '',
};

export default Month;
