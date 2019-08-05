import { SET_OCTAVE } from '../actions/types.js'

const initialState = {
  octave: 'octaveFour'
}

export default function octave(state = initialState, action) {
    if (action.type === SET_OCTAVE) {
      return Object.assign({}, state, {
        octave: action.octave
      })
    } else {
      return state
    }
  }
