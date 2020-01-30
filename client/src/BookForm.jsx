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
        <DatePicker />
        <GuestPicker />
        <PriceChart />
        <SubmitButton />
      </form>
    );
  }
}

export default BookForm;
