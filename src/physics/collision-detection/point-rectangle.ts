import Point from '../point'
import Rectangle from '../rectangle'

export default function (point: Point, rectangle: Rectangle) {
  const minX = rectangle.topLeft.x
  const maxX = minX + rectangle.width
  const minY = rectangle.topLeft.y
  const maxY = minY + rectangle.height

  const x = point.x
  const y = point.y

  return x >= minX &&
    x <= maxX &&
    y >= minY &&
    y <= maxY
}
