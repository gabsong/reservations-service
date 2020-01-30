import React from 'react';
import { shallow } from 'enzyme';
import PriceHeader from '../PriceHeader';

describe('<PriceHeader />', () => {
  it('displays the price description', () => {
    const wrapper = shallow(<PriceHeader />);
    expect(wrapper.find('.price-info').text()).toMatch(/per night/);
  });

  it('displays the review summary', () => {
    const wrapper = shallow(<PriceHeader />);
    expect(wrapper.find('.review-info').text()).toMatch(/reviews/);
  });
});
