/* eslint-env mocha */
import {formatDistance} from '../src/formatDistance'
import {expect} from 'chai'

describe('formatDistance', function () {
  describe('#formatDistance()', function () {
    it('works in a basic sense', function () {
      expect(formatDistance(100, {metricUnits: true}).value).to.equal(100)
      expect(formatDistance(10000, {metricUnits: true}).value).to.equal(10)
    })
    it('accepts bigUnits param', function () {
      const formatted = formatDistance(100, {metricUnits: true, bigUnits: true})
      expect(formatted.value).to.equal(0.1)
    })
    it('accepts smallUnits param', function () {
      const formatted = formatDistance(15000, {metricUnits: true, smallUnits: true})
      expect(formatted.value).to.equal(15000)
    })
  })
})
