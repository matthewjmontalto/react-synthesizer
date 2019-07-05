import React, { Component } from 'react'
import './SynthKey.scss'

class SynthKey extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    // SynthKey inherits play and stop functions from parent Oscillator
    const { play, stop } = this.props
    // Update to 'onKeyDown' to map keyboard
    return (
      <div className={'synth-key'} onMouseDown={play} onMouseUp={stop}></div>
    )
  }
}

export default SynthKey
