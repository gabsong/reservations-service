/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './PriceHeader.module.css';

const PriceHeader = (props) => {
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  return (
    <div>
      <div className="price-info">
        <span className={styles.price}>${props.nightlyRate}</span> <span className={styles.type}>per night</span>
      </div>
      <div className="review-info">
        <span className={styles.star} />
        <span className={styles.rating}> {'4.75'} </span>
        <span className={styles.reviews}>({200} reviews)</span>
      </div>
    </div>
  );
};

export default PriceHeader;
