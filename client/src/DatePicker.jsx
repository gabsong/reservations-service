import React from 'react';

// const DatePicker = (props) => (
//   <div>This is the DatePicker component</div>
// );

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <input />
      </div>
    );
  }
}

export default DatePicker;
