import { nLen } from './AssignValues'

let recomendateNum = 13
let t3row = 0
let t3column = 0
let rt = 0
let ttempRow = 0
let ttempColumn = 0
let row3ArrCount = AssignZeroValueToArray(10) // = new let[10];
let row3ArrValue = AssignZeroValueToArray(10) //= new let[10];
let column3ArrCount = AssignZeroValueToArray(10) // = new let[10];
let column3ArrValue = AssignZeroValueToArray(10) //= new let[10];
let recAll = AssignZeroValueToArray(nLen * nLen) //= new let[(nLen * nLen)];

let row3Count = 0
let row3Value = 0

let column3Count = 0
let column3Value = 0

const AssignZeroValueToArray = (n) => {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = 0
  }

  return arr
}

export const RecomendedNumber = (rec) => {
  for (let i = 0; i < nLen; i++) {
    let j = 0
    while (j < nLen) {
      if (!rec[i][j].used) {
        if (i === j || i + j === nLen - 1) {
          let ttemp = recDiagonalCheck(i, j, rec)
          if (ttemp === 4 && (i !== 2 || j !== 2)) {
            return tempDiagonal(i, j, rec)
          }
          recAll[rt] = recAll[rt] + ttemp
        }

        ttempRow = recRowCheck(i, j, rec)
        if (ttempRow === 3) {
          row3Count = 0
          row3Value = tempRow3(i, j, rec)
          row3ArrCount[t3row] = row3Count
          row3ArrValue[t3row] = row3Value
          t3row++
        }
        if (ttempRow === 4) {
          return tempRow4(i, j, rec)
        }
        recAll[rt] = recAll[rt] + ttempRow
        ttempColumn = recColumnCheck(i, j, rec)
        if (ttempColumn === 3) {
          column3Count = 0
          column3Value = tempColumn3(i, j, rec)
          column3ArrCount[t3row] = column3Count
          column3ArrValue[t3row] = column3Value
          t3column++
        }
        if (ttempColumn === 4) {
          return tempColumn4(i, j, rec)
        }
        recAll[rt] = recAll[rt] + ttempColumn
      }
      j++
      rt++
    }
  }

  let recMax = recAll[0]
  for (let i2 = 0; i2 < nLen * nLen; i2++) {
    if (recMax < recAll[i2]) {
      recMax = recAll[i2]
    }
  }
  if ((recMax !== 1 && ttempRow === 3) || ttempColumn === 3) {
    if (recMax - row3Count === 1) {
      let iitmax = row3ArrCount[1]
      for (let iit = 0; iit < nLen; iit++) {
        if (row3ArrCount[iit] >= iitmax) {
          iitmax = row3ArrCount[iit]
          row3Value = row3ArrValue[iit]
        }
      }
      return row3Value
    } else if (recMax - column3Count === 1) {
      let iitmax2 = column3ArrCount[1]
      for (let iit2 = 0; iit2 < nLen; iit2++) {
        if (column3ArrCount[iit2] >= iitmax2) {
          iitmax2 = column3ArrCount[iit2]
          column3Value = column3ArrValue[iit2]
        }
      }
      return column3Value
    }
  }
  let noOfMax = 0
  for (let i3 = 0; i3 < nLen * nLen; i3++) {
    if (recMax === recAll[i3]) {
      noOfMax++
    }
  }
  let sameMaxArr = AssignZeroValueToArray(noOfMax) //= new let[noOfMax]()
  let rt2 = 0
  for (let i4 = 0; i4 < nLen * nLen; i4++) {
    if (recMax > 0 && recMax === recAll[i4]) {
      sameMaxArr[rt2] = i4 + 1
      rt2++
    }
  }
  let priorityOrder = [
    13, 7, 9, 17, 19, 1, 5, 21, 25, 8, 12, 14, 18, 3, 11, 15, 23, 2, 4, 6, 10,
    16, 20, 22, 24,
  ]
  let i5 = 0
  loop7: while (true) {
    if (i5 >= nLen * nLen) {
      break
    }
    let length = sameMaxArr.length
    for (let i6 = 0; i6 < length; i6++) {
      if (sameMaxArr[i6] === priorityOrder[i5]) {
        recomendateNum = priorityOrder[i5]
        break loop7
      }
    }
    i5++
  }
  let aat = 1
  for (let i7 = 0; i7 < nLen; i7++) {
    let j2 = 0
    while (j2 < nLen) {
      if (aat === recomendateNum) {
        return rec[i7][j2]
      }
      j2++
      aat++
    }
  }
  return 13
}

