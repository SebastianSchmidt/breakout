import Point from './point'

export default class Rectangle {
  public topLeft: Point
  private _width: number
  private _height: number

  constructor (topLeft: Point, width: number, height: number) {
    this.topLeft = topLeft.clone()
    this._width = check(width, 'width')
    this._height = check(height, 'height')
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = check(width, 'width')
  }

  get height () {
    return this._height
  }

  set height (height) {
    this._height = check(height, 'height')
  }
}

const check = (value: number, name: string) => {
  if (value > 0) {
    return value
  } else {
    throw new TypeError(name + ' must be a number greater than zero: ' + value + ' (' + typeof value + ')')
  }
}
