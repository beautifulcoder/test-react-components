import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import FilterableGreatApeList from './FilterableGreatApeList';

const APES = [];

it('Initializes FilterableGreatApeList', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<FilterableGreatApeList apes={APES} />);

  // Act
  const component = renderer.getRenderOutput();

  // Assert
  expect(component.type).toBe('div');
  expect(component.props.children.length).toBe(2);
});

it('Renders with GreatApeSearchBar', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<FilterableGreatApeList apes={APES} />);

  // Act
  const component = renderer.getRenderOutput();
  const searchBar = component.props.children[0];

  // Assert
  expect(searchBar).toBeDefined();
  expect(searchBar.type.name).toBe('GreatApeSearchBar');
  expect(searchBar.props.showExtantOnly).toBe(false);
  expect(searchBar.props.onShowExtantOnlyInput).toBeDefined();
});

it('Renders with GreatApeList', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<FilterableGreatApeList apes={APES} />);

  // Act
  const component = renderer.getRenderOutput();
  const apeList = component.props.children[1];

  // Assert
  expect(apeList).toBeDefined();
  expect(apeList.type.name).toBe('GreatApeList');
  expect(apeList.props.showExtantOnly).toBe(false);
  expect(apeList.props.apes).toBe(APES);
});
