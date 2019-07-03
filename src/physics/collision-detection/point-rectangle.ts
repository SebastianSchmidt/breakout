import Point from '../point'
import Rectangle from '../rectangle'

export default function (point: Point | Readonly<Point>, rectangle: Rectangle | Readonly<Rectangle>) {
  const minX = rectangle.corners.topLeft.x
  const maxX = minX + rectangle.width
  const minY = rectangle.corners.topLeft.y
  const maxY = minY + rectangle.height

  const x = point.x
  const y = point.y

  return x >= minX &&
    x <= maxX &&
    y >= minY &&
    y <= maxY
}
