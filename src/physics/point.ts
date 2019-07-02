import { requireNonNegativeNumber } from './utils'

export default class Point {
  private _x: number
  private _y: number

  constructor (x: number, y: number) {
    this._x = requireNonNegativeNumber(x, 'x')
    this._y = requireNonNegativeNumber(y, 'y')
  }

  get x () {
    return this._x
  }

  set x (x: number) {
    this._x = requireNonNegativeNumber(x, 'x')
  }

  get y () {
    return this._y
  }

  set y (y: number) {
    this._y = requireNonNegativeNumber(y, 'y')
  }

  clone () {
    return new Point(this.x, this.y)
  }
}
