import React from 'react'
import { useUserContext } from '../context/UserContext'

const ScoreBoard = () => {
  const { user, logoutUser } = useUserContext()
  return (
    <div className="scoreBoardContainer">
      <div className="scoreDiv">
        <h1>Score Board</h1>
        <div className="opponentChoice">
          <h2>Opponent Choice</h2>
          <button className="boardButton">5</button>
        </div>
        <div className="myScoreDiv">
          <h3>My Score: Bingo</h3>
        </div>
        <div className="opponentScoreDiv">
          <h3>Opponent Score: Bingo</h3>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
