// TODO
import * as C from './constants'
import {convert} from './conversions'
import * as unitTypes from './unitTypes'

export const formatDuration = (seconds, opts) => {
  return unitTypes.hourMinuteSecond(seconds, opts)
}
