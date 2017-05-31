import React, { Component, PropTypes } from 'react';

export default class TotalSum extends Component {

  static propTypes = {
    totalSum: PropTypes.number.isRequired
  };

  render() {

    return (
      <div className="total-sum">
        <h1>{this.props.totalSum} &#8364;</h1>
      </div>
    );
  }
}


