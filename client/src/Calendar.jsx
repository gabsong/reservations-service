/* eslint-disable react/forbid-prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import {
  parse,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  addDays,
  subDays,
  getDate,
  getMonth,
  getYear,
  getISOWeek,
  differenceInCalendarDays,
} from 'date-fns';
import Row from './Row.jsx';
import styles from './Calendar.module.css';

const Calendar = ({ reservations, selectedDate, handleCellClick, checkinDate, checkoutDate }) => {
  // these are non-bookable dates
  const unavailableDays = new Set();
  for (let reservation of reservations) {
    const bookedDates = eachDayOfInterval({
      start: parse(reservation.checkin_date.substring(0,10), 'yyyy-MM-dd', new Date()),
      end: parse(reservation.checkout_date.substring(0,10), 'yyyy-MM-dd', new Date())
    });
    bookedDates.forEach((day) => unavailableDays.add(day.toDateString()));
  }

  // a month is comprised of 7 day weeks
  const addWeeks = (startDate, givenMonth, monthArray) => {
    let currDate = startDate;
    const week = [];

    // each week array has 7 day objects
    while (week.length < 7) {
      const day = {
        currDate: currDate,
        dateNum: getDate(currDate),
        weekNum: `${getYear(currDate)}-${getISOWeek(currDate)}`,
        render: getMonth(currDate) === givenMonth,
        booked: unavailableDays.has(currDate.toDateString()),
        selected: false, // currDate.toDateString() === checkinDate.toDateString() || currDate.toDateString() === checkoutDate.toDateString()
      }
      week.push(day);
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
