// Components
import React, { Component } from 'react';
import Oscillator from './components/audio/Oscillator.js'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store.js'

// Styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>React Synthesizer</h1>
          <Oscillator />
        </div>
      </Provider>
    );
  }
}

export default App;
