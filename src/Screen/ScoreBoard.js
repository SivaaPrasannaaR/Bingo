import React from 'react'
import { bingo } from '../components/functions/AssignValues'

import { useDataContext } from '../context/DataContext'

const ScoreBoard = () => {
  const { p1Score, p2Score, recNumber } = useDataContext()

  // console.log('p1 ', p1Score)
  // console.log('p2 ', p2Score)
  return (
    <div className="scoreBoardContainer">
      <div className="scoreDiv">
        <h1>Score Board</h1>
        <div className="opponentChoice">
          <h2>Opponent Choice</h2>
          <button className="boardButton">{recNumber}</button>
        </div>
        <div className="myScoreDiv">
          <h3>My Score: {bingo.substring(0, p1Score)}</h3>
        </div>
        <div className="opponentScoreDiv">
          <h3>Opponent Score: {bingo.substring(0, p2Score)}</h3>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
