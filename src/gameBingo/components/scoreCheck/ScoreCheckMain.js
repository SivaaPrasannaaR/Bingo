import { diagonalCheck, rowColCheck } from '../../functions/AssignValues'
import { BingoDiagonalCheck } from './BingoDiagonalCheck'
import { BingoRowColumnCheck } from './BingoRowColumnCheck'

export const ScoreCheckMain = (setP1Score, setP2Score) => {
  BingoDiagonalCheck()
  BingoRowColumnCheck()

  setP1Score(diagonalCheck.p1DiagonalScore + rowColCheck.p1RowColSore)
  setP2Score(diagonalCheck.p2DiagonalScore + rowColCheck.p2RowColSore)

  return <div></div>
}
