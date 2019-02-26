// TODO
import * as C from './constants'
import * as unitTypes from './unitTypes'

export const formatDuration = (seconds, {smallUnits, bigUnits, ...stringOpts} = {}) => {
  const threshold = C.SECONDS_IN_HOUR

  if (!bigUnits && (seconds < threshold || smallUnits)) {
    return unitTypes.minuteSecond(seconds, stringOpts)
  } else {
    return unitTypes.hourMinute(seconds, stringOpts)
  }
}
