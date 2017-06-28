import React, { Component } from 'react';
import Navbar from '../Features/Navbar/Navbar';
import Layout from '../Layout';
import app from './app.css';

class App extends Component {
  render() {
    let navBar = localStorage.hasOwnProperty('userId') ? <Navbar/> : null;
    return (
      <div className="app">
          {navBar}
          <Layout/>
      </div>
    );
  }
}

export default App;
