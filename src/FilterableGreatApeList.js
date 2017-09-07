import React, { Component } from 'react';

import GreatApeSearchBar from './GreatApeSearchBar';
import GreatApeList from './GreatApeList';

class FilterableGreatApeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showExtantOnly: false
    };
  }

  render() {
    return(
      <div>
        <GreatApeSearchBar
          showExtantOnly={this.state.showExtantOnly}
        />

        <GreatApeList
          apes={this.props.apes}
          showExtantOnly={this.state.showExtantOnly}
        />
      </div>
    );
  }
}

export default FilterableGreatApeList;
