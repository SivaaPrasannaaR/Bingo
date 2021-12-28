import React, { useState } from 'react'
import { diagonalCheck, player, rowColCheck } from './functions/AssignValues'
import { BingoRowColumnCheck } from './scoreCheck/BingoRowColumnCheck'
import { BingoDiagonalCheck } from './scoreCheck/BingoDiagonalCheck'

export default function Card(props) {
  const [bgColor, setBgColor] = useState('teal')

  const onClickHandler = () => {
    updatePlayer(props.val.num)
    ScoreCheckMain()
    setBgColor('red')

    // setBgColor(props.numberOneHolder.find((p) => p.num == props.val.num).numColor)
  }

  return (
    <div className="card">
      <button
        className="boardButton"
        style={{ backgroundColor: bgColor }}
        onClick={onClickHandler}
      >
        {props.val.unique}
      </button>
    </div>
  )
}

const updatePlayer = (value) => {
  player.p1.map((item) => {
    if (item.num == value) {
      item.used = true
      item.numColor = 'red'
    }
  })
  player.p2.map((item) => {
    if (item.num == value) {
      item.used = true
      item.numColor = 'red'
    }
  })
  // console.log('updateNum 1 ', player.p1)
  // console.log('updateNum 2 ', player.p2)
}

const ScoreCheckMain = () => {
  BingoDiagonalCheck()
  BingoRowColumnCheck()

  player.p1Score = diagonalCheck.p1DiagonalScore + rowColCheck.p1RowColSore
  player.p2Score = diagonalCheck.p2DiagonalScore + rowColCheck.p2RowColSore

  console.log('p1 ', player.p1Score)
  console.log('p2 ', player.p2Score)

  // if (player.p1Score === 5) {
  // } else if (player.p2Score === 5) {
  // } else if (player.p1Score === 5 && player.p2Score === 5) {
  // }
  // }
  return <div></div>
}
