import React, { Component } from 'react';
import './App.css';


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
// Logo Component
class Logo extends Component {
  render() {
    const HelloWorld = "CYF Hotel"
    return (
      <header className="App-header">
        <img src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png" className="App-logo" alt="logo" />
        <h1 className="App-title">{HelloWorld}</h1>
      </header>
    );
  };
};
// Booking Date component
class BookingsMessage extends Component {
  render() {
    return (
      <p className="App-intro">
        There are bookings available for today's {new Date().toLocaleDateString()}
      </p>
    );
  };
};
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

export default App;






