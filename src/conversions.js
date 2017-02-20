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

// % (grade)
export const gradeToGrade = (p) => p

export const gradeToDegrees = (p) => Math.atan(p / 100) * 180 / Math.PI

// Degrees (grade)
export const degreesToDegrees = (d) => d

export const degreesToGrade = (d) => Math.tan(d * Math.PI / 180) * 100

// MPH (speed)
export const mphToMph = (mph) => mph

export const mphToKph = (mph) => milesToKm(mph)

// KPH (speed)
export const kphToKph = (kph) => kph

export const kphToMph = (kph) => kmToMiles(kph)

// Pace
export const secondsPerKmToMiles = (secondsPerKm) => secondsPerKm / kmToMiles(1)

export const secondsPerMileToKm = (secondsPerMile) => secondsPerMile / milesToKm(1)

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
  },
  grade: {
    grade: gradeToGrade,
    degrees: gradeToDegrees
  },
  degrees: {
    grade: degreesToGrade,
    degrees: degreesToDegrees
  },
  kph: {
    kph: kphToKph,
    mph: kphToMph
  },
  mph: {
    kph: mphToKph,
    mph: mphToMph
  },
  secondsPerKm: {
    secondsPerMile: secondsPerKmToMiles
  },
  secondsPerMile: {
    secondsPerKm: secondsPerMileToKm
  }
}

export const convert = (val) => ({
  from: (from) => ({
    to: (to) => {
      if (!table[from]) { throw TypeError(`Can't find unit type '${from}'`) }
      if (!table[from][to]) { throw TypeError(`Can't convert from '${from}' to '${to}'`) }
      return table[from][to](val)
    }
  })
})
