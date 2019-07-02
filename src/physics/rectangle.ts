import Point from './point'
import { requirePositiveNumber } from './utils'

export default class Rectangle {
  public topLeft: Point
  private _width: number
  private _height: number

  constructor (topLeft: Point, width: number, height: number) {
    this.topLeft = topLeft.clone()
    this._width = requirePositiveNumber(width, 'width')
    this._height = requirePositiveNumber(height, 'height')
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
