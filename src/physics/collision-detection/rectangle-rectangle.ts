import Rectangle from '../objects/rectangle'

export default function (r1: Rectangle, r2: Rectangle) {
  const c1 = r1.corners
  const c2 = r2.corners
  return c1.topRight.x >= c2.topLeft.x &&
    c1.topLeft.x <= c2.topRight.x &&
    c1.bottomLeft.y >= c2.topLeft.y &&
    c1.topLeft.y <= c2.bottomLeft.y
}
