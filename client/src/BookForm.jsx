import React from 'react';
import DatePicker from './DatePicker.jsx';
import GuestPicker from './GuestPicker.jsx';
import PriceChart from './PriceChart.jsx';
import SubmitButton from './SubmitButton.jsx';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <label>Dates</label>
        <DatePicker />
        <DatePicker />
        <label>Guests</label>
        <GuestPicker />
        <PriceChart />
        <SubmitButton />
        <label>You won't be charged yet</label>
      </form>
    );
  }
}

export default BookForm;
