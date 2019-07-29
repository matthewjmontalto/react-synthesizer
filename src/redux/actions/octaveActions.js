import SET_OCTAVE from './types.js'

export const setOctave = octave => {
  return {
    type: SET_OCTAVE,
    octave
  }
}
