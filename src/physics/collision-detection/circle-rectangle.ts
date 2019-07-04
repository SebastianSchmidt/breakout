import Circle from '../circle'
import Rectangle from '../rectangle'
import lineCollision from './circle-line'
import pointCollision from './point-rectangle'

export enum Type {
  Top = 'Top',
  Bottom = 'Bottom',
  Left = 'Left',
  Right = 'Right',
  Enclosed = 'Enclosed'
}

export default function (circle: Circle, rectangle: Rectangle) {
  let collisions: Type[] | null = null

  if (lineCollision(circle, rectangle.edges.top)) {
    collisions = add(Type.Top, collisions)
  }

  if (lineCollision(circle, rectangle.edges.right)) {
    collisions = add(Type.Right, collisions)
  }

  if (lineCollision(circle, rectangle.edges.bottom)) {
    collisions = add(Type.Bottom, collisions)
  }

  if (lineCollision(circle, rectangle.edges.left)) {
    collisions = add(Type.Left, collisions)
  }

  if (!collisions && pointCollision(circle.center, rectangle)) {
    collisions = add(Type.Enclosed, collisions)
  }

  return collisions
}

function add (type: Type, collisions: Type[] | null) {
  if (collisions) {
    collisions.push(type)
    return collisions
  } else {
    return [type]
  }
}
