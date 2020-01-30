/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const PriceHeader = (props) => {
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  return (
    <div>
      <div className="price-info">
        ${props.nightlyRate} per night
      </div>
      <div className="review-info">
        * {'4.75'} ({200} reviews)
      </div>
    </div>
  );
};

export default PriceHeader;
