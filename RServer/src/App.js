import React, { Component } from 'react';
import './App.css';
import List from './common/List';
import Head from './common/Head';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <List />
      </div>
    );
  }
}

export default App;
