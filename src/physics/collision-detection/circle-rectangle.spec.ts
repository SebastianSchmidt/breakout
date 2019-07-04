import detectCollision, { Type } from './circle-rectangle'
import Rectangle from '../rectangle'
import Point from '../point'
import Circle from '../circle'

const rectangle = new Rectangle(new Point(3, 3), 8, 4)

const collision = (x: number, y: number, radius: number) =>
  detectCollision(new Circle(new Point(x, y), radius), rectangle)

const testCollision = (data: any) =>
  test.each(data)('[%d, %d, %d, %p]', (x, y, radius, expected) =>
    expect(collision(x, y, radius)).toEqual(expected))

const { Top, Bottom, Left, Right, Enclosed } = Type

const collisions = [
  [5, 2, 1, [Top]],
  [7, 4, 1, [Top]],
  [9, 3, 1, [Top]],
  [11, 3, 1, [Top, Right]],
  [12, 5, 2, [Right]],
  [11.2, 5, 0.2, [Right]],
  [8, 8, 2, [Bottom]],
  [5, 7.5, 1, [Bottom]],
  [4, 6, 1, [Bottom, Left]],
  [2, 5, 1, [Left]],
  [3.5, 5, 1.2, [Left]],
  [9, 5, 1, [Enclosed]],
  [7, 5, 5, [Top, Right, Bottom, Left]]
]

const noCollisions = [
  [2, 2, 1, null],
  [6, 1.5, 1, null],
  [12, 2, 1, null],
  [11.5, 5, 0.2, null],
  [14, 5, 2.7, null],
  [12, 9, 2, null],
  [7, 9, 1, null],
  [1, 8, 1.5, null],
  [1, 4, 1, null]
]

describe('collisions', () => testCollision(collisions))
describe('no collisions', () => testCollision(noCollisions))
