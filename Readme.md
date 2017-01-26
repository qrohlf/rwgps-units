# rwgps-units

Library for converting and formatting rwgps units.

## Currently supported unit types:

**distance**
- meters
- km
- feet
- miles

**incline**
- %
- degrees

**speed**
- mph
- kph


## Example Usage:

**Conversion:**

```js
import {convert} from '@rwgps/units'

convert(3.5).from('miles').to('km') // 5.632689999999999
convert(19).from('grade').to('degrees') // 10.757967088390005
```

alternatively, you can use the static function converters

```js
import {conversions as C} from '@rwgps/units'
C.milesToKm(3.5) // 5.632689999999999
C.gradeToDegrees(10) // 10.757967088390005
```

**Formatting:**

All formatters expect native rwgps units. That means meters for distances, kph for speeds, and percentages for grades. They return unitType objects, which allow for flexible presentation of the result.

All formatters accept two arguments, `value` and `options`. `value` should be the metric quanitity that you would like to format in rwgps native units. `options` is an object that can contain the following configuration parameters:

- `metricUnits` (boolean) - Set this to `true` to output metric unitTypes. Defaults to `false`.
- `unit` (string) - Explicitly request a specific unitType as output. Will override `metricUnits` if set.
- `...rest` - Other keys are passed through to the unitType constructor, and can be used to override the toLocaleString options used to format numeric labels. See the unitTypes documentation for more info about what you can pass here.

`formatDistance` will automatically select between output in feet/meters or miles/km based on the length of the distance passed to it. You can override this behavior by requesting your desired units explicitly.

```js
import {formatDistance} from '@rwpgs/units'

// 500m formatted in imperial units
const i = formatDistance(500)
i.value // 1640.4199475065616
i.long // "feet"
i.short // "ft"
i.compound // false
i.toString() // "1,640 feet"
i.toString({short: true}) // "1,640 ft"
i.valueToString() // "1,640"
// for more info about what arguments the toString and valueToString props accept
// see the documentation on unitTypes below

// 50km formatted in imperial units
formatDistance(50 * 1000).toString() // "31.1 miles"
// you can also request specific output units
formatDistance(50 * 1000, {units: 'feet'}).toString() // "164,042 feet"

// requesting metric units
formatDistance(50 * 1000, {metricUnits: true}).toString() // "50 kilometers"
formatDistance(500, {metricUnits: true}).toString() // "500 meters"
```

```js
import {formatSpeed} from '@rwpgs/units'

formatSpeed(12).toString() // "7.5 miles per hour"
formatSpeed(12).toString({maximumFractionDigits: 3, short: true}) // "7.456 mph"
formatSpeed(12, {metricUnits: true}).toString() // "12 km per hour"
```

```js
import {formatGrade} from '@rwgps/units'

// Newberry
formatGrade(12.2).toString() // 12.2 percent
formatGrade(12.2).toString({short: true}) // 12.2%
formatGrade(12.2, {units: 'degrees'}).toString() // 7.0 degrees
```

# unitTypes

`unitType` objects are used to provide rich formatting of returned units for display. They have the following properties:

- `value` - the numeric quantity being formatted
- `long` - the long unit type label (ex. `"meters"` or `"percent"`)
- `short` - the short unit type label (ex. `"m"` or `"%"`)
- `compound` - `false` if the unit is not a compound unit type, otherwise a `{numerator, denominator}` object of the component units
- `valueToString(opts)` - returns the value, formatted as a string. `opts` is an options object that is passed through to `Number.toLocaleString`.
- `toString({short = false, ...opts})` - returns the value and unit type label, formatted as a string. `short` is a boolean parameter, default `false`, which determines whether to render with a short or long unit label. `opts` are passed through to `Number.toLocaleString`.
