/* eslint-env mocha */
import {formatDistance} from '../src/formatDistance'
import {expect} from 'chai'

describe('formatDistance', function () {
  describe('#formatDistance()', function () {
    it('works in a basic sense', function () {
      expect(formatDistance(100, {metricUnits: true})).to.include({value: 100, long: 'meters'})
      expect(formatDistance(10000, {metricUnits: true})).to.include({value: 10, long: 'kilometers'})
    })
    it('accepts bigUnits param', function () {
      const formatted = formatDistance(100, {metricUnits: true, bigUnits: true})
      expect(formatted).to.include({value: 0.1, long: 'kilometers'})
    })
    it('accepts smallUnits param', function () {
      const formatted = formatDistance(15000, {metricUnits: true, smallUnits: true})
      expect(formatted).to.include({value: 15000, long: 'meters'})
    })
  })
})
