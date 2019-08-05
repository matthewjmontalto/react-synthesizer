import { SET_WAVEFORM } from '../actions/types.js'

const initialState = {
  waveform: 'sine'
}


export default function waveform(state = initialState, action) {
    if (action.type === SET_WAVEFORM) {
      return Object.assign({}, state, {
        waveform: action.waveform
      })
    } else {
      return state
    }
  }
