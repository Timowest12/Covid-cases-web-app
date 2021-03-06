import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

it('Test if navbar renders correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
