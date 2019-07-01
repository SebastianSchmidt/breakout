import Point from './point'

export default class Line {
  private _start: Point
  private _end: Point

  constructor (start: Point, end: Point) {
    this._start = start.clone()
    this._end = end.clone()
  }

  get start () {
    return this._start
  }

  set start (start: Point) {
    this._start = start.clone()
  }

  get end () {
    return this._end
  }

  set end (end: Point) {
    this._end = end.clone()
  }

  clone () {
    return new Line(this.start, this.end)
  }
}