const tempColumn3 = (i, j, rec) => {
  let flag = 0
  let recZero1 = 0
  let recZero2 = 0
  let count1 = 0
  let count2 = 0
  for (let it = 0; it < nLen; it++) {
    if (!rec[it][j].used && flag === 0) {
      recZero1 = rec[it][j].num
      count1 = recColumnCheck(it, j, rec) + recRowCheck(it, j, rec)
      if (it === j || it + j === nLen - 1) {
        count1 += recDiagonalCheck(it, j, rec)
      }
      flag = 1
    } else if (!rec[it][j].used) {
      recZero2 = rec[it][j].num
      count2 = recColumnCheck(it, j, rec) + recRowCheck(it, j, rec)
      if (it === j || it + j === nLen - 1) {
        count2 += recDiagonalCheck(it, j, rec)
      }
    }
  }
  if (count1 > count2) {
    let recZero = recZero1
    column3Count = count1
    return recZero
  }
  let recZero3 = recZero2
  column3Count = count2
  return recZero3
}

const tempRow3 = (i, j, rec) => {
  let flag = 0
  let recZero1 = 0
  let recZero2 = 0
  let count1 = 0
  let count2 = 0
  for (let jt = 0; jt < nLen; jt++) {
    if (!rec[i][jt].used && flag === 0) {
      recZero1 = rec[i][jt].num
      count1 = recRowCheck(i, jt, rec) + recColumnCheck(i, jt, rec)

      if (i === jt || i + jt === nLen - 1) {
        count1 += recDiagonalCheck(i, jt, rec)
      }
      flag = 1
    } else if (!rec[i][jt].used) {
      recZero2 = rec[i][jt].num
      count2 = recRowCheck(i, jt, rec) + recColumnCheck(i, jt, rec)
      if (i === jt || i + jt === nLen - 1) {
        count2 += recDiagonalCheck(i, jt, rec)
      }
    }
  }
  if (count1 > count2) {
    let recZero = recZero1
    row3Count = count1
    return recZero
  }
  let recZero3 = recZero2
  row3Count = count2
  return recZero3
}

const tempDiagonal = (i, j, rec) => {
  let recZero = 0
  if (i === 2 && j === 2) {
    let leftdia = 0
    let rightdia = 0

    let it = 0
    for (let jt = nLen - 1; jt >= 0 && it < nLen; jt--) {
      if (rec[it][jt].used) {
        rightdia++
      }
      if (rec[it][it].used) {
        leftdia++
      }
      it++
    }

    // right diagonal check if it has 4  out of 5 number selected
    if (rightdia === 4) {
      let it2 = 0
      for (let jt2 = nLen - 1; jt2 >= 0; jt2--) {
        if (!rec[it2][jt2].used) {
          recZero = rec[it2][jt2]
        }
        it2++
      }
    }
    // let diagonal check if it has 4  out of 5 number selected
    else if (leftdia === 4) {
      for (let it3 = 0; it3 < nLen; it3++) {
        if (!rec[it3][it3].used) {
          recZero = rec[it3][it3]
        }
      }
    }
  } else if (i === j) {
    for (let it4 = 0; it4 < nLen; it4++) {
      if (!rec[it4][it4].used) {
        recZero = rec[it4][it4]
      }
    }
  } else {
    let it5 = 0
    for (let jt3 = nLen - 1; jt3 >= 0; jt3--) {
      if (!rec[it5][jt3].used) {
        recZero = rec[it5][jt3]
      }
      it5++
    }
  }
  return recZero
}

const tempColumn4 = (i, j, rec) => {
  let recZero = 0
  for (let it = 0; it < nLen; it++) {
    if (!rec[it][j].used) {
      recZero = rec[it][j]
    }
  }
  return recZero
}

const tempRow4 = (i, j, rec) => {
  let recZero = 0
  for (let jt = 0; jt < nLen; jt++) {
    if (!rec[i][jt].used) {
      recZero = rec[i][jt]
    }
  }
  return recZero
}

const recRowCheck = (i, j, rec) => {
  let recZero = 0
  for (let jt = 0; jt < nLen; jt++) {
    if (rec[i][jt].used) {
      recZero++
    }
  }
  return recZero
}

const recColumnCheck = (i, j, rec) => {
  let recZero = 0
  for (let it = 0; it < nLen; it++) {
    if (rec[it][j].used) {
      recZero++
    }
  }
  return recZero
}

const recDiagonalCheck = (i, j, rec) => {
  let recZero = 0
  if (i === 2 && j === 2) {
    for (let it = 0; it < nLen; it++) {
      if (rec[it][it].used) {
        recZero++
      }
    }
    let it2 = 0
    for (let jt = nLen - 1; jt >= 0; jt--) {
      if (rec[it2][jt].used) {
        recZero++
      }
      it2++
    }
  } else if (i === j) {
    for (let it3 = 0; it3 < nLen; it3++) {
      if (rec[it3][it3].used) {
        recZero++
      }
    }
  } else {
    let it4 = 0
    for (let jt2 = nLen - 1; jt2 >= 0; jt2--) {
      if (rec[it4][jt2].used) {
        recZero++
      }
      it4++
    }
  }
  return recZero
}
