import {leftPad} from './leftPad'

const unit = (unitSpec) => (val, stringOpts) => ({
  value: val,
  valueToString: (opts) => val.toLocaleString('en-US', {...unitSpec.defaultStringOpts, ...stringOpts, ...opts}),
  toString: ({short = false, ...opts} = {}) => {
    const valueString = val.toLocaleString('en-US', {...unitSpec.defaultStringOpts, ...stringOpts, ...opts})
    const unitString = short ? unitSpec.short : unitSpec.long
    const specSeperator = (unitSpec.seperator && (short ? unitSpec.seperator.short : unitSpec.seperator.long))
    const seperator = (specSeperator !== undefined) ? specSeperator : ' ' // this is a bit wordy because '' is falsy in JS
    return valueString + seperator + unitString
  },
  ...unitSpec
})

export const meters = unit({
  long: 'meters',
  short: 'm',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 0}
})

export const km = unit({
  long: 'kilometers',
  short: 'km',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 1}
})

export const feet = unit({
  long: 'feet',
  short: 'ft',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 0}
})

export const miles = unit({
  long: 'miles',
  short: 'mi',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 1}
})

export const kmPerHour = unit({
  long: 'km per hour',
  short: 'kph',
  compound: {numerator: km, denominator: hours},
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 1}
})

export const milesPerHour = unit({
  long: 'miles per hour',
  short: 'mph',
  compound: {numerator: miles, denominator: hours},
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 1}
})

export const grade = unit({
  long: 'percent',
  short: '%',
  compound: false,
  defaultStringOpts: {useGrouping: false, maximumFractionDigits: 1, minimumFractionDigits: 1},
  seperator: {short: '', long: ' '}
})

export const degrees = unit({
  long: 'degrees',
  short: 'º',
  compound: false,
  defaultStringOpts: {useGrouping: false, maximumFractionDigits: 1, minimumFractionDigits: 1},
  seperator: {short: '', long: ' '}
})

// TODO
export const seconds = {

}

export const minutes = {

}

export const hours = {

}

export const days = {

}

const MINUTE = 60
const HOUR = 60 * 60
const timePad = (num) => leftPad(num, 2, '0')

export const minuteSecond = (seconds, stringOpts) => ({
  long: 'mm:ss',
  short: 'min',
  compound: false,
  toString: ({short = false} = {}) => {
    const mins = timePad(Math.floor(seconds / MINUTE))
    const secs = timePad(Math.floor(seconds) % MINUTE)
    `${hrs}:${mins} ${short ? 'mm:ss' : 'min'}`
  },
  valueToString: () => {
    const mins = timePad(Math.floor(seconds / MINUTE))
    const secs = timePad(Math.floor(seconds) % MINUTE)
    return `${hrs}:${mins}`
  }
})

export const hourMinuteSecond = (seconds, stringOpts) => ({
  long: 'hh:mm',
  short: 'hrs',
  compound: false,
  defaultStringOpts: '',
  valueToString: () => {
    const hrs = Math.floor(seconds / HOUR)
    const mins = timePad(Math.floor((seconds % HOUR) / MINUTE))
    const secs = timePad(Math.floor(seconds) % MINUTE)
    return `${hrs}:${mins}`
  },
  toString: ({short = false} = {}) => {
    const hrs = Math.floor(seconds / HOUR)
    const mins = timePad(Math.floor((seconds % HOUR) / MINUTE))
    const secs = timePad(Math.floor(seconds) % MINUTE)
    return `${hrs}:${mins} ${short ? 'mm:ss' : 'hrs'}`
  }
})
