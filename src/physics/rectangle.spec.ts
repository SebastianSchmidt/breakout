import Rectangle from './rectangle'
import Point from './point'

describe('constructor', () => {
  describe('given valid width and height', () => {
    test('creates object', () => {
      const topLeft = new Point(2, 3)
      const width = 10
      const height = 5

      const rectangle = new Rectangle(topLeft, width, height)

      expect(rectangle.width).toEqual(width)
      expect(rectangle.height).toEqual(height)

      expect(rectangle.corners.topLeft).toEqual(topLeft)
      expect(rectangle.corners.topLeft).not.toBe(topLeft)

      expect(rectangle.corners.topRight.x).toBe(12)
      expect(rectangle.corners.topRight.y).toBe(3)

      expect(rectangle.corners.bottomLeft.x).toBe(2)
      expect(rectangle.corners.bottomLeft.y).toBe(8)

      expect(rectangle.corners.bottomRight.x).toBe(12)
      expect(rectangle.corners.bottomRight.y).toBe(8)
    })
  })

  describe('given invalid width', () => {
    test('with zero width throws TypeError', () => {
      const topLeft = new Point(2, 3)
      expect(() => new Rectangle(topLeft, 0, 10)).toThrow(new TypeError(
        'width must be a number greater than zero: 0 (number)'))
    })

    test('with negative width throws TypeError', () => {
      const topLeft = new Point(2, 3)
      expect(() => new Rectangle(topLeft, -1, 10)).toThrow(new TypeError(
        'width must be a number greater than zero: -1 (number)'))
    })
  })

  describe('given invalid height', () => {
    test('with zero height throws TypeError', () => {
      const topLeft = new Point(2, 3)
      expect(() => new Rectangle(topLeft, 10, 0)).toThrow(new TypeError(
        'height must be a number greater than zero: 0 (number)'))
    })

    test('with negative height throws TypeError', () => {
      const topLeft = new Point(2, 3)
      expect(() => new Rectangle(topLeft, 10, -1)).toThrow(new TypeError(
        'height must be a number greater than zero: -1 (number)'))
    })
  })
})

describe('moveTo', () => {
  describe('given valid x- and y-coordinates', () => {
    test('moves rectangle', () => {
      const rectangle = new Rectangle(new Point(2, 3), 10, 5)

      rectangle.moveTo(7, 5)

      expect(rectangle.corners.topLeft.x).toBe(7)
      expect(rectangle.corners.topLeft.y).toBe(5)

      expect(rectangle.corners.topRight.x).toBe(17)
      expect(rectangle.corners.topRight.y).toBe(5)

      expect(rectangle.corners.bottomLeft.x).toBe(7)
      expect(rectangle.corners.bottomLeft.y).toBe(10)

      expect(rectangle.corners.bottomRight.x).toBe(17)
      expect(rectangle.corners.bottomRight.y).toBe(10)
    })
  })

  describe('given invalid x-coordinate', () => {
    test('with negative x throws TypeError', () => {
      const rectangle = new Rectangle(new Point(2, 3), 10, 5)
      expect(() => rectangle.moveTo(-1, 5)).toThrow(new TypeError(
        'x must be a number greater than or equal to zero: -1 (number)'))
    })
  })

  describe('given invalid y-coordinate', () => {
    test('with negative y throws TypeError', () => {
      const rectangle = new Rectangle(new Point(2, 3), 10, 5)
      expect(() => rectangle.moveTo(5, -1)).toThrow(new TypeError(
        'y must be a number greater than or equal to zero: -1 (number)'))
    })
  })
})

describe('resize', () => {
  describe('given valid width and height', () => {
    test('resizes rectangle', () => {
      const rectangle = new Rectangle(new Point(2, 3), 10, 5)

      rectangle.resize(4, 7)

      expect(rectangle.corners.topLeft.x).toBe(2)
      expect(rectangle.corners.topLeft.y).toBe(3)

      expect(rectangle.corners.topRight.x).toBe(6)
      expect(rectangle.corners.topRight.y).toBe(3)

      expect(rectangle.corners.bottomLeft.x).toBe(2)
      expect(rectangle.corners.bottomLeft.y).toBe(10)

      expect(rectangle.corners.bottomRight.x).toBe(6)
      expect(rectangle.corners.bottomRight.y).toBe(10)
    })
  })

  describe('given invalid width', () => {
    test('with zero width throws TypeError', () => {
      const rectangle = new Rectangle(new Point(1, 2), 3, 4)
      expect(() => rectangle.resize(0, 5)).toThrow(new TypeError(
        'width must be a number greater than zero: 0 (number)'))
    })

    test('with negative width throws TypeError', () => {
      const rectangle = new Rectangle(new Point(1, 2), 3, 4)
      expect(() => rectangle.resize(-1, 5)).toThrow(new TypeError(
        'width must be a number greater than zero: -1 (number)'))
    })
  })

  describe('given invalid height', () => {
    test('with zero height throws TypeError', () => {
      const rectangle = new Rectangle(new Point(1, 2), 3, 4)
      expect(() => rectangle.resize(5, 0)).toThrow(new TypeError(
        'height must be a number greater than zero: 0 (number)'))
    })

    test('with negative height throws TypeError', () => {
      const rectangle = new Rectangle(new Point(1, 2), 3, 4)
      expect(() => rectangle.resize(5, -1)).toThrow(new TypeError(
        'height must be a number greater than zero: -1 (number)'))
    })
  })
})

describe('clone', () => {
  test('creates a new rectangle', () => {
    const original = new Rectangle(new Point(1, 2), 3, 4)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
    expect(cloned.corners).not.toBe(original.corners)
    expect(cloned.corners.topLeft).not.toBe(original.corners.topLeft)
  })
})
