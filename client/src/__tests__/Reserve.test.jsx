import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Reserve from '../Reserve';

describe('<Reserve />', () => {
  // describe a Reserve component with its state
  const space = {
    spaceId: 12,
    nightlyRate: 125,
    cleaningFee: 22.99,
    serviceFee: 40,
    taxRate: 4,
    maxAdultGuests: 2,
    minStayNights: 2,
  };

  // const reservations = [
  //   {
  //     checkinDate: '2020-07-01',
  //     checkoutDate: '2020-07-04',
  //     spaceId: 12,
  //   },
  // ];

  it('matches the snapshot', () => {
    const tree = renderer.create(<Reserve />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains spaceId in state', () => {
    const wrapper = shallow(<Reserve spaceId={space.spaceId} />);
    expect(wrapper.state().spaceId).toBe(12);
  });
});

// write state tests later
// describe('<Reserve /> functions', () => {
//   it('successfully get pricing info', () => {
//     const wrapper = shallow(<Reserve spaceId="15" />);
//     expect(wrapper.state().nightlyRate).toBeLessThanOrEqual(200);
//   });
// });
