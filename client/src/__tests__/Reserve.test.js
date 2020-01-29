import React from 'react';
import renderer from 'react-test-renderer';
import Reserve from '../Reserve';

describe('<Reserve />', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Reserve />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
