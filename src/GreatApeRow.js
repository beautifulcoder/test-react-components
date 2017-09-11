import React, { Component } from 'react';

import './GreatApeRow.css';

class GreatApeRow extends Component {
  render() {
    return (
      <div>
        <img
          className="GreatApeRow-image"
          src={this.props.ape.image}
          alt={this.props.ape.name}
        />

        <p className="GreatApeRow-detail">
          <b>Species:</b> {this.props.ape.name}
        </p>

        <p className="GreatApeRow-detail">
          <b>Age:</b> {this.props.ape.age}
        </p>
      </div>
    );
  }
}

export default GreatApeRow;
