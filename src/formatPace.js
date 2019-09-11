import {convert} from './conversions'
import * as unitTypes from './unitTypes'

export const formatPace = (secondsPerKm, {metricUnits} = {}) => {
  if (metricUnits) {
    // unsupported as of right now, but I could see 'degree' being a possiblilty
    return unitTypes.paceKm(secondsPerKm)
  } else {
    const converted = convert(secondsPerKm).from('secondsPerKm').to('secondsPerMile')
    return unitTypes.paceMiles(converted)
  }
}
