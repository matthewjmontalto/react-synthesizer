import React, { Component } from 'react';
import Oscillator from './audio/Oscillator.js'
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>React Synthesizer</h1>
          <Oscillator />
        </div>
    );
  }
}

export default App;
