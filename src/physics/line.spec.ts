import Line from './line'
import Point from './point'

describe('constructor', () => {
  describe('new Line(start, end)', () => {
    it('creates object with valid start and end points', () => {
      const start = new Point(1, 1)
      const end = new Point(2, 2)
      const line = new Line(start, end)
      expect(line.start).toEqual(start)
      expect(line.end).toEqual(end)
    })
  })
})
