import Point from './point'
import { requirePositiveNumber } from './utils'

export default class Rectangle {
  private _corners: Corners
  private _width: number
  private _height: number

  constructor (topLeft: Point, width: number, height: number) {
    this._corners = new Corners(topLeft, this)
    this._width = requirePositiveNumber(width, 'width')
    this._height = requirePositiveNumber(height, 'height')
  }

  get corners () {
    return this._corners
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = requirePositiveNumber(width, 'width')
  }

  get height () {
    return this._height
  }

  set height (height) {
    this._height = requirePositiveNumber(height, 'height')
  }
}

export class Corners {
  private _topLeft: Point
  private rectangle: Rectangle

  constructor (topLeft: Point, rectangle: Rectangle) {
    this._topLeft = topLeft.clone()
    this.rectangle = rectangle
  }

  get topLeft () : Point {
    return this._topLeft
  }

  get topRight () : Readonly<Point> {
    return corner(
      this.topLeft.x + this.rectangle.width,
      this.topLeft.y
    )
  }

  get bottomLeft () : Readonly<Point> {
    return corner(
      this.topLeft.x,
      this.topLeft.y + this.rectangle.height
    )
  }

  get bottomRight () : Readonly<Point> {
    return corner(
      this.topLeft.x + this.rectangle.width,
      this.topLeft.y + this.rectangle.height
    )
  }
}

function corner (x: number, y: number): Readonly<Point> {
  return Object.freeze(new Point(x, y))
}
