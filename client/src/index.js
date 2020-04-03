/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Reservations from './Reservations.jsx';

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

// ReactDOM.render(<Reservations spaceId={getRandomInt(1, 20)} />, document.getElementById('root'));
ReactDOM.render(<Reservations spaceId={13} />, document.getElementById('root'));
