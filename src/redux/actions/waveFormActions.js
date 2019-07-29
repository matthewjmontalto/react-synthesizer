import SET_WAVEFORM from './types.js'

export const setWaveForm = waveForm => {
  return {
    type: SET_WAVEFORM,
    waveForm
  }
}
