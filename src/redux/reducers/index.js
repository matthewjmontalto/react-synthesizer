// Root Reducer (combines all other reducers for createStore())
import { combineReducers } from 'redux'
// import any reducers
import octaveReducer from './octaveReducer.js'
import waveformReducer from './waveformReducer.js'

export default combineReducers({
  //list imported reducers
  octave: octaveReducer,
  waveform: waveformReducer
})
