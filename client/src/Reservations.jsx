/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { parse, format, addMonths, subMonths, isBefore } from 'date-fns';
import styles from './Reservations.module.css';
import PriceHeader from './components/PriceHeader.jsx';
import DatePicker from './components/DatePicker.jsx';
import GuestPicker from './components/GuestPicker.jsx';
import PriceChart from './components/PriceChart.jsx';
import ReserveButton from './components/ReserveButton.jsx';

// Reservations stores state for current reservation
class Reservations extends React.Component {
  constructor(props) {
    super(props);
    const { spaceId } = this.props;
    this.state = {
      spaceId: spaceId,
      selectedDate: new Date(),
      reservations: [],
      checkinDate: null,
      formattedCheckinDate: '',
      checkoutDate: null,
      formattedCheckoutDate: '',
      nightlyRate: 0,
      cleaningFee: 0,
      serviceFee: 0,
      taxRate: 0,
      maxAdultGuests: 0,
      minStayNights: 0,
      adults: 1,
      children: 0,
      infants: 0,
      showDatePicker: false,
      showGuestPicker: false,
    };

    this.handleSumbit = this.handleSumbit.bind(this);
    this.getSpaceInfo = this.getSpaceInfo.bind(this);
    this.getReservations = this.getReservations.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.setCheckinDate = this.setCheckinDate.bind(this);
    this.setCheckoutDate = this.setCheckoutDate.bind(this);
    this.clearDates = this.clearDates.bind(this);
    this.getPrevMonth = this.getPrevMonth.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
    this.toggleGuestPicker = this.toggleGuestPicker.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
  }

  componentDidMount() {
    Promise.resolve(this.props.spaceId)
      .then((spaceId) => this.getSpaceInfo(spaceId))
      .then((spaceId) => this.getReservations(spaceId))
      .catch(console.error)
  }

  handleSumbit(event) {
    const { spaceId, nightlyRate } = this.state;
    event.preventDefault();
    alert(`Your reservation for space #${spaceId} is $${nightlyRate / 100} per night.`);
  }

  async getSpaceInfo(spaceId) {
    try {
      const response = await axios.get(`/spaces/${spaceId}`);
      const { data } = response;
      this.setState({
        nightlyRate: data.nightly_rate_cents,
        cleaningFee: data.cleaning_fee_cents,
        serviceFee: data.service_fee_cents,
        taxRate: data.tax_rate_cents,
        maxAdultGuests: data.max_adult_guests,
        minStayNights: data.min_stay_nights,
      });
      return spaceId;
    } catch (err) {
      console.error(err);
    }
  }

  async getReservations(spaceId) {
    try {
      const response = await axios.get(`/reservations`, {
        params: {
          spaceId,
        }
      });
      const { data } = response;
      this.setState({ reservations: data });
      // return undefined
    } catch (err) {
      console.error(err);
    }
  }

  selectDate(date) {
    const { checkinDate, checkoutDate } = this.state;
    // first time before user selects a checkinDate
    if (!checkinDate) {
      this.setCheckinDate(date);
    } else if (checkinDate && isBefore(date, checkinDate)) {
      // checkinDate exists but user wants to checkin earlier
      this.setCheckoutDate(null);
      this.setCheckinDate(date);
    } else {
      // checkinDate exists and user is selecting a checkoutDate
      // checkoutDate exists and user wants to checkout later
      this.setCheckoutDate(date);
    }
  }

  setCheckinDate(checkinDate) {
    const formattedCheckinDate = format(checkinDate, 'eee P');
    this.setState({ checkinDate, formattedCheckinDate });
    // only make dates until the next booking available
    // disable other dates temporarily
  }

  setCheckoutDate(checkoutDate) {
    let formattedCheckoutDate;
    if (checkoutDate) {
      formattedCheckoutDate = format(checkoutDate, 'eee P');
    } else {
      formattedCheckoutDate = '';
    }
    this.setState({ checkoutDate, formattedCheckoutDate });
    // show all other available dates (revert temp action from setCheckinDate)
  }

