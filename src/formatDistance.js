import * as C from './constants'
import {convert} from './conversions'
import * as unitTypes from './unitTypes'

// value is expected to be in native rwgps distance units (meters)
export const formatDistance = (val, {metricUnits, smallUnits, bigUnits, units, ...stringOpts} = {}) => {
  if (units) {
    const converted = convert(val).from('meters').to(units)
    return unitTypes[units](converted, stringOpts)
  } else if (metricUnits) {
    return formatDistanceMetric(val, stringOpts, {smallUnits, bigUnits})
  } else {
    return formatDistanceImperial(val, stringOpts, {smallUnits, bigUnits})
  }
}

const metricThreshold = C.METERS_IN_KM
export const formatDistanceMetric = (val, stringOpts, {smallUnits, bigUnits}) => {
  if (!bigUnits && (val < metricThreshold || smallUnits)) {
    return unitTypes.meters(val)
  } else {
    const converted = convert(val).from('meters').to('km')
    return unitTypes.km(converted, stringOpts)
  }
}

const imperialThreshold = C.METERS_IN_MILE
export const formatDistanceImperial = (val, stringOpts, {smallUnits, bigUnits}) => {
  if (!bigUnits && (val < imperialThreshold || smallUnits)) {
    const converted = convert(val).from('meters').to('feet')
    return unitTypes.feet(converted, stringOpts)
  } else {
    const converted = convert(val).from('meters').to('miles')
    return unitTypes.miles(converted, stringOpts)
  }
}
