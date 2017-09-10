import React, { Component } from 'react';

import GreatApeRow from './GreatApeRow';

class GreatApeList extends Component {
  render() {
    let rows = [];

    this.props.apes.forEach((ape) => {
      if (!this.props.showExtantOnly) {
        rows.push(<GreatApeRow key={ape.name} ape={ape} />);

        return;
      }

      if (ape.isExtant) {
        rows.push(<GreatApeRow key={ape.name} ape={ape} />);
      }
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default GreatApeList;
