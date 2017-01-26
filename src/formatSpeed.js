import {convert} from './conversions'
import * as unitTypes from './unitTypes'

// value is expected to be in native rwgps speed units (km/h)
export const formatSpeed = (val, {metricUnits, units, ...stringOpts} = {}) => {
  if (units) {
    const converted = convert(val).from('km').to(units)
    return unitTypes[units](converted, stringOpts)
  } else if (metricUnits) {
    return unitTypes.kmPerHour(val, stringOpts)
  } else {
    const converted = convert(val).from('km').to('miles')
    return unitTypes.milesPerHour(converted, stringOpts)
  }
}
