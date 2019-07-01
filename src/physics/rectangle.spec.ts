import Rectangle from './rectangle'
import Point from './point'

describe('constructor(topLeft, width, height)', () => {
  it('creates object with valid parameters', () => {
    const topLeft = new Point(2, 3)
    const width = 10
    const height = 5

    const rectangle = new Rectangle(topLeft, width, height)

    expect(rectangle.topLeft).toEqual(topLeft)
    expect(rectangle.width).toEqual(width)
    expect(rectangle.height).toEqual(height)

    expect(rectangle.topLeft).not.toBe(topLeft)
  })

  it('throws TypeError with zero width', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, 0, 10)).toThrow(new TypeError(
      'width must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative width', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, -1, 10)).toThrow(new TypeError(
      'width must be a number greater than zero: -1 (number)'))
  })

  it('throws TypeError with zero height', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, 10, 0)).toThrow(new TypeError(
      'height must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative height', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, 10, -1)).toThrow(new TypeError(
      'height must be a number greater than zero: -1 (number)'))
  })
})

describe('property width', () => {
  it('positive value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    rectangle.width = 42
    expect(rectangle.width).toBe(42)
  })

  it('throws TypeError with zero value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.width = 0 }).toThrow(new TypeError(
      'width must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.width = -1 }).toThrow(new TypeError(
      'width must be a number greater than zero: -1 (number)'))
  })
})

describe('property height', () => {
  it('positive value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    rectangle.height = 42
    expect(rectangle.height).toBe(42)
  })

  it('throws TypeError with zero value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.height = 0 }).toThrow(new TypeError(
      'height must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.height = -1 }).toThrow(new TypeError(
      'height must be a number greater than zero: -1 (number)'))
  })
})
