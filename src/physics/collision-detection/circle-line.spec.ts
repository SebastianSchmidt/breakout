import detectCollision from './circle-line'
import Circle from '../circle'
import Line, { Orientation } from '../line'
import Point from '../point'

const detect = (line: Line, x: number, y: number, radius: number) =>
  detectCollision(new Circle(new Point(x, y), radius), line)

const expectCollision = (line: Line) =>
  (name: string, x: number, y: number, radius: number) =>
    it(name, () => expect(detect(line, x, y, radius)).toBe(true))

const expectNoCollision = (line: Line) =>
  (name: string, x: number, y: number, radius: number) =>
    it(name, () => expect(detect(line, x, y, radius)).toBe(false))

describe('horizontal line', () => {
  const line = new Line(new Point(4, 4), 10, Orientation.Horizontal)
  const collision = expectCollision(line)
  const noCollision = expectNoCollision(line)

  describe('collisions', () => {
    collision('left', 3, 4, 1)
    collision('top', 6, 3, 1.5)
    collision('bottom', 9, 5, 1)
    collision('center', 12, 4, 1)
    collision('right', 14.5, 3.5, 1)
  })

  describe('no collisions', () => {
    noCollision('above left', 3, 3, 1)
    noCollision('above', 10, 2, 1)
    noCollision('below', 6, 7, 2)
    noCollision('right', 16, 4, 1)
  })
})

describe('vertical line', () => {
  const line = new Line(new Point(4, 4), 10, Orientation.Vertical)
  const collision = expectCollision(line)
  const noCollision = expectNoCollision(line)

  describe('collisions', () => {
    collision('top', 4, 3, 1)
    collision('left', 2.5, 6, 2)
    collision('right', 5, 9, 1)
    collision('center', 4, 11, 1)
    collision('bottom', 4.5, 14.5, 1)
  })

  describe('no collisions', () => {
    noCollision('above right', 5, 3, 1)
    noCollision('left', 2, 9, 1.9)
    noCollision('right', 8, 10, 2)
    noCollision('below', 4, 16, 1)
  })
})
