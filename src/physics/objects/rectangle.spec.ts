import Line, { Orientation } from './line'
import Point from './point'
import Rectangle from './rectangle'

const Horizontal = Orientation.Horizontal
const Vertical = Orientation.Vertical

describe('constructor', () => {
  describe('given valid width and height', () => {
    describe('creates object', () => {
      const topLeft = new Point(2, 3)
      const width = 10
      const height = 5
      const rectangle = new Rectangle(topLeft, width, height)
      const { bottomLeft, topRight } = rectangle.corners

      test('width and height', () => {
        expect(rectangle.width).toEqual(width)
        expect(rectangle.height).toEqual(height)
      })

      test('corners', () => {
        expect(rectangle.corners.topLeft).not.toBe(topLeft)
        expect(rectangle.corners.topLeft).toEqual(topLeft)
        expect(rectangle.corners.topRight).toEqual(new Point(12, 3))
        expect(rectangle.corners.bottomLeft).toEqual(new Point(2, 8))
        expect(rectangle.corners.bottomRight).toEqual(new Point(12, 8))
      })

      test('edges', () => {
        expect(rectangle.edges.top).toEqual(new Line(topLeft, width, Horizontal))
        expect(rectangle.edges.bottom).toEqual(new Line(bottomLeft, width, Horizontal))
        expect(rectangle.edges.left).toEqual(new Line(topLeft, height, Vertical))
        expect(rectangle.edges.right).toEqual(new Line(topRight, height, Vertical))
      })
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
    describe('moves rectangle', () => {
      const rectangle = new Rectangle(new Point(2, 3), 10, 5)
      rectangle.moveTo(7, 5)
      const { width, height } = rectangle
      const { topLeft, topRight, bottomLeft } = rectangle.corners

      test('corners', () => {
        expect(rectangle.corners.topLeft).toEqual(new Point(7, 5))
        expect(rectangle.corners.topRight).toEqual(new Point(17, 5))
        expect(rectangle.corners.bottomLeft).toEqual(new Point(7, 10))
        expect(rectangle.corners.bottomRight).toEqual(new Point(17, 10))
      })

      test('edges', () => {
        expect(rectangle.edges.top).toEqual(new Line(topLeft, width, Horizontal))
        expect(rectangle.edges.bottom).toEqual(new Line(bottomLeft, width, Horizontal))
        expect(rectangle.edges.left).toEqual(new Line(topLeft, height, Vertical))
        expect(rectangle.edges.right).toEqual(new Line(topRight, height, Vertical))
      })
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

      expect(rectangle.corners.topLeft).toEqual(new Point(2, 3))
      expect(rectangle.corners.topRight).toEqual(new Point(6, 3))
      expect(rectangle.corners.bottomLeft).toEqual(new Point(2, 10))
      expect(rectangle.corners.bottomRight).toEqual(new Point(6, 10))
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
