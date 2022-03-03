import { diagonalCheck, player } from '../../functions/AssignValues'

export const BingoDiagonalCheck = () => {
  //Player One Straight Diagonal  Check
  if (!diagonalCheck.p1d1 && straightDiagonalCheck(player.p1)) {
    diagonalCheck.p1d1 = true
    diagonalCheck.p1DiagonalScore = diagonalCheck.p1DiagonalScore + 1
  }

  //Player One Reverse Diagonal  Check
  if (!diagonalCheck.p1d2 && reverseDiagonalCheck(player.p1)) {
    diagonalCheck.p1d2 = true
    diagonalCheck.p1DiagonalScore = diagonalCheck.p1DiagonalScore + 1
  }

  //Player Two Straight Diagonal  Check
  if (!diagonalCheck.p2d1 && straightDiagonalCheck(player.p2)) {
    diagonalCheck.p2d1 = true
    diagonalCheck.p2DiagonalScore = diagonalCheck.p2DiagonalScore + 1
  }

  //Player Two Reverse Diagonal  Check
  if (!diagonalCheck.p2d2 && reverseDiagonalCheck(player.p2)) {
    diagonalCheck.p2d2 = true
    diagonalCheck.p2DiagonalScore = diagonalCheck.p2DiagonalScore + 1
  }

  // console.log('p1 score: ', diagonalCheck.p1DiagonalScore)
}

const straightDiagonalCheck = (player) => {
  if (
    player[0].used &&
    player[6].used &&
    player[12].used &&
    player[18].used &&
    player[24].used
  ) {
    return true
  } else return false
}

const reverseDiagonalCheck = (player) => {
  if (
    player[4].used &&
    player[8].used &&
    player[12].used &&
    player[16].used &&
    player[20].used
  ) {
    return true
  } else return false
}
