import Point from './point'
import Line, { Orientation } from './line'
import { requirePositiveNumber } from './utils'

const Horizontal = Orientation.Horizontal
const Vertical = Orientation.Vertical

export default class Rectangle {
  private _topLeft: Point
  private _width: number = 0
  private _height: number = 0
  private _corners: Corners
  private _edges: Edges

  constructor (topLeft: Point | Readonly<Point>, width: number, height: number) {
    this._topLeft = topLeft.clone()
    this._width = requirePositiveNumber(width, 'width')
    this._height = requirePositiveNumber(height, 'height')
    this._corners = new Corners(this, this._topLeft)
    this._edges = new Edges(this)
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

  get edges () {
    return this._edges
  }

  moveTo (x: number, y: number) {
    this._topLeft.x = x
    this._topLeft.y = y
    this._corners.update()
    this._edges.update()
  }

  resize (width: number, height: number) {
    this._width = requirePositiveNumber(width, 'width')
    this._height = requirePositiveNumber(height, 'height')
    this._corners.update()
    this._edges.update()
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

export class Edges {
  private _rectangle: Rectangle

  private _top: Line
  private _bottom: Line
  private _left: Line
  private _right: Line

  constructor (rectangle: Rectangle) {
    this._rectangle = rectangle

    const { topLeft, topRight, bottomLeft } = rectangle.corners
    const { width, height } = rectangle

    this._top = new Line(topLeft, width, Horizontal)
    this._bottom = new Line(bottomLeft, width, Horizontal)
    this._left = new Line(topLeft, height, Vertical)
    this._right = new Line(topRight, height, Vertical)
  }

  update () {
    const { topLeft, topRight, bottomLeft } = this._rectangle.corners
    const { width, height } = this._rectangle

    this._top.start.x = topLeft.x
    this._top.start.y = topLeft.y
    this._top.length = width

    this._bottom.start.x = bottomLeft.x
    this._bottom.start.y = bottomLeft.y
    this._bottom.length = width

    this._left.start.x = topLeft.x
    this._left.start.y = topLeft.y
    this._left.length = height

    this._right.start.x = topRight.x
    this._right.start.y = topRight.y
    this._right.length = height
  }

  get top () : Readonly<Line> {
    return this._top
  }

  get bottom () : Readonly<Line> {
    return this._bottom
  }

  get left () : Readonly<Line> {
    return this._left
  }

  get right () : Readonly<Line> {
    return this._right
  }
}
