import { useDataContext } from '../../context/DataContext'

export const CheckRowAndColumForBingos = (props) => {
  const { rowColCheck, player } = useDataContext()

  let nLen = 5

  let ck = props.ck
  let nextPlayer = props.nextPlayer

  for (let i = 0, j = 0; i < nLen && j < nLen; i++, j++) {
    if (
      ck[0][j] == 0 &&
      ck[1][j] == 0 &&
      ck[2][j] == 0 &&
      ck[3][j] == 0 &&
      ck[4][j] == 0
    )
      if (nextPlayer == 1 && rowColCheck.p1Column[j] == 0)
        rowColCheck.p1Column[j] = 1
      else if (nextPlayer == 2 && rowColCheck.p2Column[j] == 0)
        rowColCheck.p2Column[j] = 1

    if (
      ck[i][0] == 0 &&
      ck[i][1] == 0 &&
      ck[i][2] == 0 &&
      ck[i][3] == 0 &&
      ck[i][4] == 0
    )
      if (nextPlayer == 1 && rowColCheck.p1Row[j] == 0) {
        rowColCheck.p1Row[j] = 1
      } else if (nextPlayer == 2 && rowColCheck.p2Row[j] == 0) {
        rowColCheck.p2Row[j] = 1
      }
  }

  for (let i = 0; i < nLen; i++) {
    if (nextPlayer == 1) {
      if (rowColCheck.p1Row[i] == 1) {
        rowColCheck.p1Row[i] = 2
        player.p1Score++
      }
      if (rowColCheck.p1Column[i] == 1) {
        rowColCheck.p1Column[i] = 2
        player.p1Score++
      }
    }

    if (nextPlayer == 2) {
      if (rowColCheck.p2Row[i] == 1) {
        rowColCheck.p2Row[i] = 2
        player.pScore++
      }
      if (rowColCheck.p2Column[i] == 1) {
        rowColCheck.p2Column[i] = 2
        player.pScore++
      }
    }
  }
}
