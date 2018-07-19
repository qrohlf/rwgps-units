/* eslint-env mocha */
import {formatDistance} from '../src/formatDistance'

var assert = require('chai').assert

describe('formatDistance', function () {
  describe('#formatDistance()', function () {
    it('works in a basic sense', function () {
      const formatted = formatDistance(100, {metricUnits: true})
      assert.equal(formatted.value, 100)
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
