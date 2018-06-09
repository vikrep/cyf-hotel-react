import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.js';
import BookingsMessage from './BookingMessage.js';
import SpecialDeals from './SpecialDeals.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <BookingsMessage />
        <SpecialDeals />
      </div>
    );
  };
};

export default App;






