import Circle from '../objects/circle'
import Line, { Orientation } from '../objects/line'
import Point from '../objects/point'
import detectCollision from './circle-line'

const collision = (x: number, y: number, radius: number, line: Line) =>
  detectCollision(new Circle(new Point(x, y), radius), line)

const testCollision = (line: Line, data: number[][], expected: boolean) =>
  test.each(data)('[%d, %d, %d]', (x, y, radius) =>
    expect(collision(x, y, radius, line)).toBe(expected))

describe('horizontal line', () => {
  const line = new Line(new Point(4, 4), 10, Orientation.Horizontal)

  const collisions = [
    [3, 4, 1], // left
    [6, 3, 1.5], // top
    [9, 5, 1], // bottom
    [12, 4, 1], // center
    [14.5, 3.5, 1] // right
  ]

  const noCollisions = [
    [3, 3, 1], // above left
    [10, 2, 1], // above
    [6, 7, 2], // below
    [16, 4, 1] // right
  ]

  describe('collisions', () => testCollision(line, collisions, true))
  describe('no collisions', () => testCollision(line, noCollisions, false))
})

describe('vertical line', () => {
  const line = new Line(new Point(4, 4), 10, Orientation.Vertical)

  const collisions = [
    [4, 3, 1], // top
    [2.5, 6, 2], // left
    [5, 9, 1], // right
    [4, 11, 1], // center
    [4.5, 14.5, 1] // bottom
  ]

  const noCollisions = [
    [5, 3, 1], // above right
    [2, 9, 1.9], // left
    [8, 10, 2], // right
    [4, 16, 1] // below
  ]

  describe('collisions', () => testCollision(line, collisions, true))
  describe('no collisions', () => testCollision(line, noCollisions, false))
})
