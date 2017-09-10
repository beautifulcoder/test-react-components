import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GreatApeList from './GreatApeList';

const APES = [{ name: 'Australopithecus afarensis', isExtant: false },
  { name: 'Orangutan', isExtant: true }];

it('Renders GreatApeList with isExtant true', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeList
    apes={APES}
    showExtantOnly={true} />);

  // Act
  const component = renderer.getRenderOutput();
  const rows = component.props.children;

  // Assert
  expect(rows.length).toBe(1);
});

it('Renders GreatApeList with isExtant false', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeList
    apes={APES}
    showExtantOnly={false} />);

  // Act
  const component = renderer.getRenderOutput();
  const rows = component.props.children;

  // Assert
  expect(rows.length).toBe(2);
});
