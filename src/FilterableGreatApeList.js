import React, { Component } from 'react';

import GreatApeSearchBar from './GreatApeSearchBar';
import GreatApeList from './GreatApeList';

class FilterableGreatApeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showExtantOnly: false
    };

    this.handleShowExtantOnlyInput = this.handleShowExtantOnlyInput.bind(this);
  }

  handleShowExtantOnlyInput(isExtantOnly) {
    this.setState({
      showExtantOnly: isExtantOnly
    });
  }

  render() {
    return(
      <div>
        <GreatApeSearchBar
          showExtantOnly={this.state.showExtantOnly}
          onShowExtantOnlyInput={this.handleShowExtantOnlyInput}
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
