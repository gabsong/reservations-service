import React from 'react';

const PriceHeader = (props) => {
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  return (
    <div>
      <div className="price-info">
        ${props.nightlyRate} per night
      </div>
      <div className="review-info">
        * {getRandomArbitrary(3, 5).toFixed(2)} ({Math.trunc(getRandomArbitrary(20, 200))} reviews)
      </div>
    </div>
  )
};

export default PriceHeader;
