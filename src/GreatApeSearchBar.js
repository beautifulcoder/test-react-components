import React, { Component } from 'react';

class GreatApeSearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleShowExtantOnlyChange = this.handleShowExtantOnlyChange.bind(this);
  }

  handleShowExtantOnlyChange(e) {
    this.props.onShowExtantOnlyInput(e.target.checked);
  }

  render() {
    return(
      <form>
        <input
          id="GreatApeSearchBar-showExtantOnly"
          type="checkbox"
          checked={this.props.showExtantOnly}
          onChange={this.handleShowExtantOnlyChange}
        />

        <label htmlFor="GreatApeSearchBar-showExtantOnly">Only show extant species</label>
      </form>
    );
  }
}

export default GreatApeSearchBar;
