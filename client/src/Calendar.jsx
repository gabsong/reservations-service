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

const Calendar = ({ selectedDate }) => {
  const addWeeks = (startDate, givenMonth, monthArray) => {
    let currDate = startDate;
    const week = [];
    while (week.length < 7) {
      week.push({
        dateNum: getDate(currDate),
        weekNum: `${getYear(currDate)}-${getISOWeek(currDate)}`,
        render: getMonth(currDate) === givenMonth,
      });
      currDate = addDays(currDate, 1);
    }
    monthArray.push(week);

    if (getMonth(currDate) === givenMonth) {
      addWeeks(currDate, givenMonth, monthArray);
    }
  };

  const collection = [];
  const firstDay = startOfWeek(startOfMonth(selectedDate));
  const currMonth = getMonth(selectedDate);
  addWeeks(firstDay, currMonth, collection);

  return (
    <div>
      <div>
        Su Mo Tu We Th Fr Sa (headers)
      </div>
      {collection.map((week) => <Row week={week} key={week[0].weekNum} />)}
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
