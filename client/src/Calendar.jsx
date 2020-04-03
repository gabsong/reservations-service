/* eslint-disable react/forbid-prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import {
  startOfMonth,
  startOfWeek,
  addDays,
  getDate,
  getMonth,
  getYear,
  getISOWeek,
} from 'date-fns';
import Row from './Row.jsx';
import styles from './Calendar.module.css';

const Calendar = ({ selectedDate, handleCellClick }) => {
  // a month is comprised of 7 day weeks
  const addWeeks = (startDate, givenMonth, monthArray) => {
    let currDate = startDate;
    const week = [];

    // each week array has 7 day objects
    while (week.length < 7) {
      week.push({
        dateNum: getDate(currDate),
        weekNum: `${getYear(currDate)}-${getISOWeek(currDate)}`,
        render: getMonth(currDate) === givenMonth,
      });
      currDate = addDays(currDate, 1);
    }
    monthArray.push(week);

    // recurse until we have all weeks of the month
    if (getMonth(currDate) === givenMonth) {
      addWeeks(currDate, givenMonth, monthArray);
    }
  };

  const month = [];
  const firstDay = startOfWeek(startOfMonth(selectedDate));
  const currMonth = getMonth(selectedDate);
  addWeeks(firstDay, currMonth, month);

  return (
    <div>
      <div className={styles.header}>
        <ul>
          <li><small>Su</small></li>
          <li><small>Mo</small></li>
          <li><small>Tu</small></li>
          <li><small>We</small></li>
          <li><small>Th</small></li>
          <li><small>Fr</small></li>
          <li><small>Sa</small></li>
        </ul>
      </div>
      <table className={styles.calendar}>
        <tbody>
          {month.map((week) => <Row week={week} key={week[0].weekNum} handleCellClick={handleCellClick} />)}
        </tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  selectedDate: PropTypes.object,
};

Calendar.defaultProps = {
  selectedDate: {},
};

export default Calendar;
