import Rectangle from './rectangle'
import Point from './point'

describe('constructor', () => {
  test('creates object with valid parameters', () => {
    const topLeft = new Point(2, 3)
    const width = 10
    const height = 5

    const rectangle = new Rectangle(topLeft, width, height)

    expect(rectangle.corners.topLeft).toEqual(topLeft)
    expect(rectangle.corners.topLeft).not.toBe(topLeft)
    expect(rectangle.width).toEqual(width)
    expect(rectangle.height).toEqual(height)
  })

  test('throws TypeError with zero width', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, 0, 10)).toThrow(new TypeError(
      'width must be a number greater than zero: 0 (number)'))
  })

  test('throws TypeError with negative width', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, -1, 10)).toThrow(new TypeError(
      'width must be a number greater than zero: -1 (number)'))
  })

  test('throws TypeError with zero height', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, 10, 0)).toThrow(new TypeError(
      'height must be a number greater than zero: 0 (number)'))
  })

  test('throws TypeError with negative height', () => {
    const topLeft = new Point(2, 3)
    expect(() => new Rectangle(topLeft, 10, -1)).toThrow(new TypeError(
      'height must be a number greater than zero: -1 (number)'))
  })
})

describe('property width', () => {
  test('positive value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    rectangle.width = 42
    expect(rectangle.width).toBe(42)
  })

  test('throws TypeError with zero value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.width = 0 }).toThrow(new TypeError(
      'width must be a number greater than zero: 0 (number)'))
  })

  test('throws TypeError with negative value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.width = -1 }).toThrow(new TypeError(
      'width must be a number greater than zero: -1 (number)'))
  })
})

describe('property height', () => {
  test('positive value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    rectangle.height = 42
    expect(rectangle.height).toBe(42)
  })

  test('throws TypeError with zero value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.height = 0 }).toThrow(new TypeError(
      'height must be a number greater than zero: 0 (number)'))
  })

  test('throws TypeError with negative value', () => {
    const rectangle = new Rectangle(new Point(0, 0), 1, 1)
    expect(() => { rectangle.height = -1 }).toThrow(new TypeError(
      'height must be a number greater than zero: -1 (number)'))
  })
})

describe('property corners', () => {
  const rectangle = new Rectangle(new Point(1, 2), 3, 4)
  const topLeft = rectangle.corners.topLeft.clone()
  const { topRight, bottomLeft, bottomRight } = rectangle.corners

  test('top left', () => {
    expect(topLeft).toEqual(new Point(1, 2))
  })

  test('top Right', () => {
    expect(topRight).toEqual(new Point(4, 2))
  })

  test('bottom left', () => {
    expect(bottomLeft).toEqual(new Point(1, 6))
  })

  test('bottom right', () => {
    expect(bottomRight).toEqual(new Point(4, 6))
  })

  describe('changes when rectangle position changes', () => {
    rectangle.corners.topLeft.x = 5
    rectangle.corners.topLeft.y = 3

    const topLeft = rectangle.corners.topLeft.clone()
    const { topRight, bottomLeft, bottomRight } = rectangle.corners

    test('top left', () => {
      expect(topLeft).toEqual(new Point(5, 3))
    })

    test('top Right', () => {
      expect(topRight).toEqual(new Point(8, 3))
    })

    test('bottom left', () => {
      expect(bottomLeft).toEqual(new Point(5, 7))
    })

    test('bottom right', () => {
      expect(bottomRight).toEqual(new Point(8, 7))
    })
  })
})
