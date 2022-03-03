import React from 'react'
import BingoBoard from '../components/BingoBoard'
import ScoreBoard from '../components/scoreBoard/ScoreBoard'
import Dashboard from '../components/dashboard/Dashboard'
import { useDataContext } from '../../context/DataContext'

export const BingoIndex = () => {
  const [displayBoard, setDisplayBoard] = React.useState({
    p1: false,
    p2: false,
  })
  const { numberOneHolder, numberTwoHolder } = useDataContext()

  return (
    <>
      <Dashboard setDisplayBoard={setDisplayBoard} />

      <div className="headBoardContainer">
        <ScoreBoard setDisplayBoard={setDisplayBoard} />
        <div className="boardContainer">
          {displayBoard.p1 && (
            <BingoBoard numberHolder={numberOneHolder} player={'p1'} />
          )}
          {displayBoard.p2 && (
            <BingoBoard numberHolder={numberTwoHolder} player={'p2'} />
          )}
        </div>
      </div>
    </>
  )
}
