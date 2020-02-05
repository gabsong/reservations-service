/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { format, addMonths, subMonths } from 'date-fns';
import ArrowButton from './ArrowButton.jsx';
import Month from './Month.jsx';
import Calendar from './Calendar.jsx';
import TextButton from './TextButton.jsx';
import styles from './DatePicker.module.css';

class DatePicker extends React.Component {
  constructor (props) {
    super(props);
    const { spaceId } = this.props;
    this.state = {
      spaceId,
      selectedDate: new Date(),
      reservations: [],
    };

    this.getReservations = this.getReservations.bind(this);
    this.handleclickPrev = this.handleclickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.getCurrentMonthYear = this.getCurrentMonthYear.bind(this);
  }

  componentDidMount () {
    this.getReservations();
  }

  getReservations () {
    const { spaceId } = this.state;
    axios.get('/reservations', {
      params: {
        spaceId,
      },
    })
      .then((response) => {
        this.setState({ reservations: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // eslint-disable-next-line class-methods-use-this
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
    const { selectedDate, month, year } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <ArrowButton name="prev" onClick={this.handleclickPrev} />
          <Month month={this.getCurrentMonthYear(selectedDate)} />
          <ArrowButton name="next" onClick={this.handleClickNext} />
        </div>
        <Calendar selectedDate={selectedDate} />
        <div className={styles.btnText}>
          <TextButton name="Clear dates" />
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  spaceId: PropTypes.string,
};

DatePicker.defaultProps = {
  spaceId: '',
};

export default DatePicker;
