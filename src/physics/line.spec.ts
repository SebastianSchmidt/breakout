import Line, { Orientation } from './line'
import Point from './point'

const Horizontal = Orientation.Horizontal
const Vertical = Orientation.Vertical

describe('constructor', () => {
  it('creates object with valid parameters', () => {
    const start = new Point(1, 1)
    const length = 5
    const orientation = Horizontal

    const line = new Line(start, length, orientation)

    expect(line.start).toEqual(start)
    expect(line.start).not.toBe(start)
    expect(line.length).toEqual(length)
    expect(line.orientation).toEqual(orientation)
  })

  it('throws TypeError with zero length', () => {
    const start = new Point(1, 1)
    expect(() => new Line(start, 0, Vertical)).toThrow(new TypeError(
      'length must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative length', () => {
    const start = new Point(1, 1)
    expect(() => new Line(start, -1, Vertical)).toThrow(new TypeError(
      'length must be a number greater than zero: -1 (number)'))
  })
})

describe('property start', () => {
  it('clones new start point', () => {
    const line = new Line(new Point(1, 1), 5, Vertical)
    const start = new Point(0, 0)

    line.start = start

    expect(line.start).toEqual(start)
    expect(line.start).not.toBe(start)
  })
})

describe('property length', () => {
  it('positive value', () => {
    const line = new Line(new Point(1, 1), 5, Horizontal)
    line.length = 10
    expect(line.length).toBe(10)
  })

  it('throws TypeError with zero value', () => {
    const line = new Line(new Point(1, 1), 5, Vertical)
    expect(() => { line.length = 0 }).toThrow(new TypeError(
      'length must be a number greater than zero: 0 (number)'))
  })

  it('throws TypeError with negative value', () => {
    const line = new Line(new Point(1, 1), 5, Vertical)
    expect(() => { line.length = -1 }).toThrow(new TypeError(
      'length must be a number greater than zero: -1 (number)'))
  })
})

describe('property orientation', () => {
  it('sets value', () => {
    const line = new Line(new Point(1, 1), 5, Horizontal)
    line.orientation = Vertical
    expect(line.orientation).toBe(Vertical)
  })
})

describe('clone()', () => {
  it('creates a new line', () => {
    const original = new Line(new Point(1, 1), 2.5, Vertical)
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })
})
