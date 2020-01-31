import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';

describe('<BookForm />', () => {
  it('has three labels', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('has two DatePicker components', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('DatePicker')).toHaveLength(2);
  });

  it('shows calendar component on click', () => {
    const wrapper = shallow(<BookForm />);
  });

  it('highlights input field on click', () => {
    const wrapper = shallow(<BookForm />);
  });

  it('closes calendar component on click outside the component', () => {
    // test code
  });
});
