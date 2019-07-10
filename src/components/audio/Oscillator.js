import React, { Component } from 'react'
import SynthKey from '../ui/SynthKey.js'
import { connect } from 'react-redux'
// import { [...actions] } from './redux/actions/[filename]'
import '../ui/SynthKey.scss'



class Oscillator extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  init = () => {
    // Get audio context upon instantiation
    this.context = new (window.AudioContext || window.webkitAudioContext)()
    // define oscillator node
    this.oscillator = this.context.createOscillator()
    // waveform type
    // should accept props.wave from user input
    this.oscillator.type = 'sine'
    // Create Gain node to affect volume with Oscillator initialization
    // Gain node must be attached to this.context
    this.gainNode = this.context.createGain()
    // chain gain node to oscillator
    this.oscillator.connect(this.gainNode)
    // route output
    this.gainNode.connect(this.context.destination)
  }

  play = () => {
    // on keyDown call initialize - oscillator needs to be re-created every time
    this.init()
    // Get current time from audio context
    const time = this.context.currentTime
    // set frequency
    // should accept props.frequency from './frequency.js'
    this.oscillator.frequency.value = 440
    // set gain
    this.gainNode.gain.setValueAtTime(1, time)
    // start oscillator
    this.oscillator.start(time)

  }

  stop = () => {
    // attenuate gain to 0 and stop oscillator on keyUp with passed time value
    const time = this.context.currentTime
    this.gainNode.gain.setValueAtTime(0, time)
    this.oscillator.stop(time)
  }


  render () {
    return (
      <SynthKey play={this.play} stop={this.stop}/>
    )
  }
}

// export default connect(null, { ...actions })(Oscillator)
export default Oscillator
