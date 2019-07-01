import Point from './point'

describe('constructor', () => {
  it('creates object with valid x- and y-coordinates', () => {
    const point = new Point(5, 3)
    expect(point.x).toBe(5)
    expect(point.y).toBe(3)
  })

  it('throws TypeError with negative x', () => {
    expect(() => new Point(-1, 1)).toThrow(new TypeError(
      'x must be a number greater than or equal to zero: -1 (number)'))
  })

  it('throws TypeError with negative y', () => {
    expect(() => new Point(1, -1)).toThrow(new TypeError(
      'y must be a number greater than or equal to zero: -1 (number)'))
  })
})

describe('property x', () => {
  it('positive value', () => {
    const point = new Point(1, 1)
    point.x = 3.12
    expect(point.x).toBe(3.12)
  })

  it('zero', () => {
    const point = new Point(1, 1)
    point.x = 0
    expect(point.x).toBe(0)
  })

  it('throws TypeError with negative value', () => {
    const point = new Point(1, 1)
    expect(() => { point.x = -1 }).toThrow(new TypeError(
      'x must be a number greater than or equal to zero: -1 (number)'))
  })
})

describe('property y', () => {
  it('zero', () => {
    const point = new Point(1, 1)
    point.y = 0
    expect(point.y).toBe(0)
  })

  it('positive value', () => {
    const point = new Point(1, 1)
    point.y = 3.12
    expect(point.y).toBe(3.12)
  })

  it('throws TypeError with negative value', () => {
    const point = new Point(1, 1)
    expect(() => { point.y = -1 }).toThrow(new TypeError(
      'y must be a number greater than or equal to zero: -1 (number)'))
  })
})

describe('clone()', () => {
  it('creates a new point', () => {
    const original = new Point(2, 1)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })
})
