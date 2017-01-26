exposes methods for both the manipulation and formatting of rwgps units, mostly
distances and elevations

samples:

```
import {formatDistance, unitTypes} from 'rwgps-units'
// 100km to miles
formatDistance(100000)
// => {value: '62.1', units: {long: 'miles', short: 'mi'}, toString: () => '62.1 miles'}

// 0.5km to meters
formatDistance(5000, {metricUnits: true, units: 'meters'})
// => {value: '5,000', units: {long: 'meters', short: 'm'}, toString: () => '5,000 meters'}

// 0.5km to meters without seperator (parameters not consumed by formatDistance are passed through to toLocaleString)
formatDistance(5000, {metricUnits: true, units: 'meters', useGrouping: false})
// => {value: '5000', units: {long: 'meters', short: 'm'}, toString: () => '5000 meters'}
