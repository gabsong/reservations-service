/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
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
