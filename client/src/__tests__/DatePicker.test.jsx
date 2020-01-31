import React from 'react';
import { shallow } from 'enzyme';
import DatePicker from '../DatePicker';

describe('<DatePicker />', () => {
  it('does not display a calendar by default', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper.containsMatchingElement('Calendar')).toBe(false);
  });

  it('shows check-in calendar on check-in click', () => {
    const wrapper = shallow(<DatePicker />);
  });

  it('highlights input field on click', () => {
    const wrapper = shallow(<DatePicker />);
  });

  it('shows check-out calendar on check-in date click', () => {
    const wrapper = shallow(<DatePicker />);
  });

  it('hides calendar component on click outside the component', () => {
    const wrapper = shallow(<DatePicker />);
  });

  it('should find what the current month is', () => {
    const wrapper = shallow(<DatePicker />);
    console.log(wrapper.debug());
  });
});
