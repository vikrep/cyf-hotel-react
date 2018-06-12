import React, { Component } from 'react';

// Special deals component
class SpecialDeals extends Component {
  render() {
    const deal = (props) => (
      this.props.spdeal.map((name) =>
        <p>{name}</p>));
    return (
      <div>{deal()}</div>
    );
  };
};
export default SpecialDeals;