import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';

describe('<BookForm />', () => {
  it('displays "Check-in" as default text', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.containsMatchingElement(<input placeholder="Check-in" />)).toBe(true);
  });

  it('displays "Checkout" as default text', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.containsMatchingElement(<input placeholder="Checkout" />)).toBe(true);
  });

  // it('displays a GuestPicker components after date input is clicked', () => {
  //   const wrapper = shallow(<BookForm />);
  //   expect(wrapper.find('GuestPicker')).toHaveLength(1);
  // });

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
