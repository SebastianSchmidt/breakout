export default class Point {
  private _x: number
  private _y: number

  constructor (x: number, y: number) {
    this._x = check(x, 'x')
    this._y = check(y, 'y')
  }

  get x () {
    return this._x
  }

  set x (x) {
    this._x = check(x, 'x')
  }

  get y () {
    return this._y
  }

  set y (y) {
    this._y = check(y, 'y')
  }
}

const check = (value: number, name: string) => {
  if (value >= 0) {
    return value
  } else {
    throw new TypeError(name + ' must be a number greater than or equal to zero: ' + value + ' (' + typeof value + ')')
  }
}
