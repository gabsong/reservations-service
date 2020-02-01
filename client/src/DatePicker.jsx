/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import ArrowButton from './ArrowButton.jsx';
import Month from './Month.jsx';
import Calendar from './Calendar.jsx';
import TextButton from './TextButton.jsx';
import styles from './DatePicker.module.css';

class DatePicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
    this.getCurrentMonthYear = this.getCurrentMonthYear.bind(this);
    this.handleclickPrev = this.handleclickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  componentDidMount () {
  }

  componentWillUnmount() {
  }

  getCurrentMonthYear (rawDate) {
    return format(rawDate, 'MMMM yyyy');
  }

  handleclickPrev () {
    const { selectedDate } = this.state;
    this.setState({ selectedDate: subMonths(selectedDate, 1) });
  }

  handleClickNext () {
    const { selectedDate } = this.state;
    this.setState({ selectedDate: addMonths(selectedDate, 1) });
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <ArrowButton name="prev" onClick={this.handleclickPrev} />
          <Month label={this.getCurrentMonthYear(this.state.selectedDate)} />
          <ArrowButton name="next" onClick={this.handleClickNext} />
        </div>
        <Calendar />
        <div className={styles.btnText}>
          <TextButton name="Clear dates" />
        </div>
      </div>
    );
  }
}

export default DatePicker;
