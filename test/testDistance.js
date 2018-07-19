/* eslint-env mocha */
import {formatDistance} from '../src/formatDistance'

var assert = require('chai').assert

describe('formatDistance', function () {
  describe('#formatDistance()', function () {
    it('works in a basic sense', function () {
      assert.equal(formatDistance(100, {metricUnits: true}).value, 100)
      assert.equal(formatDistance(10000, {metricUnits: true}).value, 10)
    })
    it('accepts bigUnits param', function () {
      const formatted = formatDistance(100, {metricUnits: true, bigUnits: true})
      assert.equal(formatted.value, 0.1)
    })
    it('accepts smallUnits param', function () {
      const formatted = formatDistance(15000, {metricUnits: true, smallUnits: true})
      assert.equal(formatted.value, 15000)
    })
  })
})
