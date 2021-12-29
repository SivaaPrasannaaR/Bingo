import React, { useCallback, useState } from 'react'
import { useDataContext } from '../context/DataContext'
import { RecomendedNumber } from './functions/RecomendedNumber'
import { ScoreCheckMain } from './scoreCheck/ScoreCheckMain'
import { updateNumberForPlayers } from './functions/updateNumberForPlayers'
import { player } from './functions/AssignValues'

export default function Card(props) {
  const {
    setP1Score,
    setP2Score,
    setRecNumber,
    numberOneHolder,
    numberTwoHolder,
    setNumberOneHolder,
    setNumberTwoHolder,
    bgColor,
    setBgColor,
  } = useDataContext()

  const onClickHandler = useCallback(() => {
    updateNumberForPlayers(props.val.num)
    // setNumberOneHolder(player.p1)
    // setNumberTwoHolder(player.p2)

    ScoreCheckMain(setP1Score, setP2Score)
    setBgColor(!bgColor) //it is used unnecessary to render the screen when onclick

    let recomendNum = RecomendedNumber(player.p2Board)
    setRecNumber(recomendNum.num)
    console.log('recomendNum', recomendNum)
  })

  return (
    <div className="card">
      <button
        className="boardButton"
        style={
          props.decidePlayer
            ? numberOneHolder[props.val.unique - 1].used
              ? { backgroundColor: 'red' }
              : { backgroundColor: 'teal' }
            : numberTwoHolder[props.val.unique - 1].used
            ? { backgroundColor: 'red' }
            : { backgroundColor: 'teal' }
        }
        onClick={onClickHandler}
      >
        {props.val.num}
      </button>
    </div>
  )
}