  clearDates() {
    this.setState({
      checkinDate: null,
      formattedCheckinDate: '',
      checkoutDate: null,
      formattedCheckoutDate: '',
    });
  }

  getPrevMonth() {
    this.setState(({ selectedDate }) => ({ selectedDate: subMonths(selectedDate, 1) }));
  }

  getNextMonth() {
    this.setState(({ selectedDate }) => ({ selectedDate: addMonths(selectedDate, 1) }));
  }

  addCount(guestType) {
    if (guestType === 'adults') {
      this.setState(
        ({ adults }) => ({ adults: adults + 1 })
      );
    } else if (guestType === 'children') {
      this.setState(
        ({ children }) => ({ children: children + 1 })
      );
    } else if (guestType === 'infants') {
      this.setState(
        ({ infants }) => ({ infants: infants + 1 })
      );
    }
  }

  subCount(guestType) {
    const { adults, children, infants } = this.state;
    if (guestType === 'adults' && adults > 1) {
      this.setState(
        ({ adults }) => ({ adults: adults - 1 })
      );
    } else if (guestType === 'children' && children >= 1) {
      this.setState(
        ({ children }) => ({ children: children - 1 })
      );
    } else if (guestType === 'infants' && infants >= 1) {
      this.setState(
        ({ infants }) => ({ infants: infants - 1 })
      );
    }
  }

  toggleDatePicker() {
    const { checkinDate, showDatePicker } = this.state;
    if (!checkinDate && !showDatePicker) {
      this.setState({ showDatePicker: true });
    } else if (checkinDate && checkoutDate) {
      console.log('clicked', checkinDate, showDatePicker);
      this.setState({ showDatePicker: false });
    }
  }

  toggleGuestPicker() {
    this.setState(
      ({ showGuestPicker }) => ({ showGuestPicker: !showGuestPicker })
    );
  }

  render() {
    const {
      // PriceHeader
      nightlyRate,
      // DatePicker
      showDatePicker,
      reservations,
      selectedDate,
      checkinDate,
      formattedCheckinDate,
      checkoutDate,
      formattedCheckoutDate,
      // GuestCounter
      showGuestPicker,
      adults,
      children,
      infants,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <PriceHeader nightlyRate={nightlyRate} />
        <form className={styles.form} onSubmit={this.handleSumbit}>
          <div className={styles.fieldSet}>
            <label>
              <span>Dates</span>
            </label>
            <div className={styles.container}>
              <input value={formattedCheckinDate} placeholder="Check-in" onChange={() => { }} onClick={this.toggleDatePicker} />
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
              <input value={formattedCheckoutDate} placeholder="Checkout" onChange={() => { }} onClick={this.toggleDatePicker} />
            </div>
          </div>
          <div>
            {showDatePicker &&
              <DatePicker
                reservations={reservations}
                selectedDate={selectedDate}
                checkinDate={checkinDate}
                checkoutDate={checkoutDate}
                selectDate={this.selectDate}
                clearDates={this.clearDates}
                getPrevMonth={this.getPrevMonth}
                getNextMonth={this.getNextMonth}
              />
            }
          </div>
          <div className={styles.fieldSet}>
            <label>
              <span>Guests</span>
            </label>
            <GuestPicker
              adults={adults}
              children={children}
              infants={infants}
              addCount={this.addCount}
              subCount={this.subCount}
              showGuestPicker={showGuestPicker}
              toggleGuestPicker={this.toggleGuestPicker}
            />
          </div>
          <input type="hidden" value={adults} onChange={() => { }} />
          <input type="hidden" value={children} onChange={() => { }} />
          <input type="hidden" value={infants} onChange={() => { }} />
          {checkinDate && checkoutDate &&
            <PriceChart />
          }
          <div>
            <ReserveButton label="Reserve" />
            <div className={styles.memo}>You won&apos;t be charged yet</div>
          </div>
        </form>
      </div>
    );
  }
}

Reservations.propTypes = {
  spaceId: PropTypes.number.isRequired,
};

export default Reservations;
