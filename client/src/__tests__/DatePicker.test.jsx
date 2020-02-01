import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { shallow } from 'enzyme';
import DatePicker from '../DatePicker';

describe('<DatePicker />', () => {
  it('does not display a calendar by default', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper.containsMatchingElement('Calendar')).toBe(false);
  });

  it('shows check-in calendar on check-in click', () => {
    // const wrapper = shallow(<DatePicker />);
  });

  it('highlights input field on click', () => {
    // const wrapper = shallow(<DatePicker />);
  });

  it('shows check-out calendar on check-in date click', () => {
    // const wrapper = shallow(<DatePicker />);
  });

  it('hides calendar component on click outside the component', () => {
    // const wrapper = shallow(<DatePicker />);
  });

  it("saves today's date to its state", () => {
    const wrapper = shallow(<DatePicker />);
    const datePickerInstance = wrapper.instance();
    datePickerInstance.componentDidMount();
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    expect(format(wrapper.state().selectedDate, 'yyyy-MM-dd')).toBe(todayDate);
  });

  it('has a function that formats the date for the Month component', () => {
    const wrapper = shallow(<DatePicker />);
    const datePickerInstance = wrapper.instance();
    const expectedDate = datePickerInstance.getCurrentMonthYear(new Date());
    const todayDate = format(new Date(), 'MMMM yyyy');
    expect(expectedDate).toBe(todayDate);
  });

  it('has a previous button that updates the date to last month', () => {
    const wrapper = shallow(<DatePicker />);
    const monthAfterClick = format(subMonths(wrapper.state().selectedDate, 1), 'MM');
    wrapper.find('[name="prev"]').simulate('click');
    expect(format(wrapper.state().selectedDate, 'MM')).toBe(monthAfterClick);
  });

  it('has a next button that updates the date to next month', () => {
    const wrapper = shallow(<DatePicker />);
    const monthAfterClick = format(addMonths(wrapper.state().selectedDate, 1), 'MM');
    wrapper.find('[name="next"]').simulate('click');
    expect(format(wrapper.state().selectedDate, 'MM')).toBe(monthAfterClick);
  });

});
