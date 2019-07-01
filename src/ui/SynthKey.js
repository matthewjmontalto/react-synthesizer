import React, { Component } from 'react'
import Oscillator from '../audio/Oscillator.js'


class SynthKey extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <Oscillator />
      </div>
    )
  }
}

export default SynthKey
