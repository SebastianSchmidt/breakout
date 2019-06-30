export default class Point {
  constructor (x, y) {
    if (Array.isArray(x) && y === undefined) {
      this.x = x[0]
      this.y = x[1]
    } else {
      this.x = x
      this.y = y
    }
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

export const toPoint = (arg1, arg2) => {
  if (arg1 instanceof Point) {
    return new Point(arg1.x, arg1.y)
  } else {
    return new Point(arg1, arg2)
  }
}

const check = (value, name) => {
  if (typeof value === 'number' && value >= 0) {
    return value
  } else {
    throw new TypeError(name + ' must be a number greater than or equal to zero: ' + value + ' (' + typeof value + ')')
  }
}
