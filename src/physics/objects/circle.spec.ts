import Circle from './circle'
import Point from './point'

describe('constructor', () => {
  describe('given valid radius', () => {
    test('creates object with cloned center point', () => {
      const center = new Point(4, 2.5)
      const radius = 1.73

      const circle = new Circle(center, radius)

      expect(circle.center).toEqual(center)
      expect(circle.center).not.toBe(center)
      expect(circle.radius).toBe(radius)
    })
  })

  describe('given invalid radius', () => {
    test('with zero radius throws TypeError', () => {
      const center = new Point(1, 1)
      expect(() => new Circle(center, 0)).toThrow(new TypeError(
        'radius must be a number greater than zero: 0 (number)'))
    })

    test('with negative radius throws TypeError', () => {
      const center = new Point(1, 1)
      expect(() => new Circle(center, -1)).toThrow(new TypeError(
        'radius must be a number greater than zero: -1 (number)'))
    })
  })
})

describe('center', () => {
  test('moves circle to cloned center point', () => {
    const circle = new Circle(new Point(1, 1), 1)
    const newCenter = new Point(2, 2)

    circle.center = newCenter

    expect(circle.center).toEqual(newCenter)
    expect(circle.center).not.toBe(newCenter)
  })
})

describe('radius', () => {
  describe('given valid radius', () => {
    test('resizes circle', () => {
      const circle = new Circle(new Point(1, 1), 1)
      circle.radius = 4.2
      expect(circle.radius).toBe(4.2)
    })
  })

  describe('given invalid radius', () => {
    test('with zero value throws TypeError', () => {
      const circle = new Circle(new Point(1, 1), 1)
      expect(() => { circle.radius = 0 }).toThrow(new TypeError(
        'radius must be a number greater than zero: 0 (number)'))
    })

    test('with negative value throws TypeError', () => {
      const circle = new Circle(new Point(1, 1), 1)
      expect(() => { circle.radius = -1 }).toThrow(new TypeError(
        'radius must be a number greater than zero: -1 (number)'))
    })
  })
})

describe('clone', () => {
  test('creates a new circle', () => {
    const original = new Circle(new Point(1, 1), 2)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
    expect(cloned.center).not.toBe(original.center)
  })
})
