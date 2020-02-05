/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PriceHeader from './PriceHeader.jsx';
import BookForm from './BookForm.jsx';
import styles from './Reserve.module.css';

class Reserve extends React.Component {
  constructor (props) {
    super(props);
    const { spaceId } = this.props;
    this.state = {
      spaceId: spaceId,
      nightlyRate: 0,
      cleaningFee: 0,
      serviceFee: 0,
      taxRate: 0,
      maxAdultGuests: 0,
      minStayNights: 0,
    };

    this.getSpaceInfo = this.getSpaceInfo.bind(this);
  }

  componentDidMount () {
    this.getSpaceInfo();
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

  render () {
    const { spaceId, nightlyRate } = this.state;
    return (
      <div className={styles.wrapper}>
        <PriceHeader nightlyRate={nightlyRate} />
        <BookForm spaceId={spaceId} />
      </div>
    );
  }
}

Reserve.propTypes = {
  spaceId: PropTypes.number,
};

Reserve.defaultProps = {
  spaceId: 0,
};

export default Reserve;
