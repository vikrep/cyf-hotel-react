import React, { Component } from 'react';

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
  export default BookingsMessage;