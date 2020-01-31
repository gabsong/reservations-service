/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import ArrowButton from './ArrowButton.jsx';
import Month from './Month.jsx';
import Calendar from './Calendar.jsx';
import TextButton from './TextButton.jsx';
import styles from './DatePicker.module.css';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={styles.box}>
          <ArrowButton label="Prev" />
          <Month />
          <ArrowButton label="Next" />
        </div>
        <Calendar />
        <div className={styles.btnText}>
          <TextButton label="Clear dates" />
        </div>
      </div>
    );
  }
}

export default DatePicker;
