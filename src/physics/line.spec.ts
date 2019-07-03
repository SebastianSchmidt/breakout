import Line, { Orientation } from './line'
import Point from './point'

const Horizontal = Orientation.Horizontal
const Vertical = Orientation.Vertical

describe('constructor', () => {
  describe('given valid length', () => {
    test('creates object with cloned start point', () => {
      const start = new Point(1, 1)
      const length = 5
      const orientation = Horizontal

      const line = new Line(start, length, orientation)

      expect(line.start).toEqual(start)
      expect(line.start).not.toBe(start)
      expect(line.length).toEqual(length)
      expect(line.orientation).toEqual(orientation)
    })
  })

  describe('given invalid length', () => {
    test('with zero length throws TypeError', () => {
      const start = new Point(1, 1)
      expect(() => new Line(start, 0, Vertical)).toThrow(new TypeError(
        'length must be a number greater than zero: 0 (number)'))
    })

    test('with negative length throws TypeError', () => {
      const start = new Point(1, 1)
      expect(() => new Line(start, -1, Vertical)).toThrow(new TypeError(
        'length must be a number greater than zero: -1 (number)'))
    })
  })
})

describe('start', () => {
  test('moves line to cloned start point', () => {
    const line = new Line(new Point(1, 1), 5, Horizontal)
    const newStart = new Point(2, 3)
    line.start = newStart
    expect(line.start).toEqual(newStart)
    expect(line.start).not.toBe(newStart)
  })
})

describe('length', () => {
  describe('given valid length', () => {
    test('resizes line', () => {
      const line = new Line(new Point(1, 1), 5, Horizontal)
      const newLength = 3
      line.length = newLength
      expect(line.length).toBe(newLength)
    })
  })

  describe('given invalid length', () => {
    const line = new Line(new Point(1, 1), 1, Vertical)

    test('with zero length throws TypeError', () => {
      expect(() => { line.length = 0 }).toThrow(new TypeError(
        'length must be a number greater than zero: 0 (number)'))
    })

    test('with negative length throws TypeError', () => {
      expect(() => { line.length = -1 }).toThrow(new TypeError(
        'length must be a number greater than zero: -1 (number)'))
    })
  })
})

describe('orientation', () => {
  test('rotates line', () => {
    const line = new Line(new Point(1, 1), 5, Horizontal)
    line.orientation = Vertical
    expect(line.orientation).toBe(Vertical)
  })
})

describe('clone', () => {
  test('creates a new line', () => {
    const original = new Line(new Point(1, 1), 2.5, Vertical)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
    expect(cloned.start).not.toBe(original.start)
  })
})
