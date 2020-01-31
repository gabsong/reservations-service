import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';

describe('<BookForm />', () => {
  it('displays two DatePicker components', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('DatePicker')).toHaveLength(2);
  });

  it('displays "Check-in" as default text', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.containsMatchingElement(<input placeholder="Check-in" />)).toBe(true);
  });

  it('displays "Checkout" as default text', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.containsMatchingElement(<input placeholder="Checkout" />)).toBe(true);
  });

  it('displays a GuestPicker components', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('GuestPicker')).toHaveLength(1);
  });

  it('does not display PriceChart component by default', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('PriceChart')).toHaveLength(0);
  });

  // maybe change to check className
  it('displays a Reserve button', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('ReserveButton')).toHaveLength(1);
  });

  // state-related tests (later)
  // displays PriceChart when dates are filled
});
