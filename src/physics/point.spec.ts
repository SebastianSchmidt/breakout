import Point from './point'

describe('constructor', () => {
  describe('new Point(x, y)', () => {
    it('creates object with valid x- and y-coordinates', () => {
      const point = new Point(5, 3)
      expect(point.x).toBe(5)
      expect(point.y).toBe(3)
    })

    describe('throws TypeError with invalid x- or y-coordinates', () => {
      it('negative x', () => {
        expect(() => new Point(-1, 1)).toThrow(new TypeError(
          'x must be a number greater than or equal to zero: -1 (number)'))
      })

      it('negative y', () => {
        expect(() => new Point(1, -1)).toThrow(new TypeError(
          'y must be a number greater than or equal to zero: -1 (number)'))
      })
    })
  })
})
