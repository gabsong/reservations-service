import React from 'react';
import ReactDOM from 'react-dom';
import Reserve from '../Reserve';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reserve />, div);
});

test('it works', () => {
  expect(1).toBe(1);
});

test('arithmetic', () => {
  expect(4 + 4).toBeGreaterThan(7);
  expect(4 + 4).toBeLessThan(9);
});

test('references', () => {
  const arr = [1, 2, 3];
  expect(arr).toEqual([1, 2, 3]);
  expect(arr).not.toBe([1, 2, 3]); // since === doesn't do deep comparison!
  expect(arr).toContain(1);
});
