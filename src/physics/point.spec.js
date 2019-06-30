import Point, { toPoint } from './point'

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

      it('string x', () => {
        expect(() => new Point('1', 1)).toThrow(new TypeError(
          'x must be a number greater than or equal to zero: 1 (string)'))
      })

      it('string y', () => {
        expect(() => new Point(1, '1')).toThrow(new TypeError(
          'y must be a number greater than or equal to zero: 1 (string)'))
      })

      it('without x', () => {
        expect(() => new Point(undefined, 1)).toThrow(new TypeError(
          'x must be a number greater than or equal to zero: undefined (undefined)'))
      })

      it('without y', () => {
        expect(() => new Point(1)).toThrow(new TypeError(
          'y must be a number greater than or equal to zero: undefined (undefined)'))
      })
    })
  })

  describe('new Point([x, y])', () => {
    it('creates object with valid x- and y-coordinates', () => {
      const point = new Point([2.174, 5.1])
      expect(point.x).toBe(2.174)
      expect(point.y).toBe(5.1)
    })

    describe('throws TypeError with invalid x- or y-coordinates', () => {
      it('negative x', () => {
        expect(() => new Point([-1, 1])).toThrow(new TypeError(
          'x must be a number greater than or equal to zero: -1 (number)'))
      })

      it('negative y', () => {
        expect(() => new Point([1, -1])).toThrow(new TypeError(
          'y must be a number greater than or equal to zero: -1 (number)'))
      })

      it('string x', () => {
        expect(() => new Point(['1', 1])).toThrow(new TypeError(
          'x must be a number greater than or equal to zero: 1 (string)'))
      })

      it('string y', () => {
        expect(() => new Point([1, '1'])).toThrow(new TypeError(
          'y must be a number greater than or equal to zero: 1 (string)'))
      })

      it('without x', () => {
        expect(() => new Point([undefined, 1])).toThrow(new TypeError(
          'x must be a number greater than or equal to zero: undefined (undefined)'))
      })

      it('without y', () => {
        expect(() => new Point([1])).toThrow(new TypeError(
          'y must be a number greater than or equal to zero: undefined (undefined)'))
      })
    })
  })
})

describe('toPoint', () => {
  it('creates object form point', () => {
    const input = new Point(20, 17.5)
    const output = toPoint(input)
    expect(output).not.toBe(input)
    expect(output).toEqual(input)
  })

  it('creates object from arguments', () => {
    expect(toPoint(123.456, 85)).toEqual(new Point(123.456, 85))
  })

  it('creates object from array', () => {
    expect(toPoint([42, 24])).toEqual(new Point(42, 24))
  })
})
