export function requirePositiveNumber (value: number, name: string) {
  if (value > 0) {
    return value
  } else {
    throw new TypeError(name + ' must be a number greater than zero: ' + value + ' (' + typeof value + ')')
  }
}

export function requireNonNegativeNumber (value: number, name: string) {
  if (value >= 0) {
    return value
  } else {
    throw new TypeError(name + ' must be a number greater than or equal to zero: ' + value + ' (' + typeof value + ')')
  }
}
