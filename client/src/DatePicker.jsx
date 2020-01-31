import React from 'react';
import Button from './Button.jsx';
import Month from './Month.jsx';
import Calendar from './Calendar.jsx';

const DatePicker = (props) => (
  <div>
    <div>
      <Button label="Prev" />
      <Month />
      <Button label="Next" />
    </div>
    <Calendar />
    <Button label="Clear dates" />
  </div>
);

export default DatePicker;
