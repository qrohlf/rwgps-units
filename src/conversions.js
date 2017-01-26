import * as C from './constants'

// Meters -> *
export const metersToMeters = (m) => m

export const metersToMiles = (m) => m / C.METERS_IN_MILE

export const metersToFeet = (m) => m / C.METERS_IN_FOOT

export const metersToKm = (m) => m / C.METERS_IN_KM

// Km -> *
export const kmToKm = (km) => km

export const kmToMeters = (km) => km * C.METERS_IN_KM

export const kmToMiles = (km) => km * C.METERS_IN_KM / C.METERS_IN_MILE

export const kmToFeet = (km) => km * C.METERS_IN_KM / C.METERS_IN_FOOT


// Feet -> *
export const feetToFeet = (ft) => ft

export const feetToMeters = (ft) => ft * C.METERS_IN_FOOT

export const feetToMiles = (ft) => ft / C.FEET_IN_MILES

export const feetToKm = (ft) => ft * C.METERS_IN_FOOT / C.METERS_IN_KM

// Miles -> *
export const milesToMiles = (m) => m

export const milesToMeters = (m) => m * C.METERS_IN_MILE

export const milesToKm = (m) => m * C.METERS_IN_MILE / C.METERS_IN_KM

export const milesToFeet = (m) => m * C.FEET_IN_MILES

// Conversion table for programmatic usage.
// Example:
// import {conversions as C} from 'rwgps-units'
// tmp:
// import C from './conversions'
// const val = 5000
// const fromUnits = 'meters'
// const toUnits = 'ft'
// const result = C(val).from('meters').to('')
const table = {
  meters: {
    meters: metersToMeters,
    km: metersToKm,
    feet: metersToFeet,
    miles: metersToMiles
  },
  km: {
    meters: kmToMeters,
    km: kmToKm,
    feet: kmToFeet,
    miles: kmToMiles
  },
  feet: {
    meters: feetToMeters,
    km: feetToKm,
    feet: feetToFeet,
    miles: feetToMiles
  },
  miles: {
    meters: milesToMeters,
    km: milesToKm,
    feet: milesToFeet,
    miles: milesToMiles
  }
}

export const convert = (val) => ({
  from: (from) => ({
    to: (to) => {
      if (!table[from]) { throw TypeError(`Can't find unit type '${from}'`)}
      if (!table[from][to]) { throw TypeError(`Can't convert from '${from}' to '${to}'`)}
      return table[from][to](val)
    }
  })
})
