import Point from './point'

export default class Line {
  private _start: Point
  private _length: number
  private _orientation: Orientation

  constructor (start: Point, length: number, orientation: Orientation) {
    this._start = start.clone()
    this._length = checkLength(length)
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

  set length (length) {
    this._length = checkLength(length)
  }

  get orientation () {
    return this._orientation
  }

  set orientation (orientation) {
    this._orientation = orientation
  }

  clone () {
    return new Line(this.start, this.length, this.orientation)
  }
}

export enum Orientation {
  Horizontal,
  Vertical
}

const checkLength = (value: number) => {
  if (value > 0) {
    return value
  } else {
    throw new TypeError('length must be a number greater than zero: ' + value + ' (' + typeof value + ')')
  }
}
