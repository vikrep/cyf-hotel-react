import React, {Component} from 'react';

// Special deals component
class SpecialDeals extends Component {
    render() {
      const deals = ["Earlier booking -20%", "Every 10 days -10%", "Breakfast is free"];
      const deal = () => (
        deals.map((name) =>
          <p>{name}</p>));
      return (
        <div>{deal()}</div>
      );
    };
  };
  export default SpecialDeals;