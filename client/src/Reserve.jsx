import React from 'react';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>PriceHeader</div>
        <div>DatePicker</div>
        <div>GuestPicker</div>
        <div>PriceChart</div>
        <div>SubmitButton</div>
      </div>
    );
  }
}

export default Reserve;
