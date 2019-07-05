import Brick, { BRICK_HEIGHT, BRICK_WIDTH } from './brick'

export const NUMBER_OF_ROWS = 18
export const NUMBER_OF_COLUMNS = 14

export const FIELD_WIDTH = NUMBER_OF_COLUMNS * BRICK_WIDTH
export const FIELD_HEIGHT = (NUMBER_OF_ROWS + 3) * BRICK_HEIGHT

export type Cell = Brick | null
export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

type Field = [Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row, Row]
export default Field

export function createEmptyField () : Field {
  const field: any = []

  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    field.push([])
    for (let column = 0; column < NUMBER_OF_COLUMNS; column++) {
      field[row].push(null)
    }
  }

  return field
}
