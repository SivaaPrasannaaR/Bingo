import { nLen, player, rowColCheck } from '../functions/AssignValues'

export const BingoRowColumnCheck = (props) => {
  player.p1Board = CreatePlayerBoard(player.p1)
  player.p2Board = CreatePlayerBoard(player.p2)

  rowColCheck.p1RowColSore = checkRowColumn(player.p1Board)
  rowColCheck.p2RowColSore = checkRowColumn(player.p2Board)
}

const CreatePlayerBoard = (arr) => {
  let nArr = []
  for (let i = 0; i < arr.length; i += nLen) {
    let tempArray
    tempArray = arr.slice(i, i + nLen)
    nArr.push(tempArray)
  }
  return nArr
}

const checkRowColumn = (ck) => {
  let pColumn = []
  let pRow = []
  let i = 0
  for (let i = 0; i < nLen; i++) {
    //each column Check
    if (
      ck[0][i].used &&
      ck[1][i].used &&
      ck[2][i].used &&
      ck[3][i].used &&
      ck[4][i].used
    ) {
      pColumn.push(true)
    }

    //each row check
    if (
      ck[i][0].used &&
      ck[i][1].used &&
      ck[i][2].used &&
      ck[i][3].used &&
      ck[i][4].used
    ) {
      pRow.push(true)
    }
  }

  return pColumn.length + pRow.length
}
