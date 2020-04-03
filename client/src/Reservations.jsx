/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { parse, format, addMonths, subMonths, isBefore } from 'date-fns';
import PriceHeader from './PriceHeader.jsx';
import DatePicker from './DatePicker.jsx';
import GuestPicker from './GuestPicker.jsx';
import PriceChart from './PriceChart.jsx';
import ReserveButton from './ReserveButton.jsx';
import styles from './Reservations.module.css';

// Reservations stores state for current reservation
class Reservations extends React.Component {
  constructor (props) {
    super(props);
    const { spaceId } = this.props;
    this.state = {
      spaceId: spaceId,
      selectedDate: new Date(),
      reservations: [],
      checkinDate: '',
      checkoutDate: '',
      nightlyRate: 0,
      cleaningFee: 0,
      serviceFee: 0,
      taxRate: 0,
      maxAdultGuests: 0,
      minStayNights: 0,
      adults: 1,
      children: 0,
      infants: 0,
    };

    this.getSpaceInfo = this.getSpaceInfo.bind(this);
    this.getReservations = this.getReservations.bind(this);
    this.getPrevMonth = this.getPrevMonth.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.setCheckinDate = this.setCheckinDate.bind(this);
    this.setCheckoutDate = this.setCheckoutDate.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  componentDidMount () {
    this.getSpaceInfo();
    this.getReservations();
  }

  getSpaceInfo () {
    const { spaceId } = this.state;
    axios.get('/spaces', {
      params: {
        id: spaceId,
      },
    })
      .then((response) => {
        const { data } = response;
        this.setState({
          nightlyRate: data.nightly_rate_cents / 100,
          cleaningFee: data.cleaning_fee_cents / 100,
          serviceFee: data.service_fee_cents / 100,
          taxRate: data.tax_rate_cents / 100,
          maxAdultGuests: data.max_adult_guests,
          minStayNights: data.min_stay_nights,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

  handleCellClick (date) {
    const { checkinDate, checkoutDate } = this.state;
    if (checkinDate === '') {
      this.setCheckinDate(date);
    } else if (isBefore(date, checkinDate)) {
      this.setCheckoutDate('');
      this.setCheckinDate(date);
    } else {
      this.setCheckoutDate(date);
    }
  }

  clearDates () {
    const { checkinDate, checkoutDate } = this.state;
    this.setState({
      checkinDate: '',
      checkoutDate: '',
    });
  }

  getPrevMonth () {
    const { selectedDate } = this.state;
    this.setState({ selectedDate: subMonths(selectedDate, 1) });
  }

  getNextMonth () {
    const { selectedDate } = this.state;
    this.setState({ selectedDate: addMonths(selectedDate, 1) });
  }

  setCheckinDate (checkinDate) {
    this.setState({ checkinDate });
    // only make dates until the next booking available
    // disable other dates temporarily
  }

  setCheckoutDate (checkoutDate) {
    this.setState({ checkoutDate });
    // show all other available dates (revert temp action from setCheckinDate)
  }

  render () {
    const {
      // PriceHeader
      nightlyRate,
      // DatePicker
      reservations,
      selectedDate,
      checkinDate,
      checkoutDate,
      // GuestCounter
      adults,
      children,
      infants,
    } = this.state;

    let formattedCheckinDate;
    let formattedCheckoutDate;

    if (checkinDate) {
      formattedCheckinDate = format(checkinDate, 'eee, PP');
    }

    if (checkoutDate) {
      formattedCheckoutDate = format(checkoutDate, 'eee, PP');
    }

    return (
      <div className={styles.wrapper}>
        <PriceHeader nightlyRate={nightlyRate} />
        <form className={styles.form}>
        <div className={styles.fieldSet}>
          <label>
            <span>Dates</span>
          </label>
          <div className={styles.container}>
            <input value={formattedCheckinDate} placeholder="Check-in" />
            <div>
              <svg
                className={styles.arrow}
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <input value={formattedCheckoutDate} placeholder="Checkout" />
          </div>
        </div>
        <div>
          {/* pick check-in date */}
          <DatePicker
            reservations={reservations}
            selectedDate={selectedDate}
            handleCellClick={this.handleCellClick}
            clearDates={this.clearDates}
            getPrevMonth={this.getPrevMonth}
            getNextMonth={this.getNextMonth}
          />
        </div>
        <div className={styles.fieldSet}>
          <label>
            <span>Guests</span>
          </label>
          <GuestPicker />
        </div>
        <input type="hidden" value={adults} />
        <input type="hidden" value={children} />
        <input type="hidden" value={infants} />
        {/* set condition to hide price chart */}
        <PriceChart />
        <div>
          <ReserveButton label="Reserve" />
          <div>You won&apos;t be charged yet</div>
        </div>
      </form>
      </div>
    );
  }
}

Reservations.propTypes = {
  spaceId: PropTypes.number,
};

Reservations.defaultProps = {
  spaceId: null,
};

export default Reservations;
