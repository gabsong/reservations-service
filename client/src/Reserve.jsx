import React from 'react';
import PriceHeader from './PriceHeader.jsx';
import DatePicker from './DatePicker.jsx';
import GuestPicker from './GuestPicker.jsx';
import PriceChart from './PriceChart.jsx';
import SubmitButton from './SubmitButton.jsx';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceId: this.props.spaceId,
      nightlyRate: 200,
    };
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <div className="reserve-module">
        <PriceHeader />
        <DatePicker />
        <GuestPicker />
        <PriceChart />
        <SubmitButton />
      </div>
    );
  }
}

export default Reserve;
