import Point from './point'

describe('constructor', () => {
  describe('given valid x- and y- coordinates', () => {
    test('creates object', () => {
      const point = new Point(5, 3)
      expect(point.x).toBe(5)
      expect(point.y).toBe(3)
    })
  })

  describe('given invalid x- and y-coordinates', () => {
    test('with negative x throws TypeError', () => {
      expect(() => new Point(-1, 1)).toThrow(new TypeError(
        'x must be a number greater than or equal to zero: -1 (number)'))
    })

    test('with negative y throws TypeError', () => {
      expect(() => new Point(1, -1)).toThrow(new TypeError(
        'y must be a number greater than or equal to zero: -1 (number)'))
    })
  })
})

describe('x', () => {
  describe('given valid x-coordinate', () => {
    test('moves point to new position', () => {
      const point = new Point(5, 3)
      point.x = 2.4
      expect(point.x).toBe(2.4)
    })
  })

  describe('given invalid x-coordinate', () => {
    test('with negative x throws TypeError', () => {
      const point = new Point(1, 1)
      expect(() => { point.x = -1 }).toThrow(new TypeError(
        'x must be a number greater than or equal to zero: -1 (number)'))
    })
  })
})

describe('y', () => {
  describe('given valid y-coordinate', () => {
    test('moves point to new position', () => {
      const point = new Point(5, 3)
      point.y = 7
      expect(point.y).toBe(7)
    })
  })

  describe('given invalid y-coordinate', () => {
    test('with negative y throws TypeError', () => {
      const point = new Point(1, 1)
      expect(() => { point.y = -1 }).toThrow(new TypeError(
        'y must be a number greater than or equal to zero: -1 (number)'))
    })
  })
})

describe('clone', () => {
  test('creates a new point', () => {
    const original = new Point(2, 1)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })
})
