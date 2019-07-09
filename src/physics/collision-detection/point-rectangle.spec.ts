import Point from '../objects/point'
import Rectangle from '../objects/rectangle'
import detectCollision from './point-rectangle'

const rectangle = new Rectangle(new Point(2, 3), 4, 2)

const collision = (x: number, y: number) =>
  detectCollision(new Point(x, y), rectangle)

const testCollision = (data: number[][], expected: boolean) =>
  test.each(data)('[%d, %d]', (x, y) =>
    expect(collision(x, y)).toBe(expected))

const collisions = [
  [4, 3], // top edge
  [4, 5], // bottom edge
  [2, 4], // left edge
  [6, 4], // right edge

  [2, 3], // top left corner
  [6, 3], // top right corner
  [2, 5], // bottom left corner
  [6, 5], // bottom right corner

  [4, 4] // center
]

const noCollisions = [
  [4, 2], // above
  [4, 6], // below
  [1, 4], // left
  [7, 4], // right

  [1, 2], // above & left
  [7, 2], // above & right
  [1, 6], // below & left
  [7, 6] // below & right
]

describe('collisions', () => testCollision(collisions, true))
describe('no collisions', () => testCollision(noCollisions, false))
