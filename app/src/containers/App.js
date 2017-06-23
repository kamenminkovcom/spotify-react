import React, { Component } from 'react';
import Navbar from '../Features/Navbar/Navbar';
import Login from '../Features/Login/login';
import Layout from '../Layout';
import app from './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Navbar/>
          <Layout/>
          <Login/>
      </div>
    );
  }
}

export default App;
