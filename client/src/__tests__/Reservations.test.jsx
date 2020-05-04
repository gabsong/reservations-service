import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Reservations from '../Reservations';

describe('<Reservations />', () => {
  const space = {
    spaceId: 12,
    nightlyRate: 125,
    cleaningFee: 22.99,
    serviceFee: 40,
    taxRate: 4,
    maxAdultGuests: 2,
    minStayNights: 2,
  };

  const reservations = [
    {
      checkinDate: '2020-07-01',
      checkoutDate: '2020-07-04',
      spaceId: 12,
    },
  ];

  it('matches the snapshot', () => {
    const tree = renderer.create(<Reservations spaceId={space.spaceId} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains spaceId in state', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.state().spaceId).toBe(12);
  });

  it('displays "Check-in" as default text', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.containsMatchingElement(<input placeholder="Check-in" />)).toBe(true);
  });

  it('displays "Checkout" as default text', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.containsMatchingElement(<input placeholder="Checkout" />)).toBe(true);
  });

  it('displays a GuestPicker components after date input is clicked', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.find('GuestPicker')).toHaveLength(1);
  });

  it('does not display PriceChart component by default', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.find('PriceChart')).toHaveLength(0);
  });

  // maybe change to check className
  it('displays a Reserve button', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.find('ReserveButton')).toHaveLength(1);
  });

  // displays PriceChart when dates are filled
});

// state-related tests (later)
describe('<Reservations /> functions', () => {
  const space = {
    spaceId: 12,
    nightlyRate: 125,
    cleaningFee: 22.99,
    serviceFee: 40,
    taxRate: 4,
    maxAdultGuests: 2,
    minStayNights: 2,
  };

  const reservations = [
    {
      checkinDate: '2020-07-01',
      checkoutDate: '2020-07-04',
      spaceId: 12,
    },
  ];

  it('successfully get pricing info', () => {
    const wrapper = shallow(<Reservations spaceId={space.spaceId} />);
    expect(wrapper.state().nightlyRate).toBeLessThanOrEqual(200);
  });
});
