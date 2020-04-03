/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { format } from 'date-fns';
import ArrowButton from './ArrowButton.jsx';
import Month from './Month.jsx';
import Calendar from './Calendar.jsx';
import TextButton from './TextButton.jsx';
import styles from './DatePicker.module.css';

const DatePicker = ({ selectedDate, getPrevMonth, getNextMonth, handleCellClick }) => {

  const getCurrentMonthYear = (rawDate) => {
    return format(rawDate, 'MMMM yyyy');
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ArrowButton name="prev" onClick={getPrevMonth} />
        <Month month={getCurrentMonthYear(selectedDate)} />
        <ArrowButton name="next" onClick={getNextMonth} />
      </div>
      <Calendar
        selectedDate={selectedDate}
        handleCellClick={handleCellClick}
      />
      <div className={styles.btnText}>
        <TextButton name="Clear dates" />
      </div>
    </div>
  );
};

export default DatePicker;
