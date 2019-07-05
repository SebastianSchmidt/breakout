import Circle from '../objects/circle'
import Line, { Orientation } from '../objects/line'

const Horizontal = Orientation.Horizontal
const Vertical = Orientation.Vertical

export default function (circle: Circle | Readonly<Circle>, line: Line | Readonly<Line>) {
  const ac: Vector = [
    circle.center.x - line.start.x,
    circle.center.y - line.start.y
  ]

  const ab: Vector = [
    line.orientation === Horizontal ? line.length : 0,
    line.orientation === Vertical ? line.length : 0
  ]

  const ab2 = dot(ab, ab)
  const acab = dot(ac, ab)
  const t = range(acab / ab2, 0, 1)

  const h: Vector = [
    (ab[0] * t + line.start.x) - circle.center.x,
    (ab[1] * t + line.start.y) - circle.center.y
  ]

  const h2 = dot(h, h)
  return h2 <= circle.radius * circle.radius
}

type Vector = [number, number]

function dot (v1: Vector, v2: Vector) {
  return (v1[0] * v2[0]) + (v1[1] * v2[1])
}

function range (value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}
