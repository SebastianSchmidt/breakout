import Line from './line'
import Point from './point'

describe('constructor(start, end)', () => {
  it('creates object with valid start and end points', () => {
    const start = new Point(1, 1)
    const end = new Point(2, 2)

    const line = new Line(start, end)

    expect(line.start).toEqual(start)
    expect(line.end).toEqual(end)

    expect(line.start).not.toBe(start)
    expect(line.end).not.toBe(end)
  })
})

describe('property start', () => {
  it('clones new start point', () => {
    const line = new Line(new Point(1, 1), new Point(2, 2))
    const start = new Point(0, 0)

    line.start = start

    expect(line.start).toEqual(start)
    expect(line.start).not.toBe(start)
  })
})

describe('property end', () => {
  it('clones new end point', () => {
    const line = new Line(new Point(1, 1), new Point(2, 2))
    const end = new Point(3, 2)

    line.end = end

    expect(line.end).toEqual(end)
    expect(line.end).not.toBe(end)
  })
})

describe('clone()', () => {
  it('creates a new line', () => {
    const original = new Line(new Point(1, 1), new Point(2, 2))
    const cloned = original.clone()
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })
})
