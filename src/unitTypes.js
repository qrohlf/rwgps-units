const unit = (unitSpec) => (val, stringOpts) => ({
  ...unitSpec,
  valueToString: (opts) => val.toLocaleString('en-US', {...unitSpec.defaultStringOpts, ...stringOpts, ...opts}),
  toString: (opts) => val.toLocaleString('en-US', {...unitSpec.defaultStringOpts, ...stringOpts, ...opts}) + ' ' + unitSpec.long
})

export const miles = unit({
  long: 'miles',
  short: 'mi',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 1}
})

export const meters = unit({
  long: 'meters',
  short: 'm',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 0}
})

export const feet = unit({
  long: 'feet',
  short: 'ft',
  compound: false,
  defaultStringOpts: {useGrouping: true, maximumFractionDigits: 0}
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
