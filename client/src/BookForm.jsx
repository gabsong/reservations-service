/* eslint-disable jsx-a11y/label-has-associated-control */
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
  constructor (props) {
    super(props);
    this.state = {
      checkinDate: '',
      checkoutDate: '',
      adults: 1,
      children: 0,
      infants: 0,
    };
  }

  render () {
    const {
      checkinDate,
      checkoutDate,
      adults,
      children,
      infants,
    } = this.state;

    return (
      <form className={styles.form}>
        <div className={styles.fieldSet}>
          <label>
            <span>Dates</span>
          </label>
          <div className={styles.container}>
            <input value={checkinDate} placeholder="Check-in" />
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
            <input value={checkoutDate} placeholder="Checkout" />
          </div>
        </div>
        <div>
          <DatePicker spaceId="2" />
          {checkinDate !== '' && <DatePicker />}
        </div>
        <div className={styles.fieldSet}>
          <label>
            <span>Guests</span>
          </label>
          <GuestPicker />
        </div>
        <input type="hidden" value={adults} />
        <input type="hidden" value={children} />
        <input type="hidden" value={infants} />
        {
          checkinDate !== ''
            && checkinDate !== ''
            && <PriceChart />
        }
        <div>
          <ReserveButton label="Reserve" />
          <div>You won&apos;t be charged yet</div>
        </div>
      </form>
    );
  }
}

export default BookForm;
