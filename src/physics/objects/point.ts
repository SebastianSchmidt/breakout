import { requireNonNegativeNumber } from '../utils'

export default class Point {
  private _x: number = 0
  private _y: number = 0

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
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
