/* eslint-disable linebreak-style */
import React from 'react';
import DatePicker from './DatePicker.jsx';
import GuestPicker from './GuestPicker.jsx';
import PriceChart from './PriceChart.jsx';
import Button from './Button.jsx';

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
        <fieldset>
          <legend>Dates</legend>
          <input text="Check-in" />
          <div>arrow</div>
          <input text="Checkout" />
          <DatePicker />
          <DatePicker />
        </fieldset>
        <label>Guests</label>
        <GuestPicker />
        <PriceChart />
        <Button label="Reserve" />
      </form>
    );
  }
}

export default BookForm;
