import * as C from './constants'
import * as unitTypes from './unitTypes'

export const formatDuration = (seconds, {smallUnits, bigUnits, biggestUnits, ...stringOpts} = {}) => {
  const threshold = C.SECONDS_IN_HOUR

  if (biggestUnits) {
    return unitTypes.hourMinuteSecond(seconds, stringOpts)
  } else if (!bigUnits && (seconds < threshold || smallUnits)) {
    return unitTypes.minuteSecond(seconds, stringOpts)
  } else {
    return unitTypes.hourMinute(seconds, stringOpts)
  }
}
