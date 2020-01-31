/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import DatePicker from './DatePicker.jsx';
import GuestPicker from './GuestPicker.jsx';
import PriceChart from './PriceChart.jsx';
import ReserveButton from './ReserveButton.jsx';
import styles from './BookForm.module.css';

// BookForm stores state for current reservation
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkinDate: 'Check-in',
      checkoutDate: 'Checkout',
      adults: 1,
      children: 0,
      infants: 0,
    };
  }

  render() {
    return (
      <form>
        <div>Dates</div>
        <div className={styles.container}>
          <input value={this.state.checkinDate} />
          <div> to </div>
          <input value={this.state.checkoutDate} />
        </div>
        <DatePicker />
        <DatePicker />
        <label>Guests</label>
        <GuestPicker />
        <input type="hidden" value={this.state.adults} />
        <input type="hidden" value={this.state.children} />
        <input type="hidden" value={this.state.infants} />
        {this.state.checkinDate !== 'Check-in' &&
        this.state.checkinDate !== 'Checkout' &&
        <PriceChart />}
        <ReserveButton label="Reserve" />
      </form>
    );
  }
}

export default BookForm;
