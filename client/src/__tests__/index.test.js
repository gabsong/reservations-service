/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import Reservations from '../Reservations.jsx';

describe('<Reservations />', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Reservations />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
