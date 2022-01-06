import React from 'react';
import renderer from 'react-test-renderer';
import MainHeaderBlock from './MainHeaderBlock';

it('test if mainheaderblock renders correctly', () => {
  const tree = renderer.create(<MainHeaderBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});
