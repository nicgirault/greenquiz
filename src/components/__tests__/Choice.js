import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Choice from '../Choice';

describe('Choice', () => {
  it('should render the choice', () => {
    const tree = renderer.create(
      <Choice>Hello</Choice>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
