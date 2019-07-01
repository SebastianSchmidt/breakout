import detectCollision from './point-rectangle'
import Rectangle from '../rectangle'
import Point from '../point'

const rectangle = new Rectangle(new Point(2, 3), 4, 2)

const collision = (name: string, x: number, y: number) =>
  it(name, () => expect(detectCollision(new Point(x, y), rectangle)).toBe(true))

const noCollision = (name: string, x: number, y: number) =>
  it(name, () => expect(detectCollision(new Point(x, y), rectangle)).toBe(false))

describe('collisions', () => {
  collision('top edge', 4, 3)
  collision('bottom edge', 4, 5)
  collision('left edge', 2, 4)
  collision('right edge', 6, 4)

  collision('top left corner', 2, 3)
  collision('top right corner', 6, 3)
  collision('bottom left corner', 2, 5)
  collision('bottom right corner', 6, 5)

  collision('center', 4, 4)
})

describe('no collisions', () => {
  noCollision('above', 4, 2)
  noCollision('below', 4, 6)
  noCollision('left', 1, 4)
  noCollision('right', 7, 4)

  noCollision('above & left', 1, 2)
  noCollision('above & right', 7, 2)
  noCollision('below & left', 1, 6)
  noCollision('below & right', 7, 6)
})
