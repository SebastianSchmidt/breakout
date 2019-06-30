import { toPoint } from './point'

export default class {
  constructor (start, end) {
    this.start = start
    this.end = end
  }

  get start () {
    return this._start
  }

  set start (start) {
    this._start = check(start, 'start')
  }

  get end () {
    return this._end
  }

  set end (end) {
    this._end = check(end, 'end')
  }
}

const check = (value, name) => {
  try {
    return toPoint(value)
  } catch (error) {
    if (error instanceof TypeError) {
      error.message = name + ': ' + error.message
    }
    throw error
  }
}
