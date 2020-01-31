/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import Reserve from '../Reserve.jsx';

describe('<Reserve />', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Reserve />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
