import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GreatApeRow from './GreatApeRow';

const APE = {
  image: 'https://en.wikipedia.org/wiki/File:Australopithecus_afarensis.JPG',
  name: 'Australopithecus afarensis',
  age: '2.9 Mya'
};

it('Renders GreatApeRow with ape image', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeRow ape={APE} />);

  // Act
  const component = renderer.getRenderOutput();
  const apeImage = component.props.children[0];

  // Assert
  expect(apeImage).toBeDefined();
  expect(apeImage.props.src).toBe(APE.image);
  expect(apeImage.props.alt).toBe(APE.name);
});

it('Renders GreatApeRow with ape name', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeRow ape={APE} />);

  // Act
  const component = renderer.getRenderOutput();
  const apeName = component.props.children[1].props.children[2];

  // Assert
  expect(apeName).toBeDefined();
  expect(apeName).toBe(APE.name);
});

it('Renders GreatApeRow with ape age', () => {
  // Arrange
  const renderer = new ShallowRenderer();
  renderer.render(<GreatApeRow ape={APE} />);

  // Act
  const component = renderer.getRenderOutput();
  const apeAge = component.props.children[2].props.children[2];

  // Assert
  expect(apeAge).toBeDefined();
  expect(apeAge).toBe(APE.age);
});
