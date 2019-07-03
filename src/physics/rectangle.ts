import Point from './point'
import { requirePositiveNumber } from './utils'

export default class Rectangle {
  private _topLeft: Point
  private _width: number = 0
  private _height: number = 0
  private _corners: Corners

  constructor (topLeft: Point, width: number, height: number) {
    this._topLeft = topLeft.clone()
    this._width = requirePositiveNumber(width, 'width')
    this._height = requirePositiveNumber(height, 'height')
    this._corners = new Corners(this, this._topLeft)
  }

  get width () {
    return this._width
  }

  get height () {
    return this._height
  }

  get corners () {
    return this._corners
  }

  moveTo (x: number, y: number) {
    this._topLeft.x = x
    this._topLeft.y = y
    this._corners.update()
  }

  resize (width: number, height: number) {
    this._width = requirePositiveNumber(width, 'width')
    this._height = requirePositiveNumber(height, 'height')
    this._corners.update()
  }

  clone () {
    return new Rectangle(this._topLeft, this._width, this._height)
  }
}

export class Corners {
  private _rectangle: Rectangle
  private _topLeft: Point
  private _topRight: Point
  private _bottomLeft: Point
  private _bottomRight: Point

  constructor (rectangle: Rectangle, topLeft: Point) {
    this._rectangle = rectangle
    this._topLeft = topLeft

    this._topRight = new Point(
      topLeft.x + rectangle.width,
      topLeft.y
    )

    this._bottomLeft = new Point(
      topLeft.x,
      topLeft.y + rectangle.height
    )

    this._bottomRight = new Point(
      topLeft.x + rectangle.width,
      topLeft.y + rectangle.height
    )
  }

  update () {
    this._topRight.x = this._topLeft.x + this._rectangle.width
    this._topRight.y = this._topLeft.y

    this._bottomLeft.x = this._topLeft.x
    this._bottomLeft.y = this._topLeft.y + this._rectangle.height

    this._bottomRight.x = this._topLeft.x + this._rectangle.width
    this._bottomRight.y = this._topLeft.y + this._rectangle.height
  }

  get topLeft () : Readonly<Point> {
    return this._topLeft
  }

  get topRight () : Readonly<Point> {
    return this._topRight
  }

  get bottomLeft () : Readonly<Point> {
    return this._bottomLeft
  }

  get bottomRight () : Readonly<Point> {
    return this._bottomRight
  }
}
