import SET_OCTAVE from '../actions/types.js'

const initialState = {
  octave: 'octaveFour'
}

export default function(state = initialState, action) {
    // switch (action.type) {
    //   case SET_OCTAVE:
    //     return Object.assign({}, state, {
    //       octave: action.octave
    //     })
    //   default:
    //     return state
    // }

    if (action.type === SET_OCTAVE) {
      return Object.assign({}, state, {
        octave: action.octave
      })
    } else {
      return state
    }
  }
