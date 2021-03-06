import { requirePositiveNumber } from '../utils'
import Point from './point'

export default class Line {
  private _start: Point
  private _length: number = 0
  private _orientation: Orientation

  constructor (start: Point | Readonly<Point>, length: number, orientation: Orientation) {
    this._start = start.clone()
    this.length = length
    this._orientation = orientation
  }

  get start () {
    return this._start
  }

  set start (start: Point) {
    this._start = start.clone()
  }

  get length () {
    return this._length
  }

  set length (length: number) {
    this._length = requirePositiveNumber(length, 'length')
  }

  get orientation () {
    return this._orientation
  }

  set orientation (orientation: Orientation) {
    this._orientation = orientation
  }

  clone () {
    return new Line(this.start, this.length, this.orientation)
  }
}

export enum Orientation {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical'
}
