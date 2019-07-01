import Point from './point'

export default class Circle {
  public _center: Point
  private _radius: number

  constructor (center: Point, radius: number) {
    this._center = center.clone()
    this._radius = checkRadius(radius)
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
    this._radius = checkRadius(radius)
  }

  clone () {
    return new Circle(this.center, this.radius)
  }
}

const checkRadius = (value: number) => {
  if (value > 0) {
    return value
  } else {
    throw new TypeError('radius must be a number greater than zero: ' + value + ' (' + typeof value + ')')
  }
}
