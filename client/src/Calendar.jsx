/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { parseJSON } from 'date-fns';
import Row from './Row.jsx';

const Calendar = ({ dateString }) => {
  console.log(parseJSON(dateString));
  return (
    <div>
      <div>
        <span>Su </span>
        <span>Mo </span>
        <span>Tu </span>
        <span>We </span>
        <span>Th </span>
        <span>Fr </span>
        <span>Sa </span>
      </div>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

Calendar.propTypes = {
  dateString: PropTypes.string,
};

Calendar.defaultProps = {
  dateString: '',
};

export default Calendar;
