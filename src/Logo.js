import React, { Component } from 'react';

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
  export default Logo;