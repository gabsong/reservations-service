import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';

describe('<BookForm />', () => {
  it('has three labels', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('label')).toHaveLength(3);
  });

  it('has two DatePicker components', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper.find('DatePicker')).toHaveLength(2);
  });
});
