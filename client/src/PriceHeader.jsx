/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceHeader.module.css';

const PriceHeader = ({ nightlyRate }) => {
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
  const dollars = nightlyRate.toString().slice(0, -2);
  const cents = nightlyRate.toString().slice(-2);

  return (
    <div className={styles.container}>
      <div className="price-info">
  <span className={styles.price}>${dollars}.{cents}</span> <span className={styles.type}>per night</span>
      </div>
      <div className="review-info">
        <span className={styles.star} />
        <span className={styles.rating}> {'4.75'} </span>
        <span className={styles.reviews}>({200} reviews)</span>
      </div>
    </div>
  );
};

PriceHeader.propTypes = {
  nightlyRate: PropTypes.number.isRequired,
}

export default PriceHeader