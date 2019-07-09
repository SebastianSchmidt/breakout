import { requireNonNegativeNumber, requirePositiveNumber } from './utils'

describe('requirePositiveNumber', () => {
  test('returns value when value is greater than zero', () => {
    expect(requirePositiveNumber(0.1, 'test')).toBe(0.1)
    expect(requirePositiveNumber(1, 'test')).toBe(1)
    expect(requirePositiveNumber(2.4, 'test')).toBe(2.4)
  })

  test('throws TypeError when value is zero', () => {
    expect(() => requirePositiveNumber(0, 'test')).toThrow(new TypeError(
      'test must be a number greater than zero: 0 (number)'))
  })

  test('throws TypeError when value is less than zero', () => {
    expect(() => requirePositiveNumber(-1, 'test')).toThrow(new TypeError(
      'test must be a number greater than zero: -1 (number)'))
  })
})

describe('requireNonNegativeNumber', () => {
  test('returns value when value is greater than or equal to zero', () => {
    expect(requireNonNegativeNumber(0, 'test')).toBe(0)
    expect(requireNonNegativeNumber(0.1, 'test')).toBe(0.1)
    expect(requireNonNegativeNumber(1, 'test')).toBe(1)
    expect(requireNonNegativeNumber(2.4, 'test')).toBe(2.4)
  })

  test('throws TypeError when value is less than zero', () => {
    expect(() => requireNonNegativeNumber(-1, 'test')).toThrow(new TypeError(
      'test must be a number greater than or equal to zero: -1 (number)'))
  })
})
