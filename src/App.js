import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.js';
import BookingsMessage from './BookingMessage.js';
import SpecialDeals from './SpecialDeals.js';

class App extends Component {
  render() {
    const deals = ["Earlier booking -20%", "Every 10 days -10%", "Breakfast is free"];
    return (
      <div className="App">
        <Logo logohotel = "CYF Hotel" />
        <BookingsMessage />
        <SpecialDeals spdeal = {deals} />
      </div>
    );
  };
};

export default App;






