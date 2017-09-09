import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GreatApeSearchBar from './GreatApeSearchBar';

it('Renders with showExtantOnly checkbox', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeSearchBar
    showExtantOnly="true"
    onShowExtantOnlyInput="() => {}" />);

  // Act
  const component = renderer.getRenderOutput();
  const checkbox = component.props.children[0];

  // Assert
  expect(checkbox.type).toBe('input');
  expect(checkbox.props.id).toBe('showExtantOnly');
  expect(checkbox.props.type).toBe('checkbox');
  expect(checkbox.props.checked).toBe('true');
  expect(checkbox.props.onChange).toBeDefined();
});

it('Sets onChange event in showExtantOnly', () => {
  // Arrange
  let showExtantOnly = false;
  const onChange = (e) => { showExtantOnly = e };

  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeSearchBar
    showExtantOnly="true"
    onShowExtantOnlyInput={onChange} />);

  // Act
  const component = renderer.getRenderOutput();
  const checkbox = component.props.children[0];

  checkbox.props.onChange({ target: { checked: true } });

  // Assert
  expect(showExtantOnly).toBe(true);
});

it('Renders with showExtantOnly label', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeSearchBar showExtantOnly="true" />);

  // Act
  const component = renderer.getRenderOutput();
  const label = component.props.children[1];

  // Assert
  expect(label.type).toBe('label');
  expect(label.props.htmlFor).toBe('showExtantOnly');
});
