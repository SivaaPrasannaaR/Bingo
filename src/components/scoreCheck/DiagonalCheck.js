import { useDataContext } from '../../context/DataContext'

export const DiagonalCheck = (props) => {
  const { checkDiagonal, player } = useDataContext()

  let cv = props.ck
  let nextPlayer = props.nextPlayer
  if (
    cv[0][0] == 0 &&
    cv[1][1] == 0 &&
    cv[2][2] == 0 &&
    cv[3][3] == 0 &&
    cv[4][4] == 0
  )
    checkDiagonal.d1 = true
  else checkDiagonal.d1 = false

  if (
    cv[0][4] == 0 &&
    cv[1][3] == 0 &&
    cv[2][2] == 0 &&
    cv[3][1] == 0 &&
    cv[4][0] == 0
  )
    checkDiagonal.d2 = true
  else checkDiagonal.d2 = false

  if (checkDiagonal.d1 && checkDiagonal.p1d1 == 0 && player.nextPlayer == 1) {
    checkDiagonal.p1d1 = 1
    player.p1Score++
  }

  if (checkDiagonal.d1 && checkDiagonal.p2d1 == 0 && player.nextPlayer == 2) {
    checkDiagonal.p2d1 = 1
    player.p1Score++
  }

  if (checkDiagonal.d2 && checkDiagonal.p1d2 == 0 && player.nextPlayer == 1) {
    checkDiagonal.p1d2 = 1
    player.p1Score++
  }

  if (checkDiagonal.d2 && checkDiagonal.p2d2 == 0 && player.nextPlayer == 2) {
    checkDiagonal.p2d2 = 1
    player.p1Score++
  }
}
