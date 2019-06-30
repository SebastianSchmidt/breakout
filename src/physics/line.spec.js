import Line from './line'
import Point from './point'

describe('constructor', () => {
  describe('new Line(start, end)', () => {
    it('creates object with valid start and end points', () => {
      const start = new Point(1, 1)
      const end = new Point(2, 2)
      const line = new Line(start, end)
      expect(line.start).toEqual(start)
      expect(line.end).toEqual(end)
    })

    describe('throws TypeError with invalid start or end points', () => {
      it('without start point', () => {
        expect(() => new Line(undefined, new Point(2, 2))).toThrow(new TypeError(
          'start: x must be a number greater than or equal to zero: undefined (undefined)'))
      })

      it('without end point', () => {
        expect(() => new Line(new Point(1, 1))).toThrow(new TypeError(
          'end: x must be a number greater than or equal to zero: undefined (undefined)'))
      })
    })
  })

  describe('new Line([x1, y1], [x2, y2])', () => {
    it('creates object with valid start and end points', () => {
      const start = [1, 1]
      const end = [2, 2]
      const line = new Line(start, end)
      expect(line.start).toEqual(new Point(start))
      expect(line.end).toEqual(new Point(end))
    })

    describe('throws TypeError with invalid start or end points', () => {
      it('without start point', () => {
        expect(() => new Line(undefined, new Point(2, 2))).toThrow(new TypeError(
          'start: x must be a number greater than or equal to zero: undefined (undefined)'))
      })

      it('without end point', () => {
        expect(() => new Line(new Point(1, 1))).toThrow(new TypeError(
          'end: x must be a number greater than or equal to zero: undefined (undefined)'))
      })
    })
  })
})
