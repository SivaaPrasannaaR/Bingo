import React from 'react'
import { useDataContext } from '../../../context/DataContext'
import { toDisplayPayerBoard } from '../../functions/toDisplayPayerBoard'
import { bingo } from '../../functions/AssignValues'
import styles from './ScoreBoard.module.scss'

const ScoreBoard = ({ setDisplayBoard }) => {
  const { p1Score, p2Score, recNumber } = useDataContext()

  const displaySecondPlayerBoard = (player) => {
    toDisplayPayerBoard(setDisplayBoard, player)
  }
  return (
    <div className={styles.scoreBoardContainer}>
      <div className="scoreDiv">
        <h1>Score Board</h1>
        <div>
          <h2>Opponent Choice</h2>
          <button className={styles.boardButton}>{recNumber}</button>
        </div>
        <div>
          <h3>My Score: {bingo.substring(0, p1Score)}</h3>
        </div>
        <div>
          <h3>Opponent Score: {bingo.substring(0, p2Score)}</h3>
        </div>
        <div>
          <button
            className={styles.secondPlayerCheck}
            onClick={() => displaySecondPlayerBoard('p2')}
          >
            Check Second Player
          </button>
        </div>
        <div>
          <button
            className={styles.secondPlayerCheck}
            onClick={() => displaySecondPlayerBoard('')}
          >
            Compare Both
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
