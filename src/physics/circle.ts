import Point from './point'
import { requirePositiveNumber } from './utils'

export default class Circle {
  public _center: Point
  private _radius: number

  constructor (center: Point, radius: number) {
    this._center = center.clone()
    this._radius = requirePositiveNumber(radius, 'radius')
  }

  get center () {
    return this._center
  }

  set center (center: Point) {
    this._center = center.clone()
  }

  get radius () {
    return this._radius
  }

  set radius (radius: number) {
    this._radius = requirePositiveNumber(radius, 'radius')
  }

  clone () {
    return new Circle(this.center, this.radius)
  }
}
