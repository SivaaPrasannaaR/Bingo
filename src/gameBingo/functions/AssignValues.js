export const bingo = 'BINGO'
export const nLen = 5

//info about players
export let player = {
  nextPlayer: 1,
  strikeNumber: 0,

  p1: [],
  p2: [],

  p1Board: [],
  p2Board: [],
}

//Row and Column Setup to check score
export let rowColCheck = {
  p1RowColSore: 0,
  p2RowColSore: 0,
}

//Diagonal Setup to check score
export let diagonalCheck = {
  d1: false,
  d2: false,

  p1DiagonalScore: 0,
  p2DiagonalScore: 0,

  p1d1: false,
  p1d2: false,

  p2d1: false,
  p2d2: false,
}
