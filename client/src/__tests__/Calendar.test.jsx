import React from 'react';
import { shallow } from 'enzyme';
import Calendar from '../Calendar';

describe('<Calendar />', () => {
  xit('has a function that gets an array of days in the selected month', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.find('Row').length >= 5).toBeTruthy();
  });

});
