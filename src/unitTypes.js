const unit = (unitSpec) => (val, stringOpts) => ({
  valueToString: (opts) => val.toLocaleString('en-US', {...unitSpec.defaultStringOpts, ...stringOpts, ...opts}),
  toString: ({short = false, ...opts} = {}) => (
    val.toLocaleString('en-US', {...unitSpec.defaultStringOpts, ...stringOpts, ...opts}) +
    (unitSpec.seperator || ' ') +
    (short ? unitSpec.short : unitSpec.long)
  ),
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
  seperator: ''
})

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
