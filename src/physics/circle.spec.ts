import Circle from './circle'
import Point from './point'

describe('constructor', () => {
  it('creates object with valid center and radius', () => {
    const center = new Point(4, 2.5)
    const radius = 1.73

    const circle = new Circle(center, radius)

    expect(circle.center).toEqual(center)
    expect(circle.radius).toBe(radius)

    expect(circle.center).not.toBe(center)
  })

  it('throws TypeError with zero radius', () => {
    const center = new Point(1, 1)
    expect(() => new Circle(center, 0)).toThrow(new TypeError(
      'radius must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative radius', () => {
    const center = new Point(1, 1)
    expect(() => new Circle(center, -1)).toThrow(new TypeError(
      'radius must be a number greater than zero: -1 (number)'))
  })
})

describe('property center', () => {
  it('clones new center point', () => {
    const circle = new Circle(new Point(1, 1), 1)
    const center = new Point(2, 2)

    circle.center = center

    expect(circle.center).toEqual(center)
    expect(circle.center).not.toBe(center)
  })
})

describe('property radius', () => {
  it('positive value', () => {
    const circle = new Circle(new Point(1, 1), 1)
    circle.radius = 4.2
    expect(circle.radius).toBe(4.2)
  })

  it('throws TypeError with zero value', () => {
    const circle = new Circle(new Point(1, 1), 1)
    expect(() => { circle.radius = 0 }).toThrow(new TypeError(
      'radius must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative value', () => {
    const circle = new Circle(new Point(1, 1), 1)
    expect(() => { circle.radius = -1 }).toThrow(new TypeError(
      'radius must be a number greater than zero: -1 (number)'))
  })
})

describe('clone()', () => {
  it('creates a new circle', () => {
    const original = new Circle(new Point(1, 1), 2)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })
})
