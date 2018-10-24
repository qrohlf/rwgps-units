// usage: npx nodemon scratch.js

require('babel-core/register')
const {formatDuration} = require('./src')

const example = (ex) => {
  console.log(`$ ${ex}`)
  console.log(`=> ${eval(ex)}`)
  console.log()
}

example('formatDuration(60).toString({short: true})')

example('formatDuration(60)')

example('formatDuration(60).valueToString()')

example('formatDuration(60).short')

example('formatDuration(60).long')

example('formatDuration(87, {includeSeconds: true})')

example('formatDuration(87, {includeSeconds: true}).toString({short: true})')

example('formatDuration(87, {includeSeconds: true}).short')
example('formatDuration(87, {includeSeconds: true}).long')

