import React from 'react';
import ReactDOM from 'react-dom';
import Reserve from './Reserve.jsx';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

ReactDOM.render(<Reserve spaceId={getRandomInt(1, 3)} />, document.getElementById('root'));
