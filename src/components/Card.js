import React, { useCallback, useState } from 'react'
import { diagonalCheck, player, rowColCheck } from './functions/AssignValues'
import { BingoRowColumnCheck } from './scoreCheck/BingoRowColumnCheck'
import { BingoDiagonalCheck } from './scoreCheck/BingoDiagonalCheck'
import { useDataContext } from '../context/DataContext'
// import { RecomendedNumber } from './functions/RecomendedNumber'

export default function Card(props) {
  const [bgColor, setBgColor] = useState(false)
  const { setP1Score, setP2Score } = useDataContext()

  const onClickHandler = useCallback(() => {
    updatePlayer(props.val.num)
    ScoreCheckMain(setP1Score, setP2Score)
    setBgColor(!bgColor)

    // OpponentTimes(player.p2Board)
    // let recomendNum = RecomendedNumber(player.p2Board)
    // console.log(recomendNum)

    // setBgColor(props.numberOneHolder.find((p) => p.num === props.val.num).numColor)
  })

  return (
    <div className="card">
      <button
        className="boardButton"
        style={
          bgColor ? { backgroundColor: 'red' } : { backgroundColor: 'teal' }
        }
        onClick={onClickHandler}
      >
        {props.val.num}
      </button>
    </div>
  )
}

const updatePlayer = (value) => {
  player.p1.map((item) => {
    if (item.num === value) {
      item.used = true
      // item.numColor = 'red'
    }
  })
  player.p2.map((item) => {
    if (item.num === value) {
      item.used = true
      // item.numColor = 'red'
    }
  })
  return
  // console.log('updateNum 1 ', player.p1)
  // console.log('updateNum 2 ', player.p2)
}

const ScoreCheckMain = (setP1Score, setP2Score) => {
  BingoDiagonalCheck()
  BingoRowColumnCheck()

  setP1Score(diagonalCheck.p1DiagonalScore + rowColCheck.p1RowColSore)
  setP2Score(diagonalCheck.p2DiagonalScore + rowColCheck.p2RowColSore)

  return <div></div>
}

// const OpponentTimes = (rec) => {
//   let  recomendNum = RecomendedNumber(rec)
//   console.log(recomendNum)
// }
