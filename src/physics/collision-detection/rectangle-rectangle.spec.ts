import Point from '../objects/point'
import Rectangle from '../objects/rectangle'
import detectCollision from './rectangle-rectangle'

const rectangle = new Rectangle(new Point(4, 4), 7, 2)

const collision = (x: number, y: number, width: number, height: number) =>
  detectCollision(rectangle, new Rectangle(new Point(x, y), width, height))

const testCollision = (data: number[][], expected: boolean) =>
  test.each(data)('[%d, %d, %d, %d]', (x, y, width, height) =>
    expect(collision(x, y, width, height)).toBe(expected))

const collisions = [
  [7, 2, 2, 2], // top edge
  [6, 6, 2, 1], // bottom edge
  [3, 4.5, 2, 1], // left edge
  [11, 4.5, 2, 1], // right edge

  [3, 2, 2, 2], // top left corner
  [11, 2, 2, 2], // top right corner
  [3, 6, 2, 2], // bottom left corner
  [11, 6, 2, 2], // bottom right corner

  [5, 2, 3, 3], // overlapping from above
  [3, 5, 2, 2], // overlapping from below & left
  [10.5, 2, 2.5, 6], // overlapping from right

  [2, 1, 12, 8], // surrounding
  [8.5, 4.5, 2, 1] // enclosed
]

const noCollisions = [
  [1, 1, 2, 3], // above & left
  [5, 1, 5, 2], // above
  [12, 1, 3, 5], // above & right
  [0, 6, 3, 3], // below & left
  [4, 7, 4, 3], // below
  [9, 7, 7, 2] // below & right
]

describe('collisions', () => testCollision(collisions, true))
describe('no collisions', () => testCollision(noCollisions, false))
