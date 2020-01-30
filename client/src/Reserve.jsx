import React from 'react';
import PriceHeader from './PriceHeader.jsx';
import BookForm from './BookForm.jsx';

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
        <PriceHeader nightlyRate={this.state.nightlyRate} />
        <BookForm />
      </div>
    );
  }
}

export default Reserve;
