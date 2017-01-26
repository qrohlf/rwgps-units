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

export const hourMinuteSecond = {

}
