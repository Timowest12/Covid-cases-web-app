import React from 'react';
import renderer from 'react-test-renderer';
import InfoStat from './InfoStat';


it('test if infostat component renders correctly', () => {
  const tree = renderer.create(<InfoStat  />).toJSON();
  expect(tree).toMatchSnapshot();
});