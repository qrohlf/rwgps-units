import {convert} from './conversions'
import * as unitTypes from './unitTypes'

// value is expected to be in native rwgps grade units (%)
export const formatGrade = (val, {metricUnits, units, ...stringOpts} = {}) => {
  if (units) {
    // unsupported as of right now, but I could see 'degree' being a possiblilty
    const converted = convert(val).from('grade').to(units)
    return unitTypes[units](converted, stringOpts)
  } else {
    return unitTypes.grade(val, stringOpts)
  }
}
