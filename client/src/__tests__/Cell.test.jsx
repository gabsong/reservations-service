/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import Cell from '../Cell.jsx';
import { shallow } from 'enzyme';

describe('<Cell />', () => {
  it('background color should change on mouse onter', () => {
    const wrapper = shallow(<Cell />);
    wrapper.find('[key="3"]').simulate('onMouseEnter');
    expect(wrapper.state().mouseHover).toBe(true);
  });

  it('background color should change on mouse leave', () => {
    const wrapper = shallow(<Cell />);
  });
});
