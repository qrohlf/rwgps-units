import * as unitTypes from './unitTypes'

export const formatDuration = (seconds, opts) => {
  return unitTypes.duration(seconds, opts)
}
