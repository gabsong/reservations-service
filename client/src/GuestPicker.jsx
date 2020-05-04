/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import GuestCounter from './GuestCounter.jsx';
import styles from './GuestPicker.module.css';

const GuestPicker = ({
  adults,
  children,
  infants,
  addCount,
  subCount,
  showGuestPicker,
  toggleGuestPicker
}) => {
  let totalGuestCount = ''

  if (adults + children > 1) {
    totalGuestCount += `${adults + children} guests`;
  } else if (adults + children === 1) {
    totalGuestCount += '1 guest';
  }

  if (infants > 1) {
    totalGuestCount += ` , ${infants} infants`;
  } else if (infants === 1) {
    totalGuestCount += ', 1 infant';
  }

  return (
    <div>
      <div className={styles.container}>
        <button type="button" className={styles.btn} onClick={toggleGuestPicker}>
          {totalGuestCount}
        </button>
      </div>
      {showGuestPicker &&
        <div className={styles.dropdown}>
          <GuestCounter label="Adults" guestCount={adults} addCount={addCount} subCount={subCount} />
          <GuestCounter label="Children" guestCount={children} addCount={addCount} subCount={subCount} />
          <GuestCounter label="Infants" guestCount={infants} addCount={addCount} subCount={subCount} />
        </div>
      }
    </div>
  );
};

export default GuestPicker;
